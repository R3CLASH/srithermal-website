import React from "react";

function Choose() {
  return (
    <>
      <div className="py-8">
        <h2 className="text-center text-red-500 text-4xl font-semibold">
          Why Choose Us?
        </h2>
        <div className="lg:px-200 lg:flex lg:flex-col lg:justify-center lg:max-w-[1400px] lg:m-auto">
          <div className="pt-5 flex flex-1 justify-center flex-col lg:flex-row md:flex-row gap-8">
            <div className="flex flex-1 justify-center flex-col text-center items-center">
              <img
                className="w-20"
                src="https://srithermal.com/wp-content/uploads/2021/12/customer-service-1.png"
              />
              <h4 className="font-bold text-xl py-4">
                PROFESSIONAL TEAM SUPPORT
              </h4>
              <p className="px-20">
                We are proud to provide our clients with support to solve your
                problems and to ensure the continuous networking of your
                business.
              </p>
            </div>
            <div className="flex  flex-1 justify-center flex-col text-center items-center">
              <img
                className="w-20"
                src="https://srithermal.com/wp-content/uploads/2021/12/company.png"
              />
              <h4 className="font-bold text-xl py-4">OUR COMPANY BACKGROUND</h4>
              <p className="px-20">
                We are a quality & established providing best services in
                Thermography Industry for more than 10 years with Qualified and
                Certified Thermography Engineers.
              </p>
            </div>
          </div>
          <div className="pt-5 flex flex-1 justify-center flex-col lg:flex-row md:flex-row gap-8">
            <div className="flex flex-1 justify-center flex-col text-center items-center">
              <img
                className="w-20"
                src="https://srithermal.com/wp-content/uploads/2021/12/rating.png"
              />
              <h4 className="font-bold text-xl py-4">
                CUSTOMERS SATISFICATION
              </h4>
              <p className="px-20">
                We are highly confident in our promise to serve you better. Our
                focus is to build long term relationships with our customers!
              </p>
            </div>
            <div className="flex flex-1 justify-center flex-col text-center items-center">
              <img
                className="w-20"
                src="https://srithermal.com/wp-content/uploads/2021/12/cooperate.png"
              />
              <h4 className="font-bold text-xl py-4">
                COMMITMENT TO STABILITY
              </h4>
              <p className="px-20">
                We will strive and are committed to provide a the maximum level
                of stability to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;
