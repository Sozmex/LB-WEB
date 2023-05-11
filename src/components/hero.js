import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroimage: file(relativePath: { eq: "cityscape1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 5120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <div className="relative">
      <style>
        {`
          .hero-image {
            height: 30rem;
          }
        `}
        {/* {`
          .hero-image {
            height: 72.5rem; *also add a gradient/fade into the header 
          }
        `} */}
      </style>
      <div className="w-full overflow-hidden relative">
        <GatsbyImage
          image={getImage(data.heroimage)}
          alt="Interior Design"
          className="w-full object-cover object-center ring-5 ring-black hero-image"
          style={{ filter: "brightness(30%) blur(3px)" }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-6 py-20">
        <div className="container mx-auto">
          <div className="flex flex-col xl:px-32 items-center text-center gap-6">
            <h1 className="font-display md:text-display-2xl text-display-lg text-white">
              Lawbotics: <span className="italic"> AI Firmware</span>
            </h1>
            <p className="col-span-8 md:text-body-xl text-body-lg font-light text-white max-w-[800px]">
              Optimize Firm Workflow with the Latest in AI Innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
