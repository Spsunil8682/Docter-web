import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Featured } from "@/components/sections/Featured";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <Featured />
        <WhyChooseUs />
      </main>
    </>
  );
}
