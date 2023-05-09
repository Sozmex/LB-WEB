import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";
import Milan from "../images/milan.jpg";
import Zach from "../images/zach2.jpg";
import Daffy from "../images/daffy.png";
import Billy from "../images/billy.jpg";
import johnny from "../images/johnny.avif";
import Eyebrow from "./eyebrow";
import ServiceItem1 from "./serviceItem1";

const Services1 = () => {
  return (
    <div id="#services1">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-26 md:py-18 py-10 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 ">
            <div className="lg:col-span-8">
              <Eyebrow label="PEOPLE" />
              <h2 className="font-display md:text-display-l text-display-md pt-5">
                
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-20 items-center justify-center"> {/* Add justify-center */}
            <ServiceItem1 
              icon={Billy}
              title="Bill White"
              description="Solutions"
                         />
            <ServiceItem1
              icon={Milan}
              title="Milan Cheema"
              description="Partnerships"
                         />
            <ServiceItem1
              icon={Zach}
              title="Zach Osgarby"
              description="Technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services1;
