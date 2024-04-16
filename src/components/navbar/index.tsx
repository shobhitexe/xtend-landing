"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [selected, setSelected] = useState<number>(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isDOMLoaded, setIsDOMLoaded] = useState(false);

  useEffect(() => {
    setIsDOMLoaded(true);
  }, []);

  const navBarLinks = [
    { title: "Home", href: "", to: "home" },
    { title: "Projects", href: "", to: "projects" },
    { title: "About Us", href: "", to: "" },
    { title: "", href: "", to: "" },
    { title: "Services", href: "", to: "services" },
    { title: "Pricing", href: "", to: "pricing" },
    { title: "FAQs", href: "", to: "faqs" },
  ];

  return (
    <>
      {isDOMLoaded && (
        <div className="bg-navBg text-white lg:w-[80%] w-[90%] mx-auto sm:mt-10 mt-5 rounded-full fixed left-1/2 -translate-x-1/2 z-50">
          <nav className="sm:flex hidden items-center justify-between md:p-3 sm:p-2 p-1 max-sm:px-3 max-sm:pb-3">
            {navBarLinks.map((nav, idx) => {
              if (idx === 3) {
                return (
                  <Image
                    key={nav.title}
                    src={"/image/navbar/navbar.png"}
                    alt={"logo"}
                    width={200}
                    height={200}
                    className="md:w-[200px] w-[150px]"
                  />
                );
              }

              return (
                <Link
                  to={nav.to}
                  spy={true}
                  smooth={true}
                  key={nav.title}
                  onClick={() => setSelected(idx)}
                  className={`md:text-lg text-base cursor-pointer md:py-5 py-4 md:px-10 px-3 font-circularBold sm:flex hidden ${
                    idx === selected && "bg-white text-black rounded-full"
                  }`}
                >
                  {nav.title}
                </Link>
              );
            })}
          </nav>

          <nav className="sm:hidden flex items-center justify-between md:p-3 sm:p-2 p-1 max-sm:px-3 max-sm:pb-3">
            <Image
              src={"/image/navbar/navbar.png"}
              alt={"logo"}
              width={150}
              height={150}
            />

            {!isNavOpen ? (
              <Image
                src={"/image/navbar/ham.svg"}
                alt={"logo"}
                width={30}
                height={30}
                className="mr-4 mt-2 cursor-pointer"
                onClick={() => setIsNavOpen(true)}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 mr-4 mt-2 cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </nav>
        </div>
      )}

      {isNavOpen && (
        <div className="fixed w-full h-screen bg-navBg left-0 z-40">
          <div className="flex flex-col justify-center items-center mt-36 gap-2">
            {navBarLinks.map((nav, idx) => {
              if (idx === 3) {
                return;
              }

              return (
                <Link
                  to={nav.to}
                  key={nav.title}
                  className="text-white text-4xl font-circularBold cursor-pointer"
                  onClick={() => setIsNavOpen(false)}
                >
                  {nav.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
