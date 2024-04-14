export default function BlueButton({
  title,
  className,
  rounded,
}: {
  title: string | React.ReactNode;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`p-[2.5px] bg-gradient-to-t from-[#118DC0] to-[#5DCAF4] w-fit mx-auto ${rounded}`}
    >
      <div
        className={`text-white bg-blueButtonBG w-fit mx-auto font-circularMedium cursor-pointer ${className} ${rounded}`}
      >
        {title}
      </div>
    </div>
  );
}
