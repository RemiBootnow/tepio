import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  product: string;
  image: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  product,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full rounded-3xl overflow-hidden flex flex-col justify-end p-6",
        className,
      )}
    >
      <img
        src={image}
        alt={`Témoignage de ${author}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 57%, rgba(0,0,0,0.7) 81%)",
        }}
      />
      <div className="relative flex flex-col gap-4 text-white">
        <p className="text-[22px] font-medium leading-8">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex gap-2 text-sm">
          <span>{author}</span>
          <span>·</span>
          <span>{product}</span>
        </div>
      </div>
    </div>
  );
}
