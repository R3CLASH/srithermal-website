import React from "react";
import Head from "next/head";
import ContactDetails from "@/components/Contact/ContactDetails";
import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";

function contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="You can contact us through all the methods mentioned above and also you can fill up the form below and we will get back to you as soon as possible."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://srithermal.com/wp-content/uploads/2021/12/cropped-SRI-THERMAL-2.png"
        />
      </Head>
      <ContactHero />
      <ContactDetails />
      <ContactForm />
    </>
  );
}

export default contact;
