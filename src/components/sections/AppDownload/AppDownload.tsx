import Image from "next/image";
import { Container } from "@/components/layout/Container";

interface Feature {
  icon: string;
  width: number;
  height: number;
  label: string;
}

const FEATURES: readonly Feature[] = [
  {
    icon: "/images/app-download/icon-forum.svg",
    width: 47,
    height: 35,
    label: "Build Trust and Community with Forum",
  },
  {
    icon: "/images/app-download/icon-pay.svg",
    width: 44,
    height: 44,
    label: "Earn More with Pay Per Conversation",
  },
  {
    icon: "/images/app-download/icon-call.svg",
    width: 44,
    height: 44,
    label: "Attract Patients with 5-Minute Free Call",
  },
  {
    icon: "/images/app-download/icon-wallet.svg",
    width: 43,
    height: 45,
    label: "Instant Access to Your Earnings with Wallet",
  },
];

function AppStoreBadge() {
  return (
    <svg
      viewBox="0 0 135 40"
      role="img"
      aria-label="Download on the App Store"
      className="h-[52px] w-auto"
    >
      <rect width="135" height="40" rx="6" fill="#000000" />
      <g transform="translate(14 8) scale(1)" fill="#FFFFFF">
        <path
          transform="translate(0 0) scale(1)"
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        />
      </g>
      <text
        x="45"
        y="16"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        fontSize="7"
      >
        Download on the
      </text>
      <text
        x="45"
        y="30"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        fontSize="15"
        fontWeight="600"
      >
        App Store
      </text>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <svg
      viewBox="0 0 135 40"
      role="img"
      aria-label="Get it on Google Play"
      className="h-[52px] w-auto"
    >
      <defs>
        <linearGradient id="gp" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00C3FF" />
          <stop offset="1" stopColor="#1FD37A" />
        </linearGradient>
      </defs>
      <rect width="135" height="40" rx="6" fill="#000000" />
      <g transform="translate(13 9)">
        <path d="M0 .6C0 .2.4-.1.8.1l13.9 8c.5.3.5 1 0 1.3l-13.9 8C.4 17.6 0 17.4 0 17V.6Z" fill="url(#gp)" />
        <path d="M0 .6V17l8.4-8.2L0 .6Z" fill="#00C3FF" opacity="0.85" />
        <path d="M14.7 8.1 11.2 6 8.4 8.8l2.8 2.8 3.5-2.1c.5-.3.5-1 0-1.4Z" fill="#FFCE00" />
      </g>
      <text
        x="40"
        y="16"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        fontSize="6.5"
        letterSpacing="1"
      >
        GET IT ON
      </text>
      <text
        x="40"
        y="30"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="600"
      >
        Google Play
      </text>
    </svg>
  );
}

export function AppDownload() {
  return (
    <section id="app-download" className="bg-cream-50 w-full">
      <div className="bg-[#FFEDBF]">
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:gap-8 lg:py-16">
            {/* Left: copy + features + badges */}
            <div className="flex flex-col">
              <h2 className="text-brand font-sans text-3xl font-bold leading-[1.2] lg:text-[40px] lg:leading-[48px]">
                Get Started Today – Download the App Now!
              </h2>
              <p className="text-muted mt-5 max-w-[467px] font-sans text-lg leading-[1.31] font-medium lg:text-xl">
                Simplify consultations, manage patients, and grow your
                practice—all in one place.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-w-[600px]">
                {FEATURES.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-6 rounded-xl border border-[#9E9E9E] p-2 lg:gap-8"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt=""
                        aria-hidden
                        width={feature.width}
                        height={feature.height}
                        className="h-auto w-auto"
                      />
                    </span>
                    <span className="text-brand-dark font-sans text-base font-medium leading-[1.31]">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href="#" aria-label="Download on the App Store">
                  <AppStoreBadge />
                </a>
                <a href="#" aria-label="Get it on Google Play">
                  <GooglePlayBadge />
                </a>
              </div>
            </div>

            {/* Right: app illustration */}
            <div className="relative mx-auto w-full max-w-[560px] lg:-my-10">
              <Image
                src="/images/app-download/app-illustration.webp"
                alt="Amrutam doctor app showing an appointments screen with a patient consultation card"
                width={1344}
                height={1431}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 560px, 90vw"
                priority={false}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
