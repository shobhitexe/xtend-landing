"use client";

import Image from "next/image";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [selected, setSelected] = useState<number>(0);

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
    <div className="bg-navBg text-white w-[80%] mx-auto mt-10 rounded-full fixed left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center justify-between p-3">
        {navBarLinks.map((nav, idx) => {
          if (idx === 3) {
            return (
              <Image
                key={nav.title}
                src={"/image/navbar/navbar.png"}
                alt={"logo"}
                width={200}
                height={200}
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
              className={`text-lg cursor-pointer py-5 px-10 font-circularBold ${
                idx === selected && "bg-white text-black rounded-full"
              }`}
            >
              {nav.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
