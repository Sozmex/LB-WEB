import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Eyebrow from "./eyebrow";


const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutimage: file(relativePath: { eq: "about-law.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 592
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div id="#about">
      <div className="container mx-auto pt-2">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-18 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="ABOUT US" />
            <h2 className="font-display md:text-display-xl text-display-md font-normal pb-2">
             <span className="italic">AI Pioneers</span>{" "}
             for Legal Excellence
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
            By meticulously analyzing AI innovations, we handpick the most effective tools and strategies to optimize legal practices. Our mission is to streamline legal processes, enhance decision-making, and drive efficiency, enabling law firms to stay ahead in the competitive landscape and deliver exceptional client experiences.
            </p>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
            The emerging importance of AI in the legal industry cannot be overstated. Harnessing AI technology enables law firms to optimize processes, enhance efficiency, and improve decision-making. By automating repetitive tasks, streamlining research, and offering predictive analytics, AI solutions are transforming the practice of law, driving innovation, and empowering legal professionals to deliver superior results while focusing on high-value tasks and client relationships.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative">
            <GatsbyImage
              image={getImage(data.aboutimage)}
              alt="Interior Design"
            />
            
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
