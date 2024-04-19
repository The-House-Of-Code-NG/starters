import React, { FC, FormEvent, useState } from 'react';
import { FooterEntryMeta } from '../../bcms/types';
import MailGunIcon from '../assets/icons/mailgun.svg';
import PaperPlaneIcon from '../assets/icons/paper-plane.svg';
import { BCMSImage } from 'gatsby-source-bcms/components';
import { ContentManager } from '../components';

interface Props {
  data: FooterEntryMeta;
}

export const Footer: FC<Props> = ({ data }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO: Send email
  };

  return (
    <footer className="pb-6">
      <div className="container">
        <div className="bg-appAccent p-5 pb-6 rounded-2xl lg:p-10">
          <div className="pb-5 border-b border-[#B2CF81] mb-4 md:flex md:items-start md:justify-between md:pb-10 md:mb-6 lg:pb-20 lg:mb-8">
            <div className="leading-[1.16] font-semibold tracking-[-0.6px] max-w-[171px] mb-2.5 md:text-2xl md:max-w-[350px] lg:text-[40px] lg:leading-[1.12] lg:tracking-[-2.41px] lg:max-w-[420px] xl:text-[56px] xl:leading-[1.12] xl:max-w-[591px]">
              {data.title}
            </div>
            <ContentManager
              items={data.description}
              className="text-sm leading-[1.2] tracking-[-0.6px] font-medium max-w-[237px] md:text-base md:leading-[1.2] md:max-w-[270px] lg:text-xl lg:leading-[1.2] lg:tracking-[-0.41px] lg:max-w-[350px] xl:text-2xl xl:leading-[1.2] xl:max-w-[469px]"
            />
          </div>
          <div className="md:flex md:items-center md:justify-between md:gap-20">
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-white pl-[14px] pr-2 rounded-[48px] max-md:mb-6 md:pl-[18px] lg:w-full lg:max-w-[600px]"
            >
              <img
                src={MailGunIcon}
                alt="Mailgun"
                className="w-4 h-4 flex-shrink-0 md:w-5 md:h-5"
              />
              <label className="w-full flex-1">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-3 py-3 w-full text-sm leading-none tracking-[-0.41px] placeholder:text-appText focus:outline-none md:text-base md:leading-none md:py-[19px]"
                />
              </label>
              <button
                type="submit"
                aria-label="Submit"
                className="flex items-center justify-center w-6 h-6 bg-appText rounded-full flex-shrink-0 md:w-10 md:h-10"
              >
                <img
                  src={PaperPlaneIcon}
                  alt="Icon"
                  className="w-2.5 h-2.5 md:w-4 md:h-4"
                />
              </button>
            </form>
            <div className="grid grid-cols-2 justify-items-center gap-4 md:flex md:items-center lg:gap-6">
              {data.social.map((link, index) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.icon.alt_text}
                  key={index}
                  className="bg-appText flex items-center justify-center w-[135px] rounded-full aspect-square md:w-[54px]"
                >
                  <BCMSImage
                    media={link.icon}
                    svg
                    className="w-10 h-10 cover md:w-6 md:h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
