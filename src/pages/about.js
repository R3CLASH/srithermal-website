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
        <meta
          name="description"
          content="That is where the Level 3 certification and 10+ years experience in the field of our company comes in. We are the only firm with Chartered Electrical Engineers dedicated to carrying out thermography surveys on-site together with you and who has Level 2 Certification. "
        />
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
