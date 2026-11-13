import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Eyebrow + heading + optional intro, revealed on scroll.
 * `tone="dark"` is for use on deep green backgrounds.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className,
  titleClassName,
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", dark && "eyebrow-light", align === "center" && "justify-center")}>
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "type-h2",
          eyebrow && "mt-5",
          dark ? "text-white" : "text-stone-900",
          titleClassName
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={cn(
            "mt-6 type-lead",
            dark ? "text-white/75" : "text-stone-600",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
