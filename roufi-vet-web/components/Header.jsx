"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { CLINIC, NAVIGATION, PRIMARY_PHONE } from "@/lib/site";
import { CATEGORIES, LARGE_ANIMAL_SERVICES, SMALL_ANIMAL_SERVICES } from "@/lib/services";
import { Button } from "@/components/ui/Button";

const EASE = [0.22, 1, 0.36, 1];
const SERVICE_ROUTES = ["/ServicesPage", "/SmallAnimal", "/LargeAnimal"];

function isActive(pathname, url) {
  if (url === "/") return pathname === "/";
  if (url === "/ServicesPage") return SERVICE_ROUTES.some((route) => pathname.startsWith(route));
  return pathname.startsWith(url);
}

function Logo({ className }) {
  // logo.png is 12332 x 4266; width and height keep its proportions.
  return (
    <Image
      src="/assets/logo.png"
      alt="Roufi Vet"
      width={12332}
      height={4266}
      priority
      sizes="180px"
      className={cn("h-12 w-auto lg:h-[3.6rem]", className)}
    />
  );
}

function ServicesMenu({ active, open, setOpen }) {
  const containerRef = useRef(null);

  const handleBlur = (event) => {
    if (!containerRef.current?.contains(event.relatedTarget)) setOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={handleBlur}
      onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
    >
      <div className="flex items-center">
        <NavLink href="/ServicesPage" active={active} className="pr-1.5">
          Our Services
        </NavLink>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="services-menu"
          aria-label="Show services"
          onClick={() => setOpen((value) => !value)}
          className="grid size-7 place-items-center rounded-full text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900"
        >
          <ChevronDown
            className={cn("size-4 transition-transform duration-300", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <div className="absolute left-1/2 top-full w-[min(56rem,calc(100vw-4rem))] -translate-x-1/2 pt-4">
            <motion.div
              id="services-menu"
              initial={{ opacity: 0, y: 10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.985 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="grid origin-top grid-cols-[1.35fr_1fr_0.95fr] gap-2 rounded-[1.75rem] border border-stone-200/80 bg-white p-2.5 shadow-lift"
            >
              <MenuColumn
                title={CATEGORIES.small.shortTitle}
                href={CATEGORIES.small.href}
                items={SMALL_ANIMAL_SERVICES}
                columns
              />
              <MenuColumn
                title={CATEGORIES.large.shortTitle}
                href={CATEGORIES.large.href}
                items={LARGE_ANIMAL_SERVICES}
              />
              <Link
                href="/ServicesPage"
                className="group relative flex min-h-[15rem] flex-col justify-end overflow-hidden rounded-[1.35rem] p-5 text-white"
              >
                <Image
                  src="/assets/GettyImages-184384329-56a001545f9b58eba4ae69d1.jpg"
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover object-[60%_50%] transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-roufi-green-950/90 via-roufi-green-950/30 to-transparent" />
                <span className="relative text-lg font-semibold leading-tight">Our Veterinary Services</span>
                <span className="relative mt-2 inline-flex items-center gap-1.5 text-sm text-white/85">
                  View all services
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuColumn({ title, href, items, columns = false }) {
  return (
    <div className="rounded-[1.35rem] bg-roufi-cream/70 p-5">
      <Link
        href={href}
        className="group mb-3 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-roufi-green-700"
      >
        {title}
        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
      <ul className={cn("grid gap-x-3", columns ? "grid-cols-2" : "grid-cols-1")}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-lg px-2 py-1.5 -mx-2 text-[0.875rem] leading-snug text-stone-700 transition-colors hover:bg-white hover:text-roufi-green-700"
            >
              {item.shortTitle ?? item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavLink({ href, active, children, className }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative inline-flex h-10 items-center px-4 text-[0.9375rem] font-medium transition-colors duration-200",
        active ? "text-stone-950" : "text-stone-600 hover:text-stone-950",
        className
      )}
    >
      {children}
      {active && (
        <motion.span
          layoutId="nav-active-dot"
          className="absolute bottom-0.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-roufi-red"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      )}
    </Link>
  );
}

function MenuToggle({ open, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      className="relative grid size-11 place-items-center rounded-full border border-stone-200 bg-white text-stone-900 transition-colors hover:border-stone-300 lg:hidden"
    >
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span
        aria-hidden="true"
        className={cn(
          "absolute h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-out-expo",
          open ? "rotate-45" : "-translate-y-[4px]"
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "absolute h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-out-expo",
          open ? "-rotate-45" : "translate-y-[4px]"
        )}
      />
    </button>
  );
}

const mobileList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

const mobileItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

function MobileMenu({ pathname, onNavigate }) {
  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.45, ease: EASE }}
      className="absolute inset-x-0 top-full h-[calc(100dvh_-_var(--header-h))] overflow-y-auto overscroll-contain border-t border-stone-200/70 bg-white lg:hidden"
    >
      <motion.nav
        aria-label="Mobile"
        variants={mobileList}
        initial="hidden"
        animate="show"
        className="shell flex min-h-full flex-col pb-10 pt-4"
      >
        <ul>
          {NAVIGATION.map((item) => {
            const active = isActive(pathname, item.url);
            return (
              <motion.li key={item.url} variants={mobileItem} className="border-b border-stone-200/80">
                <Link
                  href={item.url}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className="group flex items-center justify-between py-4 text-[1.75rem] font-semibold tracking-[-0.03em] text-stone-900"
                >
                  <span className="flex items-center gap-3">
                    {item.title}
                    {active && <span className="size-2 rounded-full bg-roufi-red" aria-hidden="true" />}
                  </span>
                  <ArrowUpRight className="size-6 text-stone-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-roufi-green" />
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <motion.div variants={mobileItem} className="mt-6 grid grid-cols-2 gap-3">
          {[CATEGORIES.small, CATEGORIES.large].map((category) => (
            <Link
              key={category.href}
              href={category.href}
              onClick={onNavigate}
              className="rounded-2xl bg-roufi-cream-100 px-4 py-4 text-[0.9375rem] font-medium text-stone-800 transition-colors hover:bg-roufi-green-50 hover:text-roufi-green-800"
            >
              {category.shortTitle}
            </Link>
          ))}
        </motion.div>

        <motion.div variants={mobileItem} className="mt-auto pt-10">
          <div className="grid gap-3">
            <Button asChild size="lg">
              <Link href="/BookAppointment" onClick={onNavigate}>
                Book Appointment
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={PRIMARY_PHONE.href}>
                <Phone />
                {PRIMARY_PHONE.display}
              </a>
            </Button>
          </div>
          <div className="mt-8 space-y-2 text-sm text-stone-500">
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-roufi-red" aria-hidden="true" />
              {CLINIC.address.line1}, {CLINIC.address.line2}
            </p>
            <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-2 hover:text-stone-900">
              <Mail className="size-4 text-roufi-red" aria-hidden="true" />
              {CLINIC.email}
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Sticky behaviour: solid background after a few pixels, hide while
  // scrolling down, reveal as soon as the visitor scrolls up.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        const delta = y - lastY.current;
        if (Math.abs(delta) > 6) {
          setHidden(delta > 0 && y > 160);
          lastY.current = y;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close menus after navigation.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock page scroll and support Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const isHidden = hidden && !menuOpen && !servicesOpen;
  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color,box-shadow] duration-500 ease-out-expo",
        isHidden ? "-translate-y-full" : "translate-y-0",
        solid
          ? "border-stone-200/70 bg-white/[0.94] shadow-[0_10px_30px_-24px_rgb(28_25_23/0.35)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" aria-label="Roufi Vet, home" className="-ml-1 shrink-0 rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          {NAVIGATION.map((item) =>
            item.url === "/ServicesPage" ? (
              <ServicesMenu
                key={item.url}
                active={isActive(pathname, item.url)}
                open={servicesOpen}
                setOpen={setServicesOpen}
              />
            ) : (
              <NavLink key={item.url} href={item.url} active={isActive(pathname, item.url)}>
                {item.title}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={PRIMARY_PHONE.href}
            className="group inline-flex h-11 items-center gap-2.5 rounded-full pl-1.5 pr-3 text-sm font-medium text-stone-700 transition-colors hover:text-stone-950"
          >
            <span className="grid size-9 place-items-center rounded-full bg-roufi-red-50 text-roufi-red transition-colors duration-300 group-hover:bg-roufi-red group-hover:text-white">
              <Phone className="size-4" aria-hidden="true" />
            </span>
            <span className="hidden xl:inline">{PRIMARY_PHONE.display}</span>
            <span className="sr-only xl:hidden">Call {PRIMARY_PHONE.display}</span>
          </a>
          <Button asChild>
            <Link href="/BookAppointment">
              Book Appointment
              <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PRIMARY_PHONE.href}
            aria-label={`Call ${PRIMARY_PHONE.display}`}
            className="grid size-11 place-items-center rounded-full bg-roufi-red-50 text-roufi-red"
          >
            <Phone className="size-[18px]" aria-hidden="true" />
          </a>
          <MenuToggle open={menuOpen} onClick={() => setMenuOpen((value) => !value)} />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <MobileMenu pathname={pathname} onNavigate={closeMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
