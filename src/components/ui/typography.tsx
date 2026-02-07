import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
}

const headingStyles = {
  // Mobile: 40px/40px, Desktop: 60px/60px, tracking -1px (desktop -2px)
  h1: "text-[40px] leading-[40px] md:text-[60px] md:leading-[60px] font-bold tracking-[-1px] md:tracking-[-2px] font-heading",
  // Mobile: 32px/32px, Desktop: 36px/36px, tracking -0.5px (desktop -1px)
  h2: "text-[32px] leading-none md:text-[36px] font-bold tracking-[-0.5px] md:tracking-[-1px] font-heading",
  // Mobile: 20px/24px, Desktop: 24px/28px, tracking -0.5px
  h3: "text-[20px] leading-[24px] md:text-[24px] md:leading-[28px] font-bold tracking-[-0.5px] font-heading",
  // Mobile & Desktop: 20px/24px, tracking -0.5px
  h4: "text-[20px] leading-[24px] font-bold tracking-[-0.5px] font-heading",
};

export function Heading({ as = "h1", className, ...props }: HeadingProps) {
  const Comp = as;
  return <Comp className={cn(headingStyles[as], className)} {...props} />;
}
