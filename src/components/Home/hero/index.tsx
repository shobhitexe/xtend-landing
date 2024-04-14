import BlueButton from "@/components/Buttons/BlueButton";

export default function Hero() {
  return (
    <section
      className="text-center sm:mt-28 mt-10 bg-heroBg bg-center bg-no-repeat bg-cover relative"
      id="home"
    >
      <div className="bg-[#BFE7F8] w-1/2 h-[130%] rounded-[50%] absolute -top-[100%] -left-[20%] opacity-60 blur-3xl z-0"></div>
      <div className="bg-[#BFE7F8] w-1/2 h-[200%] rounded-[50%] absolute -top-[100%] -right-[20%] opacity-60 blur-3xl z-0"></div>

      <div className="font-circularBold z-10 relative">
        <h1 className="text-navBg md:text-7xl sm:text-6xl xs:text-5xl text-4xl px-1">
          7.32x your Revenue
        </h1>
        <h2 className="bg-heroHeadText bg-clip-text text-transparent md:text-7xl sm:text-6xl xs:text-5xl text-2xl px-5">
          with Converting Websites!
        </h2>
        <p className="md:text-2xl sm:text-xl xs:text-lg text-base sm:mt-5 mt-2 md:w-[30%] xs:w-[50%] w-[60%] mx-auto z-10">
          Helping Businesses Sky Rocket their Website Conversion Rate 7.32x in
          just 28 Days!
        </p>
      </div>
      <div className="sm:mt-10 mt-5"></div>
      <BlueButton
        title="Audit My Website"
        className="sm:px-10 px-5 sm:py-4 py-2 md:text-xl sm:text-lg text-base"
        rounded="rounded-xl"
      />
    </section>
  );
}
