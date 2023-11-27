import React, { FC } from 'react';
import ContentManager from '@/components/ContentManager';
import Btn from '@/components/Btn';
import { Link } from 'gatsby';

interface JobsCardProps {
  card: any;
}

const JobsCard: FC<JobsCardProps> = ({ card }) => {
  return (
    <article>
      <Link to={`/jobs/${card.bcms.meta.en.slug}`}>
        <a className="flex flex-col border border-[#DBD9D5] rounded-[5px] p-5 transition-colors duration-300 hover:bg-[#E0DED9] lg:px-6 lg:py-7 lg:rounded-lg">
          <div className="flex items-center justify-between mb-3 lg:mb-6">
            <div>
              <h3 className="text-sm leading-none font-semibold font-PlayfairDisplay tracking-[-0.41px] mb-2 lg:text-xl lg:leading-none">
                {card.bcms.meta.en.title}
              </h3>
              <div className="text-xs leading-none font-medium tracking-[-0.41px] text-appGray-600 lg:text-base lg:leading-none">
                {card.bcms.meta.en.location.jobLocation && card.bcms.meta.en.location.jobLocation.meta.en?.title}
              </div>
            </div>
            {card.bcms.meta.en.featured && (
              <div className="px-3 py-1.5 rounded-[32px] bg-appAccent/10 text-xs leading-none font-medium tracking-[-0.41px] text-appAccent lg:px-7 lg:py-[13px] lg:text-sm lg:leading-none">
                Featured
              </div>
            )}
          </div>
          <ContentManager
            item={card.bcms.meta.en.description}
            className="text-xs leading-normal font-medium tracking-[-0.41px] text-appGray-500 mb-6 lg:text-base lg:leading-[1.4] lg:mb-8"
          />
          <Btn tag="div" size="sm" className="justify-center mt-auto">
            <span>Apply</span>
          </Btn>
        </a>
      </Link>
    </article>
  );
};

export default JobsCard;
