import React from "react";
import Link from "next/link";
// import "./Hero.css";
function Hero(props) {
  return (
    <div className="flex items-center justify-center h-screen hero-img bg-cover bg-center lg:block lg:p-60 lg:px-20 px-10">
      <div className="hero-content lg:pt-10 lg:w-1/2 lg:pr-20">
        <h1 className="text-4xl lg:text-5xl text-white text-left font-semibold">
          {props.heading}
        </h1>
        <p className="text-white text-lg pt-5">{props.paragraph}</p>
        <Link href="/contact" className="">
          <button className="border mt-5 px-8 py-2 text-white text-xl text-center">
            {props.btnText}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
