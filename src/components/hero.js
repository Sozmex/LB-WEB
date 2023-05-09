import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Particles from "react-tsparticles";

import CtaButton from "../images/cta-button.svg";

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

  const [particleEffect, setParticleEffect] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setParticleEffect(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="w-full h-96 overflow-hidden relative">
        <GatsbyImage
          image={getImage(data.heroimage)}
          alt="Interior Design"
          className="w-full h-96 object-cover object-center ring-5 ring-black"
          style={{ filter: "brightness(30%) blur(3px)" }}
        />
        {particleEffect && (
          <Particles
            className="absolute top-0 left-0 w-full h-full"
            options={{
              particles: {
                number: {
                  value: 100,
                },
                size: {
                  value: 3,
                },
                links: {
                  enable: false,
                },
                move: {
                  speed: 2,
                },
              },
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onHover: {
                    enable: false,
                  },
                },
              },
            }}
          />
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-6 py-20">
        <div className="container mx-auto">
          <div className="flex flex-col xl:px-32 items-center text-center gap-6">
            <h1 className="font-display md:text-display-2xl text-display-lg text-white">
              Lawbotics: <span className="italic"> AI Firmware</span>
            </h1>
            <p className="col-span-8 md:text-body-xl text-body-lg font-light text-white max-w-[800px]">
              Optimize Firm Workflow with the Latest in AI Innovation{" "}
            </p>
          </div>
        </div>
        {/*
        <a href="/">
          <img
            src={CtaButton}
            alt="Get in touch"
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </a>
        */}
      </div>
    </div>
  );
};

export default Hero;
