import React from "react";
import Link from "next/link";
function Clients() {
  return (
    <>
      <div className="clients-sec block lg:flex lg:justify-center px-10 py-10 text-center lg:text-left items-top lg:max-w-[1300px] lg:m-auto">
        <div className="pt-5">
          <h4 className="text-5xl  text-red-500 font-semibold text-center lg:text-left py-5 pb-5 lg:pb-10">
            Our Clients
          </h4>
          <p className="text-lg text-center lg:text-left lg:pb-5">
            We have served our clients since 2010 and always able to fulfil
            their satisfaction from start to end. Experienced in Thermal
            Engineering for more than 10 Years. Worked Islandwide and Overseas
            with many Clients and Companies.
          </p>
          <Link href="/contact" className="">
            <button className="mb-10 mt-5 px-8 py-3 bg-red-500 rounded-md text-white text-xl text-center">
              Contact Us
            </button>
          </Link>
        </div>
        <div>
          <img src="\assets\clients.png" />
        </div>
      </div>
    </>
  );
}

export default Clients;
