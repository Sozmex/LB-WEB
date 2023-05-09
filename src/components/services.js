import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div id="#services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-25 md:py-17 py-9">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="OUR SERVICES" />
              <h2 className="font-display md:text-display-l text-display-md pt-5">
                We offer a diverse range of services tailored to the specific needs of the legal industry.
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={ArchitectureIcon}
              title="Consulting"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={RenovationIcon}
              title="Integration"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="Research"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
