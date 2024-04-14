import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="mt-[100px]">
      <div className="flex flex-col text-center">
        <div className="flex items-center justify-arounds w-[75%] mx-auto justify-between">
          <Image
            src={"/image/testimonial/inverted.png"}
            alt={"inverted"}
            width={50}
            height={50}
            className="md:w-[50px] sm:w-[40px] w-[30px]"
          />
          <Image
            src={"/image/testimonial/big-inverted.png"}
            alt={"inverted-big"}
            width={200}
            height={200}
            className="md:w-[200px] sm:w-[150px] w-[100px]"
          />
        </div>
        <div className="items-center md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-circularBold w-[80%] mx-auto leading-snug text-[#1B2632]">
          “You guys are the best. You've already done 10x times better than the
          last team. That's great work.”
        </div>
      </div>

      <div className="h-[2px] bg-[#D9D9D9] w-[80%] mx-auto sm:mt-10 mt-5" />

      <div className="flex items-center justify-between w-[80%] mx-auto sm:mt-10 mt-5">
        <div className="flex items-center gap-3">
          <Image
            src={"/image/testimonial/euan.png"}
            alt={"euan"}
            width={70}
            height={70}
            className="md:w-[70px] sm:w-[60px] w-[50px]"
          />
          <div>
            <div className="font-circularBold md:text-2xl sm:text-xl xs:text-lg text-base">
              Euan Begg
            </div>
            <div className="text-[#7E7C73] md:text-lg sm:text-base xs:text-sm text-xs">
              CEO of FundYourTrading
            </div>
          </div>
        </div>
        <div className="flex items-center sm:gap-5 gap-2">
          <Image
            src={"/image/testimonial/left.svg"}
            alt={"left"}
            width={40}
            height={40}
            className="cursor-pointer sm:w-[40px] w-[30px]"
          />

          <Image
            src={"/image/testimonial/right.svg"}
            alt={"left"}
            width={40}
            height={40}
            className="cursor-pointer sm:w-[40px] w-[30px]"
          />
        </div>
      </div>
    </section>
  );
}
