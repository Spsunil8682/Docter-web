import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Featured } from "@/components/sections/Featured";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Onboarding } from "@/components/sections/Onboarding";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { AppDownload } from "@/components/sections/AppDownload";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <Featured />
        <WhyChooseUs />
        <Onboarding />
        <Testimonials />
        <FAQ />
        <AppDownload />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
