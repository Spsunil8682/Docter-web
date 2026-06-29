import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
  fullBleed?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className,
  containerClassName,
  ariaLabel,
  fullBleed = false,
}: SectionWrapperProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={cn("w-full", className)}>
      {fullBleed ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
