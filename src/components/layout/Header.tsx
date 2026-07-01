import Image from "next/image";
import Link from "next/link";
import type { NavLink } from "@/types";

const NAV_LINKS: readonly NavLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Onboarding", href: "#onboarding" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Header() {
  return (
    <header className="bg-cream-50 w-full shadow-[0px_12px_25px_0px_rgba(0,0,0,0.04),0px_104px_62px_0px_rgba(0,0,0,0.02)]">
      <div className="mx-auto flex min-h-[88px] w-full max-w-[var(--container-max)] flex-col items-center justify-center gap-4 px-5 py-3 sm:px-8 lg:min-h-[112px] lg:gap-7 lg:px-0">
        <Link href="/" aria-label="Amrutam — home" className="shrink-0">
          <Image
            src="/images/logo-amrutam.webp"
            alt="Amrutam"
            width={208}
            height={37}
            priority
            sizes="208px"
            className="h-8 w-auto lg:h-[37px]"
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
      </div>
    </header>
  );
}
