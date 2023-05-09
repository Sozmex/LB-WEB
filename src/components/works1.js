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
      allMdx(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  `);

  const combinedData = data.allMdx.nodes.map((mdxNode, index) => {
    return {
      id: mdxNode.id,
      image: data.allWorksJson.nodes[index].image,
      title: mdxNode.frontmatter.title,
      description: mdxNode.excerpt,
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
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
              <div className="xl:flex hidden items-start">
                <Button label="READ MORE" link="/" size="lg" />
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
              {combinedData.slice(1, 3).map((node) => (
                <WorkItem
                  key={node.id}
                  image={getImage(node.image)}
                  title={node.title}
                  description={node.description}
                />
              ))}
            </div>
          </div>
          <div className="xl:hidden flex items-start">
            <Button label="READ MORE" link="Blog" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works1;
