import BlueText from "@/components/Texts/BlueText";

const needsArray = [
  "Logos & branding",
  "Treatment decks",
  "Social media assets",
  "Icons",
  "Stock photography",
  "Guidelines",
  "Websites & Apps",
  "Billboards",
  "Digital ads",
  "Retouching",
  "Wireframes",
  "Mockups",
  "Signage",
  "Artworking",
  "Brochures",
  "Pitch decks",
  "Art direction",
  "Business cards",
  "Infographics",
  "Packaging",
];

export default function DesignNeeds() {
  return (
    <section className="mt-[100px] bg-lightBlue py-20" id="services">
      <div className="text-center flex flex-col sm:gap-5 gap-2">
        <BlueText
          title={"One Team For All Your Design Needs"}
          className="md:text-5xl sm:text-4xl text-3xl font-circularBold px-5"
        />
        <div className="font-circularMedium sm:w-[60%] w-[80%] mx-auto md:text-2xl sm:text-xl text-base">
          Running a successful business means more than just a website. Just
          like that running a successful agency means more than just website
          design, that's why we cover all your brand design needs, so you don't
          have to go anywhere else.
        </div>
      </div>

      <div className="grid md:grid-cols-5 sm:grid-cols-4 ss:grid-cols-3 grid-cols-2 items-center justify-center sm:mt-20 mt-10 sm:gap-20 gap-10 w-[80%] mx-auto">
        {needsArray.map((item) => (
          <div
            key={item}
            className="font-circularBold md:text-xl sm:text-lg text-base pb-3 sm:border-b-4 border-b-2 border-black"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
