import React from 'react'
import { BCMSImage } from 'gatsby-source-bcms/components';
import {ContentManager} from '@/src/components/ContentManager';
import {Link} from 'gatsby';
import {HomePageDivider} from '@/src/components/home-page/Divider';
interface HomepageMenuProps {
  data: any;
}

export const HomepageMenu: React.FC<HomepageMenuProps> = ({ data }) => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center mb-8 lg:mb-[88px]">
          <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
            [ 1 ]
          </div>
          <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
            {data.title}
          </h2>
          <ContentManager
            items={data.description}
            className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 uppercase max-w-[745px] mx-auto lg:text-base lg:leading-[1.3]"
          />
        </div>
      </div>
      {data.meals.map((meal: any, index: number) => (
        <Link className="flex relative" key={index} to={`/menu?s=${meal.mealType.meta.en?.title.toLowerCase()}`}>
            {meal.mealType.meta.en && (
              <div className="container">
                <div className="relative z-10 flex flex-col items-center text-center py-12 max-w-[765px] mx-auto lg:py-[150px]">
                  <h3 className="text-sm leading-none font-Gloock text-white uppercase mb-3 lg:text-[32px] lg:leading-none lg:mb-[18px]">
                    {meal.mealType.meta.en.title}
                  </h3>
                  <ContentManager
                    items={meal.mealType.meta.en.description}
                    className="text-xs leading-[1.3] tracking-[-0.41px] uppercase text-appGray-100 lg:text-lg lg:leading-[1.3]"
                  />
                </div>
                <BCMSImage
                  media={meal.mealType.meta.en?.cover}
                  options={{
                    sizes: {
                      exec: [
                        {
                          width: 750,
                          height: 444,
                        },
                        {
                          width: 1536,
                          height: 560,
                        },
                      ],
                    },
                  }}
                  className="absolute top-0 left-0 w-full h-full cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
              </div>
            )}
        </Link>
      ))}
      <HomePageDivider />
    </section>
  );
};

