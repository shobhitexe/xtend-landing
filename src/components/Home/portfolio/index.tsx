import BlueButton from "@/components/Buttons/BlueButton";
import BlueText from "@/components/Texts/BlueText";
import Image from "next/image";
import Link from "next/link";

const portfolioArray = [
  {
    category: "Forex Prop Firm",
    title: "FundYourTrading",
    sub: "Fund your Forex Journey.",
    image: "/image/portfolio/fyt-main.avif",
    logo: "/image/portfolio/fyt-logo.png",
  },
  {
    category: "Forex broker",
    title: "Mazi Finance",
    sub: "The Most Forex Broker of 2023.",
    image: "/image/portfolio/mazifinance-main.avif",
    logo: "/image/portfolio/mazifinance-logo.png",
  },
  {
    category: "Crypto DEX",
    title: "Onooks",
    sub: "The Dex that Rules all the Chains.",
    image: "/image/portfolio/onooks-main.avif",
    logo: "/image/portfolio/onooks-logo.png",
  },
  {
    category: "landing Page",
    title: "Zebpay",
    sub: "Superfast crypto trading platform.",
    image: "/image/portfolio/zebpay-main.avif",
    logo: "/image/portfolio/pf2.png",
  },
  {
    category: "Full Stack Trading Platform",
    title: "Tradebox",
    sub: "Trade & Invest with the Experts.",
    image: "/image/portfolio/tradebox-main.avif",
    logo: "/image/portfolio/tradebox-logo.png",
  },
  {
    category: "Crypto Exchange",
    title: "Stasis",
    sub: "Decentralized Off-Chain Market.",
    image: "/image/portfolio/pf1.png",
    logo: "/image/portfolio/stasis-logo.png",
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
              className="rounded-2xl"
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
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://www.figma.com/proto/FLa0M3N0KW9IDjJCDzXQvk/Latest-Projects?page-id=0%3A1&type=design&node-id=1-14&viewport=292%2C342%2C0.07&t=nOe4sx9kxxeihUU3-1&scaling=min-zoom&starting-point-node-id=1%3A14&mode=design"
        }
      >
        <BlueButton
          title={"View Portfolio"}
          className="px-10 py-3 sm:text-xl xs:text-lg text-base"
          rounded="rounded-full"
        />
      </Link>
    </section>
  );
}
