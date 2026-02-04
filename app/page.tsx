import { Hero } from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import { Services } from "@/components/home/Services";
import { Features } from "@/components/home/Features";
import { Footer } from "@/components/home/footer/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Features />
      <Services />
      <Testimonial />
      <Footer />
    </main>
  );
}