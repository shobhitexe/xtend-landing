import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "instagram", img: "/image/footer/instagram.png", link: "" },
  { name: "twitter", img: "/image/footer/twitter.png", link: "" },
  {
    name: "linkedin",
    img: "/image/footer/linkedin.png",
    link: "https://www.linkedin.com/company/xtend-agency-co/mycompany/",
  },
  {
    name: "behance",
    img: "/image/footer/behance.png",
    link: "https://www.behance.net/xtend-agency",
  },
];

export default function Footer() {
  return (
    <footer className="sm:mt-[150px] mt-[70px] w-[90%] mx-auto sm:pb-10 xs:pb-5 pb-2">
      <Image
        src={"/image/footer/logo.png"}
        alt={"logo"}
        width={150}
        height={150}
        className="md:w-[150px] w-[100px]"
      />

      <div className="text-[#8E93A4] mt-3 sm:text-base text-sm">
        Xtending your business to unimaginable heights
      </div>

      <hr className="text-[#E0E4EB] mt-5" />

      <div className="flex sm:flex-row flex-col-reverse max-sm:gap-5 items-center justify-between mt-5">
        <div className="font-circularMedium">
          ©2024 Xtend. All right reserved.
        </div>

        <div className="flex items-center gap-2">
          {footerLinks.map((footer) => (
            <Link
              href={footer.link}
              key={footer.name}
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={footer.img}
                alt={footer.name}
                width={40}
                height={40}
                className="sm:w-[40px] w-[30px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
