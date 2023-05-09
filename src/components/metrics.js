import React from "react";

const Metrics = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className="font-display md:text-display-xl text-display-lg font-normal">
                100M
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                ChatGPT <br></br>USERS
              </p>
            </div>
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className="font-display md:text-display-xl text-display-lg font-normal">
                1.591B
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                AI MARKET SIZE <br></br>BY 2030
              </p>
            </div>
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className="font-display md:text-display-xl text-display-lg font-normal">
                38.1%
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                CAGR 2022-2030 <br></br>AI INDUSTRY
              </p>
            </div>
          </div>
          <div className="md:mt-8 md:pb-4 mt-4 pb-5">
            
          </div>

        </div>
      </div>
    </div>
  );
};
export default Metrics;
