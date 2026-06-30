import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

interface FooterLink {
  label: string;
  href: string;
}

const INFORMATION_LINKS: readonly FooterLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Privacy Policy for Mobile App", href: "#" },
  { label: "Shipping and Return Policy", href: "#" },
  { label: "International Delivery", href: "#" },
  { label: "For Business, Hotels and Resorts", href: "#" },
];

const linkClass =
  "text-muted-2 font-sans text-lg font-medium leading-[1.31] transition-colors hover:text-brand lg:text-xl";
const titleClass =
  "text-brand-dark font-sans text-2xl font-semibold leading-[1.31] lg:text-[28px]";

export function Footer() {
  return (
    <footer className="bg-footer w-full">
      <Container className="flex flex-col gap-12 pt-12 pb-12 lg:flex-row lg:justify-between lg:gap-8 lg:pt-[76px] lg:pb-16">
        {/* Get in touch */}
        <div className="flex flex-col">
          <Image
            src="/images/logo-amrutam.webp"
            alt="Amrutam"
            width={210}
            height={47}
            className="h-auto w-[180px] lg:w-[210px]"
          />
          <h2 className={`${titleClass} mt-10`}>Get in touch</h2>
          <div className="mt-6 flex max-w-[371px] flex-col gap-4">
            <a
              href="mailto:support@amrutam.global"
              className={linkClass}
            >
              support@amrutam.global
            </a>
            <address className="text-muted-2 font-sans text-lg font-medium leading-[1.31] not-italic lg:text-xl">
              Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
              Lashkar, Gwalior - 474001
            </address>
            <a href="tel:+919713171999" className={linkClass}>
              +91 9713171999
            </a>
          </div>
        </div>

        {/* Information */}
        <nav aria-label="Information" className="flex flex-col">
          <h2 className={titleClass}>Information</h2>
          <ul className="mt-6 flex flex-col gap-3">
            {INFORMATION_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Follow Us */}
        <div className="flex flex-col">
          <h2 className={titleClass}>Follow Us</h2>
          <Image
            src="/images/footer/social-icons.svg"
            alt="Follow Amrutam on social media"
            width={296}
            height={36}
            className="mt-7 h-9 w-auto"
          />
        </div>
      </Container>

      <div className="bg-brand-dark h-4 w-full" />
    </footer>
  );
}
