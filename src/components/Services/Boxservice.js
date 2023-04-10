import React from "react";
import { SiSpeedtest } from "react-icons/si";
import { IoIosConstruct } from "react-icons/io";
import { BsSoundwave } from "react-icons/bs";
import { MdOutlineElectricBolt } from "react-icons/md";
function Boxservice() {
  return (
    <>
      <div className="flex flex-col max-w-[1400px] m-auto lg:flex-row lg:mt-[-97px]">
        <div className="service-box flex flex-col justify-center items-center max-w-[350px] min-h-[350px] m-auto border-none border-[1px] py-[30px] px-[40px] mt-7 mb-7 gap-5">
          <BsSoundwave
            size={75}
            style={{
              backgroundColor: "#FA5F55",
              padding: "20px",
              borderRadius: "10px",
            }}
          />
          <h3 className="text-center font-semibold text-2xl">
            Infrared Thermography Inspection
          </h3>
          <p>
            Our team of certified thermographers will gurantee you to conduct a
            comprehensive inspection of your equipment and systems to identify
            potential issues before they cause costly downtime.
          </p>
        </div>

        {/* -------------------------------------------------------------------------------- */}

        <div className="service-box flex flex-col justify-center items-center max-w-[350px] min-h-[350px] m-auto border-none border-[1px] py-[30px] px-[40px] mt-7 mb-7 gap-5">
          <MdOutlineElectricBolt
            size={75}
            style={{
              backgroundColor: "#FA5F55",
              padding: "20px",
              borderRadius: "10px",
            }}
          />
          <h3 className="text-center font-semibold text-2xl">
            Electrical Thermography Inspection
          </h3>
          <p>
            This is one of the most common sources of problems in industrial and
            commercial settings. Our inspections identify hot spots in your
            electrical system, allowing you to address potential safety hazards
            and avoid.
          </p>
        </div>

        {/* ------------------------------------------------------------------------------------------------------- */}
        <div className="service-box flex flex-col justify-center items-center max-w-[350px] min-h-[350px] m-auto border-none border-[1px] py-[30px] px-[40px] mt-7 mb-7 gap-5">
          <IoIosConstruct
            size={75}
            style={{
              backgroundColor: "#FA5F55",
              padding: "20px",
              borderRadius: "10px",
            }}
          />
          <h3 className="text-center font-semibold text-2xl">
            Construction Thermography Inspection
          </h3>
          <p>
            Our Construction inspections help identify areas of energy loss and
            air leakage in your facility. We can help you reduce energy costs
            and improve the overall efficiency of your building.
          </p>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------- */}
      <div className="flex flex-col max-w-[1400px] m-auto lg:flex-row">
        <div className="service-box flex flex-col justify-center items-center max-w-[350px] min-h-[350px] m-auto border-none border-[1px] py-[30px] px-[40px] mt-7 mb-7 gap-5">
          <BsSoundwave
            size={75}
            style={{
              backgroundColor: "#FA5F55",
              padding: "20px",
              borderRadius: "10px",
            }}
          />
          <h3 className="text-center font-semibold text-2xl">
            Maintenance and Reliability Consultancy
          </h3>
          <p>
            Our team of certified thermographers will gurantee you to conduct a
            comprehensive inspection of your equipment and systems to identify
            potential issues before they cause costly downtime.
          </p>
        </div>

        {/* -------------------------------------------------------------------------------- */}

        <div className="service-box flex flex-col justify-center items-center max-w-[350px] min-h-[350px] m-auto border-none border-[1px] py-[30px] px-[40px] mt-7 mb-7 gap-5">
          <SiSpeedtest
            size={75}
            style={{
              backgroundColor: "#FA5F55",
              padding: "20px",
              borderRadius: "10px",
            }}
          />
          <h3 className="text-center font-semibold text-2xl">
            Training and Support
          </h3>
          <p>
            At our thermography engineering company, We pride ourselves on
            delivering high-quality services that help our clients improve their
            operations and save money. Contact us today to learn more about how
            we can help you.
          </p>
        </div>

        {/* ------------------------------------------------------------------------------------------------------- */}
        <div className="service-box flex flex-col justify-center items-center max-w-[350px] min-h-[350px] m-auto border-none border-[1px] py-[30px] px-[40px] mt-7 mb-7 gap-5">
          <IoIosConstruct
            size={75}
            style={{
              backgroundColor: "#FA5F55",
              padding: "20px",
              borderRadius: "10px",
            }}
          />
          <h3 className="text-center font-semibold text-2xl">
            Research and Development
          </h3>
          <p>
            Whether you need to monitor high-temperature processes or detect
            subtle temperature changes, we have the expertise to help you
            achieve your goals. Contact us now for more details.
          </p>
        </div>
      </div>
    </>
  );
}

export default Boxservice;
