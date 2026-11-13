import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CATEGORIES } from "@/lib/services";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="pt-hero relative isolate flex min-h-[80svh] items-center overflow-hidden bg-roufi-cream pb-24">
      <span
        aria-hidden="true"
        className="topo absolute left-1/2 top-1/2 -z-10 h-[44rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 bg-roufi-green/[0.07]"
      />
      <div className="shell text-center">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="type-display mt-6 text-stone-900">Page not found</h1>
        <p className="mx-auto mt-6 max-w-md type-lead text-stone-600">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              Back to home
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/ServicesPage">Our Services</Link>
          </Button>
        </div>
        <p className="mt-10 text-sm text-stone-500">
          Looking for{" "}
          <Link href={CATEGORIES.small.href} className="font-semibold text-roufi-green-700 hover:underline">
            small animal
          </Link>{" "}
          or{" "}
          <Link href={CATEGORIES.large.href} className="font-semibold text-roufi-green-700 hover:underline">
            large animal
          </Link>{" "}
          care?
        </p>
      </div>
    </section>
  );
}
