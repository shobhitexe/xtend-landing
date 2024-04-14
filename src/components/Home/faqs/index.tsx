import BlueText from "@/components/Texts/BlueText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqArr = [
  {
    que: "Why wouldn't I just hire a website designer and developer separately?",
    ans: "Good question! For starters, an intermediate-level UI/UX designer charges north of 1,000$ and a good front-end developer charges around $1,000 more (and good luck finding one available). Aside from that, they charge extra for revisions.",
  },
  {
    que: "How fast will I receive my website?",
    ans: "On average, most websites are completed in just a week or two. However, more complex websites can take longer.",
  },
  {
    que: "Who are the designers and developers?",
    ans: "You might be surprised to hear this, but Xtend is actually a team of 12. This means your work is prioritised and finished in record time! However, additions such as animations or custom illustrations take a tad bit longer.",
  },
  {
    que: "What programs do you design in?",
    ans: "Most requests are designed using Figma.",
  },
  {
    que: "How do I track the progress?",
    ans: "We will be constantly connected over WhatsApp with a 24/7 client representative at your service. You will also be provided a live link to Figma for any changes to be added as a comment on the live design directly.",
  },
  {
    que: "What if I don't like the website?",
    ans: "No worries! We'll continue to revise the design without any extra charges until you're 100% satisfied.",
  },
];

export default function FAQs() {
  return (
    <section className="mt-[100px]" id="faqs">
      <BlueText
        title={"FAQs"}
        className="text-center font-circularBold md:text-5xl text-4xl"
      />

      <Accordion
        type="single"
        collapsible
        className="font-circularMedium md:text-2xl sm:text-xl xs:text-lg text-base sm:w-[60%] w-[80%] text-left mx-auto sm:mt-10 mt-5"
      >
        {faqArr.map((faq, idx) => (
          <AccordionItem value={`item-${idx}`} key={faq.que}>
            <AccordionTrigger className="text-left">{faq.que}</AccordionTrigger>
            <AccordionContent className="md:text-lg xs:text-base text-sm font-circularBook">
              {faq.ans}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
