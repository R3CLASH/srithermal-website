import React from "react";
import Boxservice from "./Boxservice";
import Choose from "../Home/ChooseUs/Choose";
import Clients from "../Home/Clients";
import Testomo from "../Home/Testo/Testomo";
import Head from "next/head";
function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Only Level 3 Certified Thermography Engineering Company in Sri Lanka with more than 10 Years experience in Thermography Engineering Industry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="\assets\favicon.png" />
      </Head>
      <Boxservice />
      <Choose />
      <Clients />
      <Testomo />
    </>
  );
}

export default Services;
