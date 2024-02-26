import { cn } from "@/lib/utils";

interface DefaultContainerProps {
  className?: string;
  children: React.ReactNode;
}

const DefaultContainer = ({ className, children }: DefaultContainerProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4", className)}>
      {children}
    </div>
  );
};

export default DefaultContainer;
