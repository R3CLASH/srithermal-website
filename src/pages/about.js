import React from "react";
import Head from "next/head";
import AboutHero from "@/components/About/Hero";
import Mission from "@/components/About/Mission";
import Experience from "@/components/About/Experience";
import Core from "@/components/About/Core";
function about() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://srithermal.com/wp-content/uploads/2021/12/cropped-SRI-THERMAL-2.png"
        />
      </Head>
      <main>
        <AboutHero />
        <Mission />
        <Experience />
        <Core />
      </main>
    </>
  );
}

export default about;
