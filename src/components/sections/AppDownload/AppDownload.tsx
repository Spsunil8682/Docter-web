import Image from "next/image";

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

export function AppDownload() {
  return (
    <section id="app-download" className="bg-cream-50 w-full overflow-x-clip lg:py-[116px]">
      {/* Inset colored band — cream shows above/below via the section's padding */}
      <div className="bg-[#FFEDBF] w-full py-12 lg:py-0">
        <div className="mx-auto grid w-full max-w-[var(--container-max)] grid-cols-1 items-center px-5 sm:px-8 lg:grid-cols-[555fr_671fr] lg:pl-[84px] lg:pr-[101px]">
          {/* Left: copy + features + badges */}
          <div className="flex flex-col lg:pt-[43px] lg:pb-[56px]">
            <h2 className="text-brand max-w-[555px] font-sans text-3xl font-bold leading-[1.2] lg:text-[40px] lg:leading-[48px]">
              Get Started Today &ndash; Download the App Now!
            </h2>
            <p className="text-muted mt-6 max-w-[467px] font-sans text-lg leading-[1.31] font-medium lg:text-xl">
              Simplify consultations, manage patients, and grow your
              practice&mdash;all in one place.
            </p>

            <div className="mt-8 grid max-w-[565px] grid-cols-1 gap-x-[19px] gap-y-[40px] sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-4 rounded-xl border border-[#9E9E9E] p-2 lg:gap-8"
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

            <div className="mt-10 lg:mt-[74px] flex flex-wrap items-start justify-start gap-8 lg:justify-start lg:gap-[27px]">
              <a href="#" aria-label="Get it on Google Play">
                <Image
                  src="/images/app-download/badge-googleplay.webp"
                  alt="Get it on Google Play"
                  width={250}
                  height={74}
                  className="h-[60px] w-auto"
                />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <Image
                  src="/images/app-download/badge-appstore.webp"
                  alt="Download on the App Store"
                  width={251}
                  height={75}
                  className="h-[60px] w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right: app illustration (phone + floating doctor avatars) */}
          <div className="relative mx-auto w-full max-w-[650px] mt-10 lg:-mt-[65px] lg:-mb-[20px]">
            <Image
              src="/images/app-download/app-illustration.webp"
              alt="Amrutam doctor app showing an appointments screen with a patient consultation card"
              width={1344}
              height={1431}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 600px, 90vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
