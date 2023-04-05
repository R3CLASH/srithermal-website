import React from "react";
import img2 from "./../../../public/assets/exp-sec.jpg";

function Experience() {
  return (
    <>
      <div className="exp-sec flex justify-center lg:flex-row flex-col-reverse py-10 px-10 lg:gap-28 max-w-[1400px] lg:m-auto">
        <div className="flex flex-1 justify-center pt-5">
          <img src="\assets\exp-sec.jpg" />
        </div>
        <div className="flex flex-1 justify-center flex-col">
          <h2 className="exp-h2 font-semibold text-3xl lg:text-4xl text-red-500 pb-5">
            Extraodinary Experiences
          </h2>
          <p>
            That is where the Level 3 certification and 10+ years experience in
            the field of our company comes in. We are the only firm with
            Chartered Electrical Engineers dedicated to carrying out
            thermography surveys on-site together with you and who has Level 2
            Certification. We are also the ONLY firm in Sri Lanka to have Level
            3 Certification pending for thermography and soon to be acquired.
            Internally and externally, all the procedures, judgments, and
            documentation preparation will be carried out in accordance with the
            relevant standards by ASNT (American Society for Non-Destructive
            Testing), NFPA (National Fire Protection Agency), and ASTM (American
            Society for Testing and Materials).
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
