import Image from "next/image";

const LOGOS: ReadonlyArray<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = [
  {
    src: "/images/featured/featured-1-6db442.webp",
    alt: "The Times of India",
    width: 866,
    height: 157,
  },
  {
    src: "/images/featured/featured-2.webp",
    alt: "YourStory",
    width: 148,
    height: 138,
  },
  {
    src: "/images/featured/featured-3-b76b5c.webp",
    alt: "Condé Nast Traveller",
    width: 212,
    height: 106,
  },
  {
    src: "/images/featured/featured-4.webp",
    alt: "Livingetc",
    width: 164,
    height: 92,
  },
  {
    src: "/images/featured/featured-5.webp",
    alt: "The Voice of Fashion",
    width: 300,
    height: 170,
  },
  {
    src: "/images/featured/featured-6.webp",
    alt: "GQ",
    width: 474,
    height: 250,
  },
  {
    src: "/images/featured/featured-7-55244c.webp",
    alt: "Lifestyle Asia",
    width: 173,
    height: 108,
  },
  {
    src: "/images/featured/featured-8.webp",
    alt: "Vogue",
    width: 1536,
    height: 441,
  },
  {
    src: "/images/featured/featured-9.webp",
    alt: "Forbes Under 30 Asia 2022",
    width: 1080,
    height: 1080,
  },
];

export function Featured() {
  return (
    <section className="bg-cream-200 w-full">
      <div className="mx-auto flex w-full max-w-[var(--container-max)] flex-col items-center gap-12 px-2 py-8 lg:px-[38px]">
        <div className="flex max-w-[785px] flex-col items-center gap-1 text-center">
          <h2 className="text-brand-dark font-sans text-3xl font-bold [text-shadow:0px_4px_36.2px_rgba(18,90,140,0.15)] lg:text-[40px]">
            Featured
          </h2>
          <p className="text-muted-2 font-sans text-lg leading-[1.5] lg:text-xl">
            Recognized and celebrated by leading publications &ndash; Amrutam in
            the spotlight!
          </p>
        </div>

        <ul className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-6 lg:flex-nowrap lg:justify-between lg:gap-x-1">
          {LOGOS.map((logo) => (
            <li
              key={logo.src}
              className="flex h-24 w-[28%] max-w-[148px] shrink-0 items-center justify-center sm:w-[18%] lg:w-auto lg:flex-1"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-16 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
