"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
}

const STEPS: readonly Step[] = [
  {
    title: "Step 1: Get your referral code",
    description: "Contact us to receive your unique referral code.",
  },
  {
    title: "Step 2: Register on Amrutam",
    description:
      "Sign up on the Amrutam Doctors app or website to join our specialist network.",
  },
  {
    title: "Step 3: Complete KYC",
    description:
      "Fill in your details and upload the required documents for verification.",
  },
  {
    title: "Step 4: Start consulting",
    description:
      "Once verified, begin offering consultations and helping patients.",
  },
];

interface Tab {
  id: string;
  label: string;
  image: string;
  alt: string;
}

const TABS: readonly Tab[] = [
  {
    id: "consultations",
    label: "Consultations",
    image: "/images/onboarding/panel-consultations.webp",
    alt: "Doctor app screens for setting consultation fees, viewing appointments and consultation details",
  },
  {
    id: "payment",
    label: "Payment withdrawal",
    image: "/images/onboarding/panel-payment.webp",
    alt: "Doctor app screens showing earnings, trusted transfers and smooth payment settlement",
  },
  {
    id: "schedule",
    label: "Schedule",
    image: "/images/onboarding/panel-schedule.webp",
    alt: "Doctor app screens for choosing a day, picking a time slot and viewing the schedule overview",
  },
];

export function Onboarding() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TABS[activeIndex] ?? TABS[0]!;

  return (
    <section id="onboarding" className="bg-cream-50 w-full py-12 lg:py-10">
      <Container className="flex flex-col gap-10 lg:gap-[38px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-brand-dark font-sans text-3xl leading-[1.36em] font-bold tracking-[0.01em] lg:text-[40px]">
            Join Our Circle of Care
          </h2>
          <p className="text-muted-2 font-sans text-base leading-[1.36em] font-medium tracking-[0.07em] lg:text-xl">
            Becoming a part of Amrutam is simple
          </p>
        </div>

        {/* Steps + hero illustration */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,578px)_minmax(0,1fr)] lg:gap-16">
          <ol className="flex flex-col gap-3">
            {STEPS.map((step) => (
              <li
                key={step.title}
                className="border-brand-dark/50 bg-cream-50 flex flex-col gap-2.5 rounded-lg border px-8 py-7"
              >
                <h3 className="text-brand font-sans text-xl font-bold">
                  {step.title}
                </h3>
                <p className="text-brand font-sans text-sm">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="relative mx-auto aspect-[645/400] w-full max-w-[645px]">
            <Image
              src="/images/onboarding/hero-decoration.svg"
              alt=""
              aria-hidden
              width={646}
              height={329}
              className="absolute top-0 left-0 w-full"
            />
            <Image
              src="/images/onboarding/hero-phone.webp"
              alt="Become an Amurtam doctor onboarding form with name, contact, email and message fields"
              width={1117}
              height={637}
              className="absolute h-auto"
              style={{ left: "5.27%", top: "20.5%", width: "86.55%" }}
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </div>
        </div>

        {/* Feature tabs + showcase */}
        <div className="flex flex-col items-center gap-7">
          <div
            role="tablist"
            aria-label="Doctor app features"
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-9"
          >
            {TABS.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="onboarding-panel"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "font-nunito cursor-pointer rounded-lg px-4 py-3 text-xl leading-6 transition-colors duration-200",
                    "focus-visible:ring-brand focus-visible:ring-2 focus-visible:outline-none",
                    isActive
                      ? "bg-brand text-white"
                      : "border-brand/50 text-brand bg-cream-50 hover:bg-brand/5 border",
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            id="onboarding-panel"
            role="tabpanel"
            className="w-full overflow-hidden rounded-xl"
          >
            <Image
              key={active.id}
              src={active.image}
              alt={active.alt}
              width={2480}
              height={1120}
              className="h-auto w-full"
              sizes="(min-width: 1440px) 1240px, 100vw"
              priority={false}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button href="#contact" size="lg" className="px-9 text-xl">
            Join Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
