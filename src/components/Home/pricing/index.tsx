import BlueText from "@/components/Texts/BlueText";
import Image from "next/image";
import Link from "next/link";

const landingpagePointers = [
  "3-5 day turnaround",
  "Native Development",
  "Task delivered one-by-one",
  "Dedicated dashboard",
  "Updates via Dashboard & Slack",
];

const fullWebsitePointers = [
  "Everything in design & development",
  "Priority support",
  "Multiple tasks at once",
  "Advanced custom development",
  "Updates via Dashboard & Slack",
  "Strategy workshop",
];

export default function Pricing() {
  return (
    <section className="mt-[100px]" id="pricing">
      <div className="text-center">
        <BlueText
          title={
            <>
              {`Here's an Idea of Our Pricing`} <br />{" "}
              {`But Honestly, Let's Talk!`}
            </>
          }
          className="font-circularBold md:text-5xl sm:text-4xl xs:text-3xl text-2xl px-5"
        />
        <div className="font-circularBold md:text-2xl sm:text-xl xs:text-lg text-base px-5 mt-3">
          One simple price, no santa surprises.
        </div>
      </div>

      <div className="mt-20 flex sm:flex-row flex-col items-stretch justify-center md:gap-10 gap-5 sm:px-10 px-5">
        <div className="bg-[#E2F3FC] p-5 md:w-[450px] w-full max-md:basis-1/2 rounded-2xl flex flex-col justify-between items-stretch gap-5">
          <div className="bg-[#12729D] w-fit px-3 py-2 rounded-xl text-white font-circularBold md:text-2xl sm:text-xl xs:text-lg text-base">
            Landing Page
          </div>
          <div className="text-gray font-circularMedium md:text-xl sm:text-lg xs:text-base text-sm">
            {`Ideal for those who've already got their website up and running and
            are seeking assistance to enhance and update it further.`}
          </div>
          <div className="text-darkBlue font-circularBold md:text-5xl sm:text-4xl xs:text-3xl text-2xl mt-5">
            $999
            <span className="text-gray font-circularMedium md:text-xl sm:text-lg xs:text-base text-sm">
              /onwards
            </span>
          </div>
          <hr />
          <div className="flex flex-col gap-1">
            {landingpagePointers.map((landing) => (
              <div key={landing} className="text-gray flex items-center gap-2">
                <Image
                  src={"/image/pricing/gray-tick.png"}
                  alt={"gray-tick"}
                  width={10}
                  height={10}
                />{" "}
                <div className="font-circularMedium md:text-xl sm:text-lg xs:text-base text-sm">
                  {landing}
                </div>
              </div>
            ))}
          </div>
          <hr className="sm:mt-14 mt-5" />

          <Link
            href={"https://calendly.com/adityagypxtend/30min"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border border-black text-[#134B67] font-circularBold rounded-lg py-3 cursor-pointer md:text-xl sm:text-lg xs:text-base text-sm"
          >
            Book a Call
          </Link>
        </div>

        <div className="bg-fullWebsiteCardBg p-5 md:w-[450px] w-full max-md:basis-1/2 rounded-2xl flex flex-col justify-between items-stretch gap-5">
          <div className="bg-white w-fit px-3 py-2 rounded-xl text-[#134B67] font-circularBold md:text-2xl sm:text-xl xs:text-lg text-base">
            Full Website
          </div>
          <div className="text-gray font-circularMedium md:text-xl sm:text-lg xs:text-base text-sm">
            Let us understand what you need so we can help you!
          </div>
          <div className="text-darkBlue font-circularBold md:text-5xl sm:text-4xl xs:text-3xl text-2xl sm:mt-20 xs:mt-10 mt-5">
            {`Let's Talk!`}
          </div>
          <hr />
          <div className="flex flex-col gap-1">
            {fullWebsitePointers.map((website) => (
              <div key={website} className="text-gray flex items-center gap-2">
                <Image
                  src={"/image/pricing/gray-tick.png"}
                  alt={"gray-tick"}
                  width={10}
                  height={10}
                />{" "}
                <div className="font-circularMedium md:text-xl sm:text-lg xs:text-base text-sm">
                  {website}
                </div>
              </div>
            ))}
          </div>
          <hr className="md:mt-10 mt-5" />

          <Link
            href={"https://calendly.com/adityagypxtend/30min"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-[#1CA4D8] text-white font-circularBold rounded-lg py-3 cursor-pointer md:text-xl sm:text-lg xs:text-base text-sm"
          >
            Audit My Website
          </Link>
        </div>
      </div>
    </section>
  );
}
