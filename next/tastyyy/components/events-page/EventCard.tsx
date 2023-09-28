import React from 'react';
import { BCMSImage } from 'next-plugin-bcms/components';
import ContentManager from '@/components/ContentManager';
import { EventEntryMeta } from '@/bcms/types';

interface EventsPageEventCardProps {
  card: EventEntryMeta;
}
const EventsPageEventCard: React.FC<EventsPageEventCardProps> = ({ card }) => {
  return (
    <article className="px-6 py-8 rounded-2xl bg-[#EDEBE1]">
      <BCMSImage
        media={card.cover}
        className="cover aspect-[1.25] rounded-2xl overflow-hidden mb-4 lg:aspect-[1.77] lg:mb-6"
      />
      <div className="text-xs leading-none tracking-[-0.41px] text-appGray-600 uppercase mb-2 lg:text-base lg:leading-none lg:mb-3">
        {card.date}
      </div>
      <h3 className="leading-none font-Gloock mb-[14px] lg:text-[32px] lg:leading-none lg:mb-6">
        {card.title}
      </h3>
      <ContentManager
        item={card.description}
        className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-300 lg:text-xl lg:leading-none"
      />
    </article>
  );
};

export default EventsPageEventCard;
