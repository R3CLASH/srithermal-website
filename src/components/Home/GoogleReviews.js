import React from "react";

function GoogleReviews() {
  return (
    <>
      <div className="flex lg:flex-row flex-col max-w-[1400px] m-auto py-20">
        <div className="flex flex-1 flex-row">
          <div className="flex flex-col flex-1 justify-center items-center">
            <p className="text-8xl text-center font-bold">4.8</p>
            <img className="max-w-[180px]" src="\assets\stars.png" />
            <p className="text-2xl">Google Reviews</p>
          </div>

          <div className="flex-1 bg-white">
            <div className="flex flex-col flex-1 justify-center items-center">
              <p className="text-8xl text-center font-bold">A+</p>
              <img className="max-w-[180px]" src="\assets\stars.png" />
              <p className="text-2xl text-center">Certified Engineers</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-center items-left lg:px-20 px-10 pt-10">
          <h3 className="text-red-500 font-bold lg:text-4xl text-2xl mb-5">
            BEST THERMOGRAPHY ENGINEERS IN SRI LANKA
          </h3>
          <p className="text-xl">
            Experienced in Thermal Engineering for more than 10 Years. Worked
            Islandwide and Overseas with many Clients and Companies.
          </p>
        </div>
      </div>
    </>
  );
}

export default GoogleReviews;