import React, { FC, ChangeEvent, KeyboardEvent, useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import { ReactComponent as LocationIcon } from '@/assets/icons/location.svg';
import classNames from 'classnames';

interface SearchInputProps {
  value?: string;
  options: Array<{ title: string }>;
  placeholder?: string;
  icon?: React.ReactNode;
  onInput?: (value: string) => void;
  className?: string;
}

const SearchInput: FC<SearchInputProps> = ({
  className,
  value = '',
  options,
  placeholder = 'Search',
  icon,
  onInput,
}) => {
  const [searchValue, setSearchValue] = useState<string>(value);
  const [filteredOptions, setFilteredOptions] = useState<Array<{ title: string }>>([]);
  const [placeholderSuggestion, setPlaceholderSuggestion] = useState<string>('');

  useEffect(() => {
    const lowerSearchValue = searchValue.toLowerCase();
  
    // Filter options based on searchValue
    const filtered = options.filter(
      (option) => option.title?.toLowerCase().includes(lowerSearchValue),
    );
    setFilteredOptions(filtered);
  
    // Calculate placeholder suggestion
    const suggestions = filtered
      .map((suggest) => suggest.title)
      .filter((title) => title.toLowerCase().startsWith(lowerSearchValue));
  
    const suggestion = suggestions.length > 0 ? suggestions[0] : '';
    setPlaceholderSuggestion(suggestion.slice(searchValue.length).toLocaleLowerCase());
  
    // Invoke onInput callback
    if (onInput) {
      onInput(searchValue);
    }
  }, [searchValue, options, onInput]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleTabPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const placeholderValue = placeholderSuggestion;

    if ((event.key === 'Tab' || event.key === 'ArrowRight') && placeholderValue) {
      event.preventDefault(); // Prevent default Tab/RightArrow behavior

      setSearchValue(`${searchValue}${placeholderValue}`);
    }
  };

  return (
    <label
      className={classNames(
        'relative flex items-center border-b border-appGray-400 w-full overflow-hidden',
        className,
      )}
    >
      {icon ? (
        <LocationIcon className="w-[14px] h-[14px] flex-shrink-0" />
      ) : (
        <SearchIcon className="w-[14px] h-[14px] flex-shrink-0" />
      )}
      <input
        value={searchValue}
        type="text"
        placeholder={placeholder}
        className="bg-transparent px-1.5 py-[17px] flex-1 w-full text-sm leading-none font-medium tracking-[-0.41px] placeholder:text-appGray-500 focus:outline-none"
        onChange={handleInput}
        onKeyDown={handleTabPress}
      />
      {filteredOptions.length > 0 && searchValue && (
        <span className="absolute top-1/2 left-[21px] -translate-y-1/2 truncate text-sm leading-none font-medium tracking-[-0.41px] pointer-events-none">
          <span className="opacity-0">{searchValue}</span>
          <span className="text-appGray-400">{placeholderSuggestion}</span>
        </span>
      )}
    </label>
  );
};

export default SearchInput;
