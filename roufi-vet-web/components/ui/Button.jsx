import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-[-0.005em] transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roufi-green focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[1.05em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Brand green: primary actions such as booking
        default:
          "bg-roufi-green text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_10px_24px_-12px_rgb(26_139_0/0.7)] hover:bg-roufi-green-700",
        // Brand red: phone and urgent actions
        accent:
          "bg-roufi-red text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_10px_24px_-12px_rgb(255_3_2/0.7)] hover:bg-roufi-red-700",
        outline:
          "border border-stone-300 bg-transparent text-stone-900 hover:border-roufi-green hover:bg-roufi-green-50 hover:text-roufi-green-700",
        secondary: "bg-roufi-green-50 text-roufi-green-800 hover:bg-roufi-green-100",
        // For dark or photographic backgrounds
        light: "bg-white text-roufi-green-900 hover:bg-roufi-cream-100",
        "outline-light":
          "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-stone-900",
        ghost: "text-stone-700 hover:bg-stone-100 hover:text-stone-900",
        link: "h-auto rounded-none px-0 text-roufi-green-700 underline-offset-4 hover:underline",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-6 text-[0.9375rem]",
        sm: "h-9 px-4 text-sm",
        lg: "h-[3.25rem] px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(function Button(
  { className, variant, size, asChild = false, ...props },
  ref
) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
});

Button.displayName = "Button";

export { Button, buttonVariants };
