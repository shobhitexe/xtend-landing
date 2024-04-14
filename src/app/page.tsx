import {
  DesignNeeds,
  FAQs,
  Hero,
  HowItWorks,
  ImagesGrid,
  Launch,
  Portfolio,
  Pricing,
  Stats,
  Testimonial,
} from "@/components";

export default function Home() {
  return (
    <main className="pt-40">
      <Hero />
      <Portfolio />
      <Stats />
      <HowItWorks />
      <DesignNeeds />
      <Testimonial />
      <Pricing />
      {/* <ImagesGrid /> */}
      <FAQs />
      <Launch />
    </main>
  );
}
