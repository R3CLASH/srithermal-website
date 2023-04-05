import React from "react";

function ContactHero() {
  return (
    <div>
      <div className="contact-us-hero lg:h-[600px] h-[600px] bg-cover bg-center">
        <div className="pt-[200px]">
          <h1 className="text-center text-white font-semibold text-5xl">
            Contact Us
          </h1>
          <p className="text-center text-white pt-20 px-10  lg:max-w-[1000px] lg:m-auto">
            You can contact us through all the methods mentioned above and also
            you can fill up the form below and we will get back to you as soon
            as possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
