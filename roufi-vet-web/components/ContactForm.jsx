"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

import { PRIMARY_PHONE } from "@/lib/site";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/checkbox";

// Unchanged from the original contact page.
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  petOwner: z.boolean().default(false),
});

const EASE = [0.22, 1, 0.36, 1];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | success | error
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      petOwner: false,
    },
  });

  const { isSubmitting } = form.formState;

  // Same request as before: POST /api/contact, which emails the clinic.
  const onSubmit = async (data) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: EASE }}
            role="status"
            className="flex min-h-[32rem] flex-col items-start justify-center"
          >
            <span className="grid size-16 place-items-center rounded-full bg-roufi-green text-white shadow-[0_14px_30px_-12px_rgb(26_139_0/0.7)]">
              <CheckCircle2 className="size-8" aria-hidden="true" />
            </span>
            <h3 className="type-h2 mt-8 text-stone-900">Message Sent</h3>
            <p className="mt-4 max-w-md type-lead text-stone-600">We&apos;ll get back to you soon!</p>
            <Button type="button" variant="outline" className="mt-10" onClick={() => setStatus("idle")}>
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" autoComplete="name" {...field} />
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
                          <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
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
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 123-4567" autoComplete="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Appointment Request" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." className="min-h-[160px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="petOwner"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel className="cursor-pointer font-normal text-stone-700">I am a current pet owner</FormLabel>
                    </FormItem>
                  )}
                />

                <AnimatePresence initial={false}>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div role="alert" className="flex gap-3 rounded-2xl bg-roufi-red-50 p-4 text-[0.9375rem] text-roufi-red-700">
                        <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                        <p>
                          <span className="font-semibold">Your message could not be sent.</span> Please try again, or
                          call us at{" "}
                          <a href={PRIMARY_PHONE.href} className="whitespace-nowrap font-semibold underline underline-offset-2">
                            {PRIMARY_PHONE.display}
                          </a>
                          .
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
