import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "transition-[color,background-color,box-shadow,transform,opacity] duration-150",
    "ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-40",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "active:enabled:scale-[0.96]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground hover:opacity-90",
        ghost: "text-fg hover:bg-fg/6",
        outline: "bg-surface text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
        subtle: "bg-fg/6 text-fg hover:bg-fg/10",
      },
      size: {
        default: "h-11 rounded-lg px-4 text-sm",
        sm: "h-9 rounded-md px-3 text-sm",
        icon: "size-11 rounded-lg",
        iconSm: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
