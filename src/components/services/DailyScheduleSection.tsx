'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import compassIcon from "@/assets/compass.svg";

const schedule = [
  { time: "8:00 AM", activity: "Arrival and greeting time with morning routine setup" },
  { time: "8:30 AM", activity: "Small group learning activities with social skill focus" },
  { time: "9:15 AM", activity: "Circle time with songs stories and group participation" },
  { time: "9:45 AM", activity: "Snack time and hygiene routines with handwashing practice" },
  { time: "10:15 AM", activity: "Individualized one-on-one focused skill building sessions" },
  { time: "11:00 AM", activity: "Outdoor playground activities with gross motor skill practice" },
  { time: "12:00 PM", activity: "Lunch time with mealtime therapy and social eating" },
  { time: "12:30 PM", activity: "Independent play time for self-directed skill development" },
  { time: "1:15 PM", activity: "Individualized one-on-one focused skill building sessions" },
  { time: "2:00 PM", activity: "Small group learning activities with peer interaction focus" },
  { time: "2:45 PM", activity: "Circle time with songs stories and group participation" },
  { time: "3:30 PM", activity: "Outdoor playground activities with gross motor skill practice" },
  { time: "4:00 PM", activity: "Daily wrap-up session and parent communication time" },
];

const DailyScheduleSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              Our Daily Schedule
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              A typical day in our structured early intervention Center-Based ABA Program provides age-appropriate activities 
              with a balance of group learning, individualized therapy, and play-based development for children and teens ages 1-18.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border-2 border-cornsilk overflow-hidden shadow-sm"
          >
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`grid grid-cols-[120px_1fr] gap-4 p-6 ${
                  index % 2 === 0 ? "bg-cornsilk/20" : "bg-white"
                } ${index !== schedule.length - 1 ? "border-b border-cornsilk" : ""}`}
              >
                <div className="text-muted-foreground font-bold text-sm flex items-center justify-start text-left">
                  {item.time}
                </div>
                <div className="text-foreground font-normal flex items-center justify-start text-left">
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

export default DailyScheduleSection;
