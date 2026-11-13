"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  BadgePlus,
  Bird,
  CalendarDays,
  Cat,
  Dog,
  Info,
  Mail,
  PawPrint,
  PencilLine,
  PhoneCall,
  Pill,
  Rabbit,
  RotateCcw,
  Scissors,
  Stethoscope,
  Syringe,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { CLINIC, PRIMARY_PHONE } from "@/lib/site";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { ChoiceItem, RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/Button";

/* ---------------------------------------------------------------------------
   Business rules: unchanged from the original booking page.
--------------------------------------------------------------------------- */
const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM",
];

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  appointmentDate: z.date({
    required_error: "Please select a date for your appointment",
  }),
  appointmentTime: z.string({
    required_error: "Please select a time for your appointment",
  }),
  petType: z.enum(["dog", "cat", "bird", "rabbit", "other"], {
    required_error: "Please select your pet type",
  }),
  petName: z.string().min(1, { message: "Please enter your pet's name" }),
  petAge: z.string().optional(),
  serviceType: z.enum(["checkup", "vaccination", "dental", "surgery", "grooming", "other"], {
    required_error: "Please select a service type",
  }),
  isNewPatient: z.boolean().default(false),
  additionalNotes: z.string().optional(),
});

// Past dates, Saturdays and Sundays cannot be booked.
function isDateDisabled(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const day = date.getDay();
  return date < today || day === 0 || day === 6;
}

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  petName: "",
  petAge: "",
  additionalNotes: "",
  isNewPatient: false,
};

/* ---------------------------------------------------------------------------
   Options (labels unchanged)
--------------------------------------------------------------------------- */
const petTypes = [
  { value: "dog", label: "Dog", icon: Dog },
  { value: "cat", label: "Cat", icon: Cat },
  { value: "bird", label: "Bird", icon: Bird },
  { value: "rabbit", label: "Rabbit", icon: Rabbit },
  { value: "other", label: "Other", icon: PawPrint },
];

const serviceOptions = [
  { value: "checkup", label: "Regular Checkup", icon: Stethoscope },
  { value: "vaccination", label: "Vaccination", icon: Syringe },
  { value: "dental", label: "Dental Care", icon: Pill },
  { value: "surgery", label: "Surgery", icon: Scissors },
  { value: "grooming", label: "Grooming", icon: Scissors, iconClassName: "rotate-90" },
  { value: "other", label: "Other", icon: BadgePlus },
];

const labelFor = (options, value) => options.find((option) => option.value === value)?.label ?? value;

const EASE = [0.22, 1, 0.36, 1];

/* ---------------------------------------------------------------------------
   Pieces
--------------------------------------------------------------------------- */
function Step({ number, title, description, children, className }) {
  return (
    <fieldset className={cn("min-w-0 border-t border-stone-200 p-6 first:border-t-0 sm:p-10", className)}>
      <legend className="float-left mb-8 flex w-full items-start gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-roufi-green text-sm font-semibold text-white">
          {number}
        </span>
        <span className="pt-1">
          <span className="block text-xl font-semibold tracking-[-0.02em] text-stone-900">{title}</span>
          {description && <span className="mt-1 block text-[0.9375rem] text-stone-500">{description}</span>}
        </span>
      </legend>
      <div className="clear-left">{children}</div>
    </fieldset>
  );
}

function SummaryRow({ label, children }) {
  return (
    <div className="border-b border-stone-200 py-4">
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">{label}</dt>
      <dd className="mt-1.5 text-[1.0625rem] font-medium text-stone-900">{children}</dd>
    </div>
  );
}

function buildEmail(data) {
  const lines = [
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Date: ${format(data.appointmentDate, "PPPP")}`,
    `Time: ${data.appointmentTime}`,
    `Pet: ${data.petName} (${labelFor(petTypes, data.petType)})`,
    data.petAge ? `Pet age: ${data.petAge}` : null,
    `First visit to Roufi Vet Clinic: ${data.isNewPatient ? "Yes" : "No"}`,
    `Service: ${labelFor(serviceOptions, data.serviceType)}`,
    data.additionalNotes ? `Notes: ${data.additionalNotes}` : null,
  ].filter(Boolean);

  const subject = `Appointment request: ${data.petName}`;
  const body = `Hello Roufi Vet,\n\nI would like to request an appointment:\n\n${lines.join("\n")}\n`;
  return `mailto:${CLINIC.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Shown after a valid submission. The site has no booking backend, so this
 * says plainly that nothing was sent and offers the two real ways to confirm.
 */
function ReviewRequest({ data, onEdit, onReset }) {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-hairline">
      <div className="relative isolate overflow-hidden bg-roufi-cream-100 p-6 sm:p-10">
        <span
          aria-hidden="true"
          className="topo absolute -right-24 -top-24 -z-10 h-80 w-96 bg-roufi-red/[0.07]"
        />
        <span className="grid size-14 place-items-center rounded-full bg-roufi-red text-white shadow-[0_14px_30px_-12px_rgb(255_3_2/0.7)]">
          <Info className="size-6" aria-hidden="true" />
        </span>
        <h2 ref={headingRef} tabIndex={-1} className="type-h2 mt-7 text-stone-900 focus:outline-none">
          Please confirm your appointment with the clinic
        </h2>
        <p className="mt-4 max-w-2xl type-lead text-stone-600">
          Online booking isn&apos;t connected to the clinic&apos;s schedule yet, so{" "}
          <strong className="font-semibold text-stone-900">this request has not been sent</strong>. Call us, or email
          the details below, to confirm your appointment.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="accent">
            <a href={PRIMARY_PHONE.href}>
              <PhoneCall />
              Call {PRIMARY_PHONE.display}
            </a>
          </Button>
          <Button asChild size="lg">
            <a href={buildEmail(data)}>
              <Mail />
              Email these details
            </a>
          </Button>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        <h3 className="text-lg font-semibold tracking-tight text-stone-900">Your request</h3>
        <dl className="mt-3 grid gap-x-10 sm:grid-cols-2">
          <SummaryRow label="Name">
            {data.firstName} {data.lastName}
          </SummaryRow>
          <SummaryRow label="Contact">
            <span className="block break-all">{data.email}</span>
            <span className="block">{data.phone}</span>
          </SummaryRow>
          <SummaryRow label="Date">{format(data.appointmentDate, "PPPP")}</SummaryRow>
          <SummaryRow label="Time">{data.appointmentTime}</SummaryRow>
          <SummaryRow label="Pet">
            {data.petName} · {labelFor(petTypes, data.petType)}
            {data.petAge ? ` · ${data.petAge}` : ""}
          </SummaryRow>
          <SummaryRow label="Service">{labelFor(serviceOptions, data.serviceType)}</SummaryRow>
          <SummaryRow label="First visit">{data.isNewPatient ? "Yes" : "No"}</SummaryRow>
          {data.additionalNotes && <SummaryRow label="Notes">{data.additionalNotes}</SummaryRow>}
        </dl>
      </div>

      <div className="flex flex-wrap gap-3 border-t border-stone-200 bg-roufi-cream/60 p-6 sm:px-10">
        <Button type="button" variant="outline" onClick={onEdit}>
          <PencilLine />
          Edit details
        </Button>
        <Button type="button" variant="ghost" onClick={onReset}>
          <RotateCcw />
          Start over
        </Button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   Form
--------------------------------------------------------------------------- */
export default function BookingForm() {
  const [submitted, setSubmitted] = useState(null);
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onTouched",
    shouldFocusError: false,
  });

  const [selectedDate, selectedTime] = useWatch({
    control: form.control,
    name: ["appointmentDate", "appointmentTime"],
  });
  const errorCount = Object.keys(form.formState.errors).length;
  const showErrorSummary = form.formState.submitCount > 0 && errorCount > 0;

  // The calendar depends on today's date, so render it on the client only.
  useEffect(() => setMounted(true), []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rootRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  const onSubmit = (data) => {
    setSubmitted(data);
    scrollToTop();
  };

  const onInvalid = () => {
    requestAnimationFrame(() => {
      const first = rootRef.current?.querySelector('[aria-invalid="true"]');
      if (!first) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      first.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      first.focus?.({ preventScroll: true });
    });
  };

  const handleEdit = () => {
    setSubmitted(null);
    scrollToTop();
  };

  const handleReset = () => {
    form.reset(defaultValues);
    setSubmitted(null);
    scrollToTop();
  };

  return (
    <div ref={rootRef} className="scroll-mt-[calc(var(--header-h)_+_1.5rem)]">
      <AnimatePresence mode="wait" initial={false}>
        {submitted ? (
          <motion.div
            key="review"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <ReviewRequest data={submitted} onEdit={handleEdit} onReset={handleReset} />
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onInvalid)}
                noValidate
                className="overflow-hidden rounded-[2rem] bg-white shadow-hairline"
              >
                <AnimatePresence initial={false}>
                  {showErrorSummary && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div role="alert" className="flex items-center gap-3 bg-roufi-red-50 px-6 py-4 text-[0.9375rem] font-medium text-roufi-red-700 sm:px-10">
                        <AlertCircle className="size-5 shrink-0" aria-hidden="true" />
                        Please check the {errorCount === 1 ? "highlighted field" : `${errorCount} highlighted fields`}.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 1. Owner */}
                <Step number={1} title="Your Information">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" autoComplete="given-name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" autoComplete="family-name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" autoComplete="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" autoComplete="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Step>

                {/* 2. Date and time */}
                <Step
                  number={2}
                  title="Appointment Time"
                  description="Choose a weekday, then pick a time."
                >
                  <div className="grid gap-10 md:grid-cols-2 md:gap-8">
                    <FormField
                      control={form.control}
                      name="appointmentDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel asChild>
                            <span>Appointment Date</span>
                          </FormLabel>
                          <FormControl>
                            <div
                              tabIndex={-1}
                              className="rounded-2xl border border-stone-200 p-3 outline-none aria-[invalid=true]:border-roufi-red-700 sm:p-4"
                            >
                              {mounted ? (
                                <Calendar
                                  mode="single"
                                  required
                                  selected={field.value}
                                  onSelect={(date) => {
                                    field.onChange(date);
                                    field.onBlur();
                                  }}
                                  disabled={isDateDisabled}
                                  startMonth={new Date()}
                                />
                              ) : (
                                <div className="h-[20.5rem] animate-pulse rounded-xl bg-stone-100" aria-hidden="true" />
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="appointmentTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel asChild>
                            <span>Appointment Time</span>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              value={field.value ?? ""}
                              onValueChange={(value) => {
                                field.onChange(value);
                                field.onBlur();
                              }}
                              aria-label="Appointment time"
                              className="gap-5 rounded-2xl outline-none"
                            >
                              {[
                                { label: "Morning", slots: timeSlots.filter((slot) => slot.endsWith("AM")) },
                                { label: "Afternoon", slots: timeSlots.filter((slot) => slot.endsWith("PM")) },
                              ].map((group) => (
                                <div key={group.label}>
                                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
                                    {group.label}
                                  </p>
                                  <div className="grid grid-cols-3 gap-2">
                                    {group.slots.map((time) => (
                                      <ChoiceItem
                                        key={time}
                                        value={time}
                                        className="h-11 justify-center px-2 text-sm tabular-nums"
                                      >
                                        {time}
                                      </ChoiceItem>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {selectedDate && (
                      <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="mt-8 flex items-center gap-3 rounded-2xl bg-roufi-green-50 px-5 py-4 text-[0.9375rem] text-roufi-green-800"
                        aria-live="polite"
                      >
                        <CalendarDays className="size-5 shrink-0" aria-hidden="true" />
                        <span>
                          <span className="font-semibold">{format(selectedDate, "PPPP")}</span>
                          {selectedTime ? ` at ${selectedTime}` : " · choose a time"}
                        </span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </Step>

                {/* 3. Pet */}
                <Step number={3} title="Pet Information">
                  <FormField
                    control={form.control}
                    name="petType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel asChild>
                          <span>Pet Type</span>
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            value={field.value ?? ""}
                            onValueChange={(value) => {
                              field.onChange(value);
                              field.onBlur();
                            }}
                            aria-label="Pet type"
                            className="grid grid-cols-3 gap-2 rounded-2xl outline-none sm:grid-cols-5"
                          >
                            {petTypes.map(({ value, label, icon: Icon }) => (
                              <ChoiceItem key={value} value={value} className="flex-col justify-center gap-2 py-4">
                                <Icon
                                  className="size-6 text-stone-500 transition-colors group-data-[state=checked]/choice:text-roufi-green"
                                  aria-hidden="true"
                                />
                                {label}
                              </ChoiceItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="petName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pet Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Max" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="petAge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Pet Age <span className="font-normal text-stone-400">(optional)</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="2 years" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="isNewPatient"
                    render={({ field }) => (
                      <FormItem className="mt-6 flex items-center gap-3 space-y-0 rounded-xl border border-stone-200 bg-roufi-cream/60 px-4 py-4">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={(checked) => field.onChange(checked === true)} />
                        </FormControl>
                        <FormLabel className="cursor-pointer font-normal text-stone-700">
                          This is my pet&apos;s first visit to Roufi Vet Clinic
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </Step>

                {/* 4. Service */}
                <Step number={4} title="Service Type">
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel asChild>
                          <span>What service does your pet need?</span>
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            value={field.value ?? ""}
                            onValueChange={(value) => {
                              field.onChange(value);
                              field.onBlur();
                            }}
                            aria-label="Service type"
                            className="grid grid-cols-1 gap-2 rounded-2xl outline-none min-[420px]:grid-cols-2 lg:grid-cols-3"
                          >
                            {serviceOptions.map(({ value, label, icon: Icon, iconClassName }) => (
                              <ChoiceItem key={value} value={value} className="px-4 py-3.5">
                                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-roufi-cream-100 text-roufi-green transition-colors group-data-[state=checked]/choice:bg-roufi-green group-data-[state=checked]/choice:text-white">
                                  <Icon className={cn("size-[18px]", iconClassName)} aria-hidden="true" />
                                </span>
                                {label}
                              </ChoiceItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem className="mt-8">
                        <FormLabel>
                          Additional Notes <span className="font-normal text-stone-400">(optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please share any specific concerns or information about your pet..."
                            className="min-h-[130px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Step>

                <div className="border-t border-stone-200 bg-roufi-cream/60 p-6 sm:p-10">
                  <p className="flex gap-3 text-[0.9375rem] leading-relaxed text-stone-600">
                    <Info className="mt-0.5 size-5 shrink-0 text-roufi-green" aria-hidden="true" />
                    <span>
                      Online requests aren&apos;t sent to the clinic automatically yet. After you continue, you&apos;ll
                      confirm your appointment by phone or email.
                    </span>
                  </p>
                  <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                    Book Appointment
                    <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
