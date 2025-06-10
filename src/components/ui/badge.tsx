import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

    const variantClasses = {
      default: "bg-primary text-primary-foreground border-transparent",
      secondary: "bg-secondary text-secondary-foreground border-transparent",
      destructive: "bg-destructive text-destructive-foreground border-transparent",
      outline: "text-foreground border-border",
    };

    return (
      <span
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };