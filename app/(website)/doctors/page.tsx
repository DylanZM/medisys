import { DoctorHero } from "./_components/DoctorHero";
import { DoctorList } from "./_components/DoctorList";
import { Footer } from "@/components/home/footer/Footer";

export default function DoctorsPage() {
  return (
    <main className="bg-white">
      <DoctorHero />
      <DoctorList />
      <Footer />
    </main>
  );
}
