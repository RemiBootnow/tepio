import { cn } from "@/lib/utils";

type StepStatus = "completed" | "active" | "pending";

interface Step {
  title: string;
  description?: string;
  status?: StepStatus;
}

interface VerticalStepsProps {
  steps: Step[];
  className?: string;
}

function StepBar({ status = "pending" }: { status?: StepStatus }) {
  const fillPercent =
    status === "completed" ? 100 : status === "active" ? 50 : 0;

  return (
    <div className="relative w-1 self-stretch rounded-full bg-muted overflow-hidden shrink-0">
      <div
        className="absolute top-0 left-0 right-0 bg-primary rounded-full transition-all duration-500"
        style={{ height: `${fillPercent}%` }}
      />
    </div>
  );
}

export function VerticalSteps({ steps, className }: VerticalStepsProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {steps.map((step, i) => (
        <div
          key={i}
          className="flex gap-6 items-stretch bg-background rounded-2xl p-8"
        >
          <StepBar status={step.status} />
          <div className="flex flex-col gap-2">
            <p className="font-heading font-medium text-xl leading-6 tracking-tight text-foreground">
              {step.title}
            </p>
            {step.description && (
              <p className="text-base text-muted-foreground leading-6">
                {step.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
