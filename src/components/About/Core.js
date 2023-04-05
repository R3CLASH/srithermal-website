import React from "react";

function Core() {
  return (
    <>
      <div className="core-sec pb-10 px-10 lg:flex lg:max-w-[1400px] lg:justify-center lg:m-auto">
        <div className="core-desc py-5 flex-1">
          <h3 className="font-semibold text-3xl lg:text-4xl text-red-500 pb-5">
            Our Core Values
          </h3>
          <ul className="core-values pl-5 pb-10 flex flex-col gap-2 z-0">
            <li className="core-list-item flex gap-2">
              <span className="relative bottom-0.5">
                <img src="/assets/icons8-rating-30.png" />
              </span>
              Loyalty
            </li>
            <li className="core-list-item flex gap-2">
              <span className="relative bottom-0.5">
                <img src="/assets/icons8-rating-30.png" />
              </span>
              Trust
            </li>
            <li className="core-list-item flex gap-2">
              <span className="relative bottom-0.5">
                <img src="/assets/icons8-rating-30.png" />
              </span>
              Honestly
            </li>
            <li className="core-list-item flex gap-2">
              <span className="relative bottom-0.5">
                <img src="/assets/icons8-rating-30.png" />
              </span>
              Ingenuity
            </li>
            <li className="core-list-item flex gap-2">
              <span className="relative bottom-0.5">
                <img src="/assets/icons8-rating-30.png" />
              </span>
              Accountability
            </li>
          </ul>
          <p className="">
            We Provide you with more than you expect in every way you can
            imagine.
          </p>
        </div>
        <div className="core-img flex-1">
          <img src="\assets\core-ing.jpeg" />
        </div>
      </div>
    </>
  );
}

export default Core;
