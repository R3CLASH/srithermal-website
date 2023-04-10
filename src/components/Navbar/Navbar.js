import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [navBgColor, setNavBgColor] = useState("transparent");
  const [navTextColor, setNavTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setNavBgColor("#ffffff");
        setNavTextColor("#000000");
      } else {
        setNavBgColor("transparent");
        setNavTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBgColor}` }}
      className="fixed left-0 top-0 w-full ease-in duration-300"
    >
      <div className="max-w-[1600px] m-auto flex justify-between items-center text-white p-4">
        <Link href="/">
          <div
            style={{ color: `${navTextColor}` }}
            className="text-4xl font-bold p-2"
          >
            <img className="w-60" src="assets/logo.png" />
          </div>
        </Link>
        <ul className="sm:flex gap-8 hidden">
          <li style={{ color: `${navTextColor}` }} className="p-3 text-lg">
            <Link href="/">Home</Link>
          </li>
          <li style={{ color: `${navTextColor}` }} className="p-3 text-lg">
            <Link href="/services">Services</Link>
          </li>
          <li style={{ color: `${navTextColor}` }} className="p-3 text-lg">
            <Link href="/about">About</Link>
          </li>
          <li style={{ color: `${navTextColor}` }} className="p-3 text-lg">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* {Mobile button} */}
        <div
          style={{ color: `${navTextColor}` }}
          className="block sm:hidden z-10 pr-10"
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* {Mobile Menu} */}
        <div
          className={
            nav
              ? "scroll-none sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="text-3xl p-4 hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="text-3xl p-4 hover:text-gray-500"
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="text-3xl p-4 hover:text-gray-500"
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="text-3xl p-4 hover:text-gray-500"
            >
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
