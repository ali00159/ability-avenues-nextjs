'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import compassIcon from "@/assets/compass.svg";

const schedule = [
  { time: "Morning Sessions", activity: "8:00 AM - 12:00 PM: Early morning therapy focusing on daily living skills and communication" },
  { time: "Afternoon Sessions", activity: "1:00 PM - 5:00 PM: Afternoon therapy with play-based learning and social skills development" },
  { time: "Evening Sessions", activity: "5:00 PM - 8:00 PM: Evening therapy to accommodate family schedules and routines" },
  { time: "Weekend Options", activity: "Saturday & Sunday: Flexible weekend sessions for families who prefer weekday flexibility" },
  { time: "Community Outings", activity: "As needed: Therapy sessions in community settings for skill generalization" },
  { time: "Family Training", activity: "Regular: Parent and caregiver training sessions to support ongoing development" },
];

const InHomeScheduleSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <Image 
                src={compassIcon} 
                alt="Compass" 
                className="w-32 h-32"
                width={128}
                height={128}
              />
            </div>
            <h2 className="mb-6 text-raisin-black">
              Flexible In-Home Therapy Schedule
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Our in-home ABA therapy adapts to your family's routine with 20-40 hours per week of personalized support. 
              Sessions are scheduled based on your preferences—mornings, afternoons, or evenings—to fit your family's unique needs and schedule.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="bg-white rounded-2xl border-2 border-cornsilk overflow-hidden shadow-sm"
          >
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: index * 0.1 }}
                className={`grid grid-cols-[200px_1fr] gap-6 p-6 ${
                  index % 2 === 0 ? "bg-cornsilk/20" : "bg-white"
                } ${index !== schedule.length - 1 ? "border-b border-cornsilk" : ""}`}
              >
                <div className="text-muted-foreground font-light text-sm flex items-center">
                  {item.time}
                </div>
                <div className="text-foreground font-normal flex items-center">
                  {item.activity}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InHomeScheduleSection;
