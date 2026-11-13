import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

/**
 * Brand-styled date picker for react-day-picker v9.
 * Class names follow the v9 API (month_caption, day_button, selected, ...).
 */
function Calendar({ className, classNames, showOutsideDays = false, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-full", className)}
      classNames={{
        months: "relative flex flex-col gap-4",
        month: "w-full space-y-3",
        month_caption: "flex h-10 items-center px-1",
        caption_label: "text-base font-semibold tracking-tight text-stone-900",
        nav: "absolute right-0 top-0 z-10 flex items-center gap-1.5",
        button_previous:
          "grid size-10 place-items-center rounded-full border border-stone-200 text-stone-700 transition-colors hover:border-roufi-green hover:text-roufi-green-700 disabled:pointer-events-none disabled:opacity-30",
        button_next:
          "grid size-10 place-items-center rounded-full border border-stone-200 text-stone-700 transition-colors hover:border-roufi-green hover:text-roufi-green-700 disabled:pointer-events-none disabled:opacity-30",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday:
          "flex-1 pb-2 text-center text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-stone-400",
        week: "mt-1 flex w-full",
        day: "relative flex-1 p-0.5 text-center",
        day_button:
          "mx-auto grid aspect-square w-full max-w-11 place-items-center rounded-full text-[0.9375rem] font-medium text-stone-800 transition-colors duration-200 hover:bg-roufi-green-50 hover:text-roufi-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roufi-green disabled:pointer-events-none disabled:font-normal disabled:text-stone-300",
        selected:
          "[&>button]:bg-roufi-green [&>button]:text-white [&>button]:shadow-[0_8px_18px_-8px_rgb(26_139_0/0.8)] [&>button:hover]:bg-roufi-green-700 [&>button:hover]:text-white",
        today:
          "[&>button]:after:absolute [&>button]:after:bottom-1.5 [&>button]:after:left-1/2 [&>button]:after:size-1 [&>button]:after:-translate-x-1/2 [&>button]:after:rounded-full [&>button]:after:bg-roufi-red [&>button]:relative",
        outside: "opacity-40",
        disabled: "",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: chevronClass }) =>
          orientation === "left" ? (
            <ChevronLeft className={cn("size-4", chevronClass)} aria-hidden="true" />
          ) : (
            <ChevronRight className={cn("size-4", chevronClass)} aria-hidden="true" />
          ),
      }}
      {...props}
    />
  );
}

export { Calendar };
