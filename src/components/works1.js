import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import WorkItem from "./workItem";
import Eyebrow from "./eyebrow";
import Button from "./button";

const Works1 = () => {
  const data = useStaticQuery(graphql`
    {
      allWorksJson {
        nodes {
          id
          image {
            childImageSharp {
              gatsbyImageData(
                width: 592
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const combinedData = data.allWorksJson.nodes.map((workNode) => {
    return {
      id: workNode.id,
      image: workNode.image,
    };
  });

  return (
    <div id="#works1">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              <div className="flex flex-col gap-6">
                <Eyebrow label="Blog" />
                <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4">
                  New at <span className="italic">Lawbotics Blog</span>
                </h3>
              </div>
              {combinedData.slice(0, 1).map((node) => (
                <WorkItem
                  key={node.id}
                  image={node.image}
                />
              ))}
              <div className="xl:flex hidden items-start">
                <Button label="READ MORE" link="blog" size="lg" />
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
              {combinedData.slice(1, 3).map((node) => (
                <WorkItem
                  key={node.id}
                  image={node.image}
                />
              ))}
            </div>
          </div>
          <div className="xl:hidden flex items-start">
            <Button label="READ MORE" link="blog" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works1;
