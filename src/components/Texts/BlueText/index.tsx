export default function BlueText({
  title,
  className,
}: {
  title: string | React.ReactNode;
  className?: string;
}) {
  return <div className={`text-blue ${className}`}>{title}</div>;
}
