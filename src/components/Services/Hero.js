import React from "react";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[600px] hero-img bg-cover bg-center lg:block lg:p-60 lg:px-20 px-10">
        <h1 className="text-4xl lg:text-5xl text-white text-center font-semibold pb-10">
          Our Services
        </h1>
        <p className="text-white text-lg lg:w-1/2 text-center pt-5 lg:m-auto">
          Welcome to our services page! Our thermography engineering company
          offers a variety of services to help businesses and organizations
          improve their operations through thermal imaging technology. Below you
          will find a brief overview of our services.
        </p>
      </div>
    </>
  );
}

export default Hero;
