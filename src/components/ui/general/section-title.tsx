import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  description: string;
  className?: string;
};

const SectionTitle = ({ title, description, className }: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "mb-20 flex w-full max-w-7xl flex-col items-center justify-center",
        className,
      )}
    >
      <h2 className="mb-6 text-6xl font-extrabold">{title}</h2>
      <p className="text-md text-zinc-400">{description}</p>
    </div>
  );
};

export default SectionTitle;
