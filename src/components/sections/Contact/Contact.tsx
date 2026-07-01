import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  className?: string;
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
  multiline,
  className,
}: FieldProps) {
  const controlClass =
    "w-full border-b-2 border-[#C2C2C2] bg-transparent pb-2 font-sans text-lg font-medium leading-[1.75] text-[#7E7E7E] placeholder:text-[#7E7E7E] outline-none transition-colors focus:border-brand lg:text-xl";

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="text-brand font-sans text-sm leading-[1.75]"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={2}
          placeholder={placeholder}
          required={required}
          className={cn(controlClass, "resize-none")}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={controlClass}
        />
      )}
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-cream-50 w-full py-8 lg:py-20">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex max-w-[785px] flex-col items-center gap-3 text-center">
          <h2
            className="text-brand-dark font-sans text-3xl font-bold lg:text-[40px]"
            style={{ textShadow: "0px 4px 36.2px rgba(18, 90, 140, 0.15)" }}
          >
            Let&rsquo;s Connect
          </h2>
          <p className="text-muted-2 font-sans text-base leading-[1.5] lg:text-xl">
            We&rsquo;re here to help you on your wellness journey. Reach out to us
            for any questions, product inquiries, or personalized advice.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row">
          <div className="relative h-[260px] w-full overflow-hidden rounded-lg sm:h-[360px] lg:h-[471px] lg:w-[498px] lg:shrink-0">
            <Image
              src="/images/contact/contact-photo.webp"
              alt="Ayurvedic practitioner ready to connect with patients"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 498px, 100vw"
            />
          </div>

          <form
            className="flex flex-1 flex-col gap-6 rounded-lg border border-[#C2C2C2] bg-cream-50 p-6 lg:min-h-[471px] lg:justify-center lg:px-9 lg:py-[33px]"
            noValidate
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <Field
                id="name"
                label="Your Name"
                placeholder="Vikas Kumar"
                required
              />
              <Field
                id="contact"
                label="Your Contact Number"
                type="tel"
                placeholder="8743414476"
                required
              />
            </div>

            <Field
              id="email"
              label="Your Email"
              type="email"
              placeholder="vikass@gmail.com"
              required
            />

            <Field
              id="message"
              label="Message (Optional)"
              placeholder="I want to On-board as a Doctor"
              multiline
            />

            <button
              type="submit"
              className="mt-2 inline-flex h-14 w-full items-center justify-center rounded-lg bg-[#315918] font-sans text-xl font-bold text-white transition-opacity hover:opacity-90 sm:w-[236px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
