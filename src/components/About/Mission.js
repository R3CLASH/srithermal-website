import React from "react";

function Mission() {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-center lg:pt-10 lg:max-w-[1400px] lg:m-auto lg:gap-10">
        <div className="flex lg:flex-1 justify-center flex-col px-10">
          <div className="lg:flex-1">
            <h3 className="text-center text-4xl font-semibold py-10 text-red-500 lg:text-left">
              Who We Are?
            </h3>
            <p className="text-center lg:text-left">
              Only Level 3 Certified Thermography Company in Sri Lanka with more
              than 10 Years experience in Thermography Engineering Industry.
            </p>
          </div>
          <div className="lg:flex-1">
            <h3 className="text-center text-4xl font-semibold py-10 text-red-500 lg:text-left">
              Our Mission
            </h3>
            <p className="text-center lg:text-left">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-start justify-center m-auto pt-5">
          <img src="\assets\contact-end.jpg" />
        </div>
      </div>
    </>
  );
}

export default Mission;
