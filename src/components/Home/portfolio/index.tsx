import BlueButton from "@/components/Buttons/BlueButton";
import BlueText from "@/components/Texts/BlueText";
import Image from "next/image";

const portfolioArray = [
  {
    category: "Crypto Exchange",
    title: "FundYourTrading",
    sub: "Navigate the world of web technology",
    image: "/image/portfolio/pf1.png",
    logo: "/image/portfolio/pf2.png",
  },
  {
    category: "Crypto Wallet",
    title: "Stasis",
    sub: "Navigate the world of web technology",
    image: "/image/portfolio/pf1.png",
    logo: "/image/portfolio/pf2.png",
  },
  {
    category: "Crypto Exchange",
    title: "FundYourTrading",
    sub: "Navigate the world of web technology",
    image: "/image/portfolio/pf1.png",
    logo: "/image/portfolio/pf2.png",
  },
  {
    category: "Crypto Exchange",
    title: "FundYourTrading",
    sub: "Navigate the world of web technology",
    image: "/image/portfolio/pf1.png",
    logo: "/image/portfolio/pf2.png",
  },
  {
    category: "Crypto Wallet",
    title: "Stasis",
    sub: "Navigate the world of web technology",
    image: "/image/portfolio/pf1.png",
    logo: "/image/portfolio/pf2.png",
  },
  {
    category: "Crypto Exchange",
    title: "FundYourTrading",
    sub: "Navigate the world of web technology",
    image: "/image/portfolio/pf1.png",
    logo: "/image/portfolio/pf2.png",
  },
];

export default function Portfolio() {
  return (
    <section className="mt-[100px]" id="projects">
      <div className="text-center">
        <BlueText
          title={"Let our work speak for itself."}
          className="md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-circularBold"
        />
        <div className="md:text-2xl sm:text-xl xs:text-lg text-base font-circularMedium md:mt-5 sm:mt-2 mt-0 px-5">
          The limitless, lightning-fast web design Service agency.
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:mt-20 mt-10 md:gap-10 gap-5 sm:px-0 px-10">
        {portfolioArray.map((portfolio) => (
          <div
            key={portfolio.title}
            className="bg-gradient-to-b from-[#47C5F9] to-[#118DC0] p-5 rounded-2xl flex flex-col gap-3"
          >
            <Image
              src={portfolio.image}
              alt={portfolio.title}
              width={400}
              height={400}
              className=""
            />
            <div className="text-darkBlue bg-[#71D7FC] w-fit px-2 rounded-lg font-circularMedium md:text-base text-sm">
              {portfolio.category}
            </div>
            <div className="flex justify-between">
              <div className="text-white">
                <div className="md:text-2xl text-xl font-circularBold">
                  {portfolio.title}
                </div>
                <div className="md:text-base text-sm">{portfolio.sub}</div>
              </div>
              <Image
                src={portfolio.logo}
                alt={portfolio.title}
                width={50}
                height={50}
                className="sm:w-[50px ]w-[40px] sm:h-[50px] h-[40px]"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="sm:mt-20 mt-10"></div>
      <BlueButton
        title={"View Portfolio"}
        className="px-10 py-3 sm:text-xl xs:text-lg text-base"
        rounded="rounded-full"
      />
    </section>
  );
}
