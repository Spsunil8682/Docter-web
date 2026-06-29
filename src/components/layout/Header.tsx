import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import type { NavLink } from "@/types";

const NAV_LINKS: readonly NavLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Onboarding", href: "#onboarding" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Header() {
  return (
    <header className="bg-cream-50 sticky top-0 z-50 w-full shadow-[0px_12px_25px_0px_rgba(0,0,0,0.04),0px_104px_62px_0px_rgba(0,0,0,0.02)]">
      <Container className="flex min-h-[88px] flex-col items-center justify-center gap-4 py-3 lg:min-h-[112px] lg:gap-7">
        <Link href="/" aria-label="Amrutam — home" className="shrink-0">
          <Image
            src="/images/logo-amrutam.webp"
            alt="Amrutam"
            width={208}
            height={40}
            priority
            sizes="208px"
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-nav text-nav hover:text-brand focus-visible:text-brand text-base transition-colors focus-visible:outline-none lg:text-xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
