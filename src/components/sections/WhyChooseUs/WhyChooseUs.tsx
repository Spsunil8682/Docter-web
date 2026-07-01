import Image from "next/image";
import type { ReactNode } from "react";
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

interface FeatureLayer {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Placement within the illustration box, as CSS values (percentages). */
  left: string;
  top: string;
  boxWidth: string;
  z?: number;
}

interface Feature {
  id: string;
  title: ReactNode;
  description: ReactNode;
  image?: FeatureImage;
  badge?: FeatureBadge;
  /** Composed illustration built from absolutely-positioned layers. */
  layers?: readonly FeatureLayer[];
  /** Aspect ratio of the layered illustration box (e.g. "532 / 324"). */
  aspect?: string;
  imageRight?: boolean;
  /** Extra classes applied to the illustration column wrapper. */
  imageWrapClassName?: string;
  /** Extra classes applied to the text/content column wrapper. */
  contentWrapClassName?: string;
  /** Overrides the row's grid template / gap (e.g. exact Figma columns). */
  gridClassName?: string;
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
    imageWrapClassName: "pl-[14px]",
    contentWrapClassName: "pr-[30px]",
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
    imageWrapClassName: "",
    contentWrapClassName: "pr-[90px]",
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
     imageWrapClassName: "pl-[14px]",
    contentWrapClassName: "pr-[50px]",
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
    // Figma node 60:37068 — text 508px, 58px gap, image 639px.
    gridClassName: "lg:grid-cols-[508px_639px] lg:gap-[58px]",
    imageWrapClassName: "",
    contentWrapClassName: "lg:gap-3",
  },
  {
    id: "flexible-timing",
    title: "Flexible Work Timing",
    description:
      "We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.",
    aspect: "532 / 324",
     imageWrapClassName: "",
    contentWrapClassName: "lg:pl-[50px]",
    layers: [
      {
        src: "/images/why-choose/row5-availability.webp",
        width: 1093,
        height: 935,
        alt: "Doctor app availability toggle set to Offline with ratings summary",
        left: "0%",
        top: "1.5%",
        boxWidth: "68.4%",
        z: 10,
      },
      {
        src: "/images/why-choose/row5-profile.webp",
        width: 1038,
        height: 391,
        alt: "Dr. Prerna Narang profile card with rating and consultation options",
        left: "35%",
        top: "68.2%",
        boxWidth: "65%",
        z: 20,
      },
      {
        src: "/images/why-choose/row5-bag-badge.svg",
        width: 84,
        height: 84,
        alt: "",
        left: "51.5%",
        top: "0%",
        boxWidth: "15.8%",
        z: 30,
      },
      
    ],
  },
];

function FeatureIllustration({
  image,
  badge,
  layers,
  aspect,
}: {
  image?: FeatureImage;
  badge?: FeatureBadge;
  layers?: readonly FeatureLayer[];
  aspect?: string;
}) {
  if (layers) {
    return (
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        {layers.map((layer) => (
          <div
            key={layer.src}
            className="absolute"
            style={{
              left: layer.left,
              top: layer.top,
              width: layer.boxWidth,
              zIndex: layer.z,
            }}
          >
            <Image
              src={layer.src}
              alt={layer.alt}
              aria-hidden={layer.alt === "" ? true : undefined}
              width={layer.width}
              height={layer.height}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        ))}
      </div>
    );
  }

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
              className={cn(
                "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                feature.gridClassName,
              )}
            >
              <div
                className={cn(
                  "order-1",
                  feature.imageRight ? "lg:order-2" : "lg:order-1",
                  feature.imageWrapClassName,
                )}
              >
                <FeatureIllustration
                  image={feature.image}
                  badge={feature.badge}
                  layers={feature.layers}
                  aspect={feature.aspect}
                />
              </div>

              <div
                className={cn(
                  "order-2 flex flex-col gap-4",
                  feature.imageRight ? "lg:order-1" : "lg:order-2",
                  feature.contentWrapClassName,
                )}
              >
                <h3 className="text-brand font-sans text-2xl font-bold lg:text-[28px]">
                  {feature.title}
                </h3>
                <p className="text-muted font-sans text-base font-medium leading-[1.45] lg:text-lg">
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
