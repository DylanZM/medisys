"use client";

import { motion, Variants } from "framer-motion";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "./DoctorCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const DoctorList = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doctor) => (
            <motion.div key={doctor.id} variants={itemVariants}>
              <DoctorCard doctor={doctor} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
