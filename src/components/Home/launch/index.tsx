import BlueButton from "@/components/Buttons/BlueButton";

export default function Launch() {
  return (
    <section className="mt-[100px] text-center bg-launchBg bg-center md:w-[70%] w-[80%] mx-auto md:p-20 sm:p-10 p-5 max-sm:py-10 rounded-3xl flex flex-col sm:gap-8 xs:gap-5 gap-3">
      <div className=" text-[#4AC0F3] md:text-6xl sm:text-5xl xs:text-4xl text-3xl font-circularBold">
        Time to Launch Your Dream <br /> Landing Page
      </div>
      <div className="text-[#CBCAD7] md:text-2xl sm:text-xl xs:text-lg text-base">
        Your website made as per your needs to get crazy <br /> conversions for
        your business up to 7.32x in just 28 days!
      </div>

      <BlueButton
        title={"Audit My Website - It's Free"}
        className="sm:px-5 px-3 sm:py-3 py-2 md:text-base sm:text-sm text-xs"
        rounded="rounded-xl"
      />
    </section>
  );
}
