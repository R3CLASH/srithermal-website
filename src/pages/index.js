import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Home/Hero/Hero";
import Slider from "@/components/Home/Slider/slider";
import Choose from "@/components/Home/ChooseUs/Choose";
import ContactForm from "@/components/Contact/ContactForm";
import Testomo from "@/components/Home/Testo/Testomo";
import GoogleReviews from "@/components/Home/GoogleReviews";
import Clients from "@/components/Home/Clients";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sri Thermal Engineering</title>
        <meta
          name="description"
          content="Only Level 3 Certified Thermography Engineering Company in Sri Lanka with more than 10 Years experience in Thermography Engineering Industry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="\assets\favicon.png" />
      </Head>
      <main>
        <Hero
          heading="THERMOGRAPHY ENGINEERING SRI LANKA"
          paragraph="Only Level 3 Certified Thermography Engineering Company in Sri Lanka with more than 10 Years experience in Thermography Engineering Industry."
          btnText="Contact Us"
        />
        {/* <Slider /> */}
        <GoogleReviews />
        <Choose />
        <Clients />
        <Testomo />
        <ContactForm />
      </main>
    </>
  );
}
