import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import AwardItem from "./awardItem";

const Awards = () => {
  const data = useStaticQuery(graphql`
    {
      allAwardsJson {
        nodes {
          id
          title
          year
          logo {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <div className="bg-neutral-900">
      <div className="container mx-auto">
        <div className="flex flex-row md:items-center items-start self-auto gap-10 pl-6">
          <div className="flex flex-row items-center self-auto md:gap-10 gap-10 pl-3">
            <p className="font-display text-display-xxs italic text-white opacity-50 py-3 gap-5 pl-4">
              Trending Insights
            </p>
            <hr className="md:w-16 w-6 text-white opacity-50"></hr>
          </div>
          <div className="lg:flex lg:flex-row grid md:grid-cols-2 grid-cols-1 grow xl:gap-20 md:gap-x-20 md:gap-y-8 gap-10 justify-center">
            {data.allAwardsJson.nodes.map((node) => (
              <AwardItem
                key={node.id}
                logo={node.logo.publicURL}
                title={node.title}
                year={node.year}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Awards;
