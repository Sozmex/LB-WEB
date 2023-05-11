import React from "react";

import Billy from "../images/billy.jpg";
import Milan from "../images/milan.jpg";
import Zach from "../images/zach2.jpg";
import Eyebrow from "./eyebrow";
import ServiceItem1 from "./serviceItem1";

const Services1 = () => {
  return (
    <div id="#services1">
      <div className="container mx-auto pb-1">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-26 md:py-17 py-9 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 ">
            <div className="lg:col-span-8">
              <Eyebrow label="PEOPLE" />
              <h2 className="font-display md:text-display-l text-display-md pt-5">
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-20 items-center justify-center">
            <ServiceItem1 
              icon={Billy}
              title="Bill White"
              description="Solutions"
              bio={{
                name: "Bill White",
                paragraphs: [
                  "Bill White is a visionary leader...",
                  "As the CEO of Lawbotics...",
                  "In his spare time..."
                ]
              }}
            />
            <ServiceItem1
              icon={Milan}
              title="Milan Cheema"
              description="Partnerships"
              bio={{
                name: "Milan Cheema",
                paragraphs: [
                  "Milan Cheema is a strategic thinker...",
                  "As the Head of Partnerships...",
                  "Outside of work..."
                ]
              }}
            />
            <ServiceItem1
              icon={Zach}
              title="Zach Osgarby"
              description="Technology"
              bio={{
                name: "Zach Osgarby",
                paragraphs: [
                  "Zach Osgarby is a technology enthusiast...",
                  "As the CTO...",
                  "In his free time..."
                ]
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services1;
