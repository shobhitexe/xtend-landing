const StatsArr = [
  { title: "4", sub: "Years of Experience" },
  { title: "157+", sub: "Completed Projects" },
  { title: "532%", sub: "Client ROI" },
  { title: "53+", sub: "Clients Served" },
];

export default function Stats() {
  return (
    <section className="mt-[100px] flex items-center justify-around flex-wrap gap-10 bg-[#BFE7F8] py-20 px-10">
      {StatsArr.map((stat) => (
        <div key={stat.title} className="flex flex-col items-center">
          <div className="md:text-7xl sm:text-6xl text-5xl font-circularBold text-[#105A7C]">
            {stat.title}
          </div>
          <div className="md:text-xl sm:text-lg text-base">{stat.sub}</div>
        </div>
      ))}
    </section>
  );
}
