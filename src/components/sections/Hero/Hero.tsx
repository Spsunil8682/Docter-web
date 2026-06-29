import { Fragment } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

interface Stat {
  value: string;
  label: string;
}

const STATS: readonly Stat[] = [
  { value: "500+", label: "Average Active Users" },
  { value: "40+", label: "Average daily free calls" },
];

function StatItem({ value, label }: Stat) {
  return (
    <div className="text-center">
      <div className="text-2xl leading-none font-semibold text-black">
        {value}
      </div>
      <p className="text-muted-2 mx-auto mt-2 max-w-[110px] text-sm font-medium">
        {label}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-cream-100 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-7 -left-11 z-0 h-[420px] w-[420px] rounded-full bg-amber-100/70 blur-[140px] lg:h-[660px] lg:w-[660px] lg:blur-[160px]"
      />

      <Container className="relative z-10 pt-8 pb-16 lg:pt-6 lg:pb-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="w-full text-center lg:max-w-[715px] lg:flex-1 lg:text-left">
            <div className="flex flex-col gap-3">
              <p className="text-muted text-base font-medium">
                Namaste, Welcome to Amrutam
              </p>
              <h1
                id="hero-heading"
                className="text-[28px] leading-[1.15] font-extrabold tracking-tight sm:text-4xl lg:text-[40px]"
              >
                <span className="text-near-black">Join Amrutam -</span>{" "}
                <span className="text-brand">Grow Your Practice</span>
              </h1>
              <p className="text-muted mx-auto max-w-[502px] text-base leading-relaxed font-medium sm:text-lg lg:mx-0 lg:text-xl">
                Connect with more patients, set your own schedule, and grow your
                Ayurvedic practice effortlessly.
              </p>
            </div>

            <Button
              href="#onboarding"
              variant="primary"
              className="mt-10 h-14 w-full max-w-[262px] text-xl"
            >
              Join Now
            </Button>

            <div className="mt-12 flex items-center justify-center gap-6 lg:justify-start">
              {STATS.map((stat, index) => (
                <Fragment key={stat.label}>
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="h-11 w-px shrink-0 bg-[rgba(131,167,133,0.5)]"
                    />
                  )}
                  <StatItem {...stat} />
                </Fragment>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[569px] shrink-0">
            <Image
              src="/images/hero-doctors.webp"
              alt="Ayurvedic doctors available for online consultation on Amrutam"
              width={569}
              height={425}
              priority
              sizes="(max-width: 1024px) 90vw, 569px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
