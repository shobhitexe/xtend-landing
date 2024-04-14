import BlueButton from "@/components/Buttons/BlueButton";
import BlueText from "@/components/Texts/BlueText";
import Image from "next/image";

const pointsArr = [
  "No Long Hiring Process",
  "No Contract Negotiations",
  "No Paid Revisions",
];

const stepsArr = [
  {
    title: "Book A Free Website Audit",
    sub: "We will evaluate your website and get all the necessary details for you on the call!",
  },
  {
    title: "Understanding Your Needs",
    sub: "We understand what you expect from your website and the purpose of it. Based on what you share with us, we generate a offering for you if necessary.",
  },
  {
    title: "Sit Back And Relax",
    sub: "Sit back and relax as we do the heavy lifting and brain storming for you, building a converting website as per your expectations.",
  },
  {
    title: "Final Website Delivery",
    sub: "We deliver you the website of dreams (needs) in superfast turnaround time, also if you need any changes, that's on us!",
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-[100px]">
      <div className="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-5">
        <div className="sm:w-[60%] w-[90%] mx-auto flex flex-col gap-3">
          <BlueText
            title={"How It Works?"}
            className="md:text-5xl text-4xl font-circularBold"
          />
          <div className="md:text-2xl text-xl font-circularMedium">
            {`You don't have to worry about the hassle of hiring designers,
            getting your to-do list sorted, having day long meetings and
            hundreds of paid revisions, we've got your backs, and your website
            too!`}
          </div>
        </div>
        <BlueButton
          title={
            <div className="flex items-center gap-1">
              <div>Book a Call</div>
              <Image
                src={"/image/howitworks/arrow.svg"}
                alt={"arrow"}
                width={20}
                height={20}
              />
            </div>
          }
          className="px-10 py-3"
          rounded="rounded-full"
        />
      </div>

      <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 items-start justify-between w-[85%] mx-auto sm:mt-20 mt-10">
        <div className="sm:w-[30%] flex flex-col gap-5">
          <div className="text-[#7E7C73] md:text-xl sm:text-lg text-base font-circularMedium">
            No unnecessary bureaucracy. We focus on getting your ideas and
            problems solved.
          </div>
          <div className="flex flex-col gap-2">
            {pointsArr.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <Image
                  src={"/image/howitworks/cross.svg"}
                  alt={point}
                  width={30}
                  height={30}
                  className="sm:w-[30px] w-[25px]"
                />
                <div className="font-circularBook md:text-2xl sm:text-xl text-lg">
                  {point}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:w-[60%]">
          {stepsArr.map((step, idx) => (
            <div
              key={step.title}
              className="flex sm:items-center items-start gap-5"
            >
              <div
                className={`text-blue font-circularBold sm:p-7 p-5 ${
                  idx === 0 ? "sm:px-[42px] px-[35px]" : "sm:px-10 px-8"
                } bg-lightBlue md:text-5xl sm:text-4xl text-3xl rounded-2xl`}
              >
                {idx + 1}
              </div>
              <div className="">
                <div className="font-circularBold md:text-2xl sm:text-xl text-lg">
                  {step.title}
                </div>
                <div className="text-[#7E7C73] md:text-lg sm:text-base text-sm">
                  {step.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
