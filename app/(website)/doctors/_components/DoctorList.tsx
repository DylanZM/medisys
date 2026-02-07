import { doctors } from "@/data/doctors";
import { DoctorCard } from "./DoctorCard";

export const DoctorList = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};
