import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  credential: string;
  quote: string;
  rating: number;
  featured?: boolean;
}

const AVATAR = "/images/testimonials/avatar.webp";

const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Dr. Pooja Deshmukh",
    credential: "BAMS",
    rating: 4,
    quote:
      "“Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.”",
  },
  {
    name: "Dr. Rajesh Iyer",
    credential: "Ayurvedic Practitioner",
    rating: 4,
    featured: true,
    quote:
      "“Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.”",
  },
  {
    name: "Dr. Ananya Sharma",
    credential: "BAMS",
    rating: 4,
    quote:
      "“As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I’ve personally seen positive results in my patients using their products.”",
  },
];

function Star({ filled, size }: { filled: boolean; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "#FFB800" : "#BBBBBB"}
      aria-hidden
      className="shrink-0"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.785 1.401 8.169L12 18.896l-7.335 3.868 1.401-8.169L.132 9.21l8.2-1.192z" />
    </svg>
  );
}

function Stars({ rating, size }: { rating: number; size: number }) {
  return (
    <div
      className="flex items-center gap-1.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < rating} size={size} />
      ))}
    </div>
  );
}

function TestimonialCard({ name, credential, quote, rating, featured }: Testimonial) {
  return (
    <figure
      className={cn(
        "bg-amber-50 flex w-full flex-col rounded-lg",
        featured
          ? "px-6 pt-8 pb-9 lg:w-[480px] lg:min-h-[283px]"
          : "px-6 pt-5 pb-5 lg:w-[347px] lg:min-h-[190px]",
      )}
    >
      <figcaption className="flex items-center gap-3 self-start">
        <Image
          src={AVATAR}
          alt={`Portrait of ${name}`}
          width={featured ? 68 : 44}
          height={featured ? 68 : 44}
          className={cn(
            "shrink-0 rounded-full object-cover",
            featured ? "h-[68px] w-[68px]" : "h-11 w-11",
          )}
        />
        <div className="flex flex-col gap-1">
          <p
            className={cn(
              "font-sans leading-[1.5] text-[#333333]",
              featured ? "text-lg font-semibold" : "text-sm font-semibold",
            )}
          >
            {name},{" "}
            <span className="text-muted font-normal">{credential}</span>
          </p>
          <Stars rating={rating} size={featured ? 17 : 11} />
        </div>
      </figcaption>

      <blockquote
        className={cn(
          "mt-4 font-sans leading-[1.5] text-[#7E7E7E]",
          featured ? "text-base" : "text-xs",
        )}
      >
        {quote}
      </blockquote>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-50 w-full py-8">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2
            className="text-brand-dark max-w-[808px] font-sans text-3xl font-bold lg:text-[40px]"
            style={{ textShadow: "0px 4px 36.2px rgba(18, 90, 140, 0.15)" }}
          >
            What other Ayurvedic Doctors are Saying
          </h2>
          <p className="text-muted-2 font-sans text-base leading-[1.5] lg:text-xl">
            Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
