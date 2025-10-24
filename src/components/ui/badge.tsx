import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        feature: "border-transparent px-6 py-2 text-base font-serif italic font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.15)] leading-tight tracking-tight whitespace-nowrap",
      },
      colorScheme: {
        orange: "bg-orange-100 text-orange-800",
        lime: "bg-lime-100 text-lime-800",
        indigo: "bg-indigo-100 text-indigo-800",
        cyan: "bg-cyan-100 text-cyan-800",
        pink: "bg-pink-100 text-pink-800",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  colorScheme?: "orange" | "lime" | "indigo" | "cyan" | "pink";
}

function Badge({ className, variant, colorScheme, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, colorScheme }), className)} {...props} />;
}

export { Badge, badgeVariants };
