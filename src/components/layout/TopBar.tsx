import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";

export function TopBar() {
  return (
    <div className="bg-ink sticky top-0 z-50 w-full">
      <Container className="relative flex flex-col items-center justify-center gap-3 py-3 text-center lg:min-h-[67px] lg:flex-row lg:gap-0 lg:py-0">
        <p className="font-sans text-base font-medium text-[#d9d9d9] lg:text-xl">
          Register Yourself As An Amrutam Doctor
        </p>

        <Button
          href="#join"
          size="md"
          className="bg-brand hover:bg-brand-dark rounded-2xl text-white lg:absolute lg:right-[100px] lg:h-[51px] lg:w-[355px]"
        >
          <Image
            src="/icons/doctor.svg"
            alt=""
            width={21}
            height={20}
            aria-hidden
          />
          Join Now
        </Button>
      </Container>
    </div>
  );
}
