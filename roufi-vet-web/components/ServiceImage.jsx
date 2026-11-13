import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Displays one of the 401x220 service photos.
 *
 * Those files have transparent rounded corners baked in. Scaling the image to
 * 112% inside an overflow-hidden frame crops the corners away, so the frame's
 * own radius is the only one visible. Hover zoom is driven by a parent `group`.
 */
export default function ServiceImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw",
  priority = false,
}) {
  return (
    <div className={cn("relative overflow-hidden bg-stone-200", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={90}
        priority={priority}
        className={cn(
          "scale-[1.12] object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.19]",
          imageClassName
        )}
      />
    </div>
  );
}
