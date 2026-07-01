import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface FeatureImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface FeatureBadge {
  src: string;
  left: string;
  top: string;
  width: string;
}

interface Feature {
  id: string;
  title: ReactNode;
  description: ReactNode;
  image?: FeatureImage;
  badge?: FeatureBadge;
  imageRight?: boolean;
}

const FEATURES: readonly Feature[] = [
  {
    id: "instant-call",
    title: (
      <>
        Instant <span className="font-extrabold">FREE</span> 5-Mins Call
      </>
    ),
    description: (
      <>
        We understand the importance of building trust with your patients.
        That&rsquo;s why Amrutam offers a{" "}
        <strong className="text-ink font-bold">free 5-minute call</strong>,
        helping you connect instantly and foster lasting patient relationships
        with ease.
      </>
    ),
    image: {
      src: "/images/why-choose/row1-instant-call.webp",
      width: 1102,
      height: 643,
      alt: "Doctor profile card with an incoming free call notification",
    },
    badge: {
      src: "/images/why-choose/row1-call-badge.svg",
      left: "9.6%",
      top: "2.8%",
      width: "15.2%",
    },
  },
  {
    id: "forum",
    title: "Forum for Meaningful Connections",
    description:
      "We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while the “Thoughts” section allows you to share deeper Ayurvedic wisdom.",
    image: {
      src: "/images/why-choose/row2-forum.webp",
      width: 1030,
      height: 726,
      alt: "Amrutam community forum showing patient questions and doctor thoughts",
    },
    imageRight: true,
  },
  {
    id: "session-mode",
    title: "Choose Your Session Mode",
    description:
      "Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.",
    image: {
      src: "/images/why-choose/row3-session-mode.webp",
      width: 968,
      height: 678,
      alt: "Session mode selector with free call, video and chat options",
    },
  },
  {
    id: "wallet",
    title: "Smart Wallet",
    description:
      "We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.",
    image: {
      src: "/images/why-choose/row4-wallet.webp",
      width: 1278,
      height: 611,
      alt: "Amrutam wallet screen with balance, withdraw action and OTP verification",
    },
    imageRight: true,
  },
  {
    id: "flexible-timing",
    title: "Flexible Work Timing",
    description:
      "We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.",
    image: {
      src: "/images/why-choose/row5-availability.webp",
      width: 1093,
      height: 935,
      alt: "Doctor app availability toggle set to Offline with ratings summary",
    },
  },
];

function FeatureIllustration({
  image,
  badge,
}: {
  image?: FeatureImage;
  badge?: FeatureBadge;
}) {
  if (!image) {
    return (
      <div className="flex aspect-[16/11] w-full items-center justify-center rounded-3xl bg-amber-50/60">
        <span className="text-muted text-sm font-medium">
          Illustration coming soon
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-auto w-full"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      {badge && (
        <Image
          src={badge.src}
          alt=""
          aria-hidden
          width={84}
          height={84}
          className="absolute h-auto"
          style={{ left: badge.left, top: badge.top, width: badge.width }}
        />
      )}
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-cream-50 w-full py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col items-center px-5 sm:px-8 lg:pl-[108px] lg:pr-[120px]">
        <div className="flex max-w-[952px] flex-col items-center gap-3 text-center">
          <h2 className="text-brand font-sans text-3xl font-bold tracking-[0.01em] lg:text-[40px]">
            Why Doctors Choose Us?
          </h2>
          <p className="text-muted-2 font-sans text-lg font-medium tracking-[0.01em] lg:text-xl">
            Unlock the Benefits of Smarter Healthcare Management and Patient
            Care
          </p>
        </div>

        <div className="mt-12 flex w-full flex-col gap-16 lg:mt-20 lg:gap-24">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={cn(
                  "order-1",
                  feature.imageRight ? "lg:order-2" : "lg:order-1",
                )}
              >
                <FeatureIllustration
                  image={feature.image}
                  badge={feature.badge}
                />
              </div>

              <div
                className={cn(
                  "order-2 flex flex-col gap-4",
                  feature.imageRight ? "lg:order-1" : "lg:order-2",
                )}
              >
                <h3 className="text-brand font-sans text-2xl font-bold lg:text-[28px]">
                  {feature.title}
                </h3>
                <p className="text-muted font-sans text-base leading-[1.45] lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
