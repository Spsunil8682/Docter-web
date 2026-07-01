"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface FaqItem {
  question: string;
  answer: string;
}

// NOTE: The Figma frame only shows the collapsed questions (no answer copy).
// The answers below are sensible placeholder copy so the accordion is functional.
const FAQS: readonly FaqItem[] = [
  {
    question: "What is Amrutam?",
    answer:
      "Amrutam is a holistic Ayurvedic wellness platform that connects patients with authentic, chemical-free Ayurvedic care and certified practitioners.",
  },
  {
    question: "How does Amrutam help me grow as a practitioner?",
    answer:
      "Amrutam gives you access to a growing community of patients, flexible consultation modes, secure payments, and tools to manage and scale your practice.",
  },
  {
    question: "How do I become a part of Amrutam Doctor?",
    answer:
      "Get your referral code, register on the Amrutam Doctors app or website, complete your KYC verification, and start consulting once you’re approved.",
  },
  {
    question: "What is Amrutam Global as a platform?",
    answer:
      "Amrutam Global is our worldwide platform that brings authentic Ayurvedic products and consultations to patients across the globe.",
  },
  {
    question: "What documents do I need to provide?",
    answer:
      "You’ll need a valid government ID, your BAMS or relevant Ayurvedic qualification certificate, and registration proof for KYC verification.",
  },
  {
    question: "Is there a fee to join Amrutam?",
    answer:
      "No, joining Amrutam as a doctor is completely free. You can register and start consulting without any onboarding charges.",
  },
];

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <line y1="5.61133" x2="11" y2="5.61133" stroke="#666666" />
      {!open && (
        <line x1="5.39062" y1="0" x2="5.39062" y2="11" stroke="#666666" />
      )}
    </svg>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream-50 w-full py-[33px]">
      <div className="mx-auto flex w-full max-w-[1030px] flex-col items-center gap-12 px-5 sm:px-8 lg:px-0">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            className="text-brand-dark font-sans text-3xl font-bold tracking-[0.01em] lg:text-[40px]"
            style={{ textShadow: "0px 4px 36.2px rgba(18, 90, 140, 0.15)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-muted-2 font-sans text-base leading-[1.5] lg:text-xl">
            Find quick answers to common questions to help you navigate the app
            and its features easily.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[26px]">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-[#C6C1B9]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 pb-[25px] text-left"
                  >
                    <span className="text-muted font-sans text-base leading-[26px] font-medium tracking-[0.01em] lg:text-xl">
                      {item.question}
                    </span>
                    <ToggleIcon open={isOpen} />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  hidden={!isOpen}
                  className="text-muted-2 font-sans text-sm leading-[1.6] lg:text-base"
                >
                  {isOpen && <p className="pb-[26px]">{item.answer}</p>}
                </div>
              </div>
            );
          })}
        </div>

        <Button href="#" size="lg" className="px-9 text-xl">
          See More
        </Button>
      </div>
    </section>
  );
}
