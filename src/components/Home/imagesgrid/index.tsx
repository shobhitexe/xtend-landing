import Image from "next/image";

export default function ImagesGrid() {
  return (
    <section className="sm:mt-[150px] mt-[100px] flex justify-center relative pb-[999px]">
      <div className="absolute w-full h-[40%] bg-white bottom-[30%] z-20"></div>
      <Image
        src={"/image/grid/img2.avif"}
        alt={"img2"}
        width={720}
        height={720}
        className="absolute z-10"
      />
      <Image
        src={"/image/grid/img1.avif"}
        alt={"img1"}
        width={720}
        height={720}
        className="absolute right-[50%] top-20 z-0"
      />
      <Image
        src={"/image/grid/img3.avif"}
        alt={"img3"}
        width={720}
        height={720}
        className="absolute left-[50%] top-20 z-0"
      />
    </section>
  );
}
