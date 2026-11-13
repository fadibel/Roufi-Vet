import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = "RadioGroup";

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square size-4 rounded-full border border-stone-400 text-roufi-green transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-roufi-green/20 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-roufi-green",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="size-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

/**
 * A selectable chip or tile that behaves as a radio button (arrow keys move
 * between options). Use inside <RadioGroup>.
 */
const ChoiceItem = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "group/choice relative flex items-center gap-3 rounded-xl border border-stone-300 bg-white text-left text-[0.9375rem] font-medium text-stone-800 transition-[border-color,background-color,color,box-shadow] duration-200 hover:border-roufi-green hover:bg-roufi-green-50/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-roufi-green/20 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-roufi-green data-[state=checked]:bg-roufi-green-50 data-[state=checked]:text-roufi-green-800 data-[state=checked]:shadow-[inset_0_0_0_1px_#1a8b00]",
        className
      )}
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
});
ChoiceItem.displayName = "ChoiceItem";

export { RadioGroup, RadioGroupItem, ChoiceItem };
