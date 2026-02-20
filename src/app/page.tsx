import { Hero } from "@/components/home/Hero";
import { PainMap } from "@/components/home/PainMap";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PainMap />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
