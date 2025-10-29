'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import compassIcon from "@/assets/compass.svg";

const schedule = [
  { time: "8:00 AM", activity: "Arrival routines and greeting time for the day" },
  { time: "8:30 AM", activity: "Breakfast therapy with feeding and mealtime practice" },
  { time: "9:15 AM", activity: "Communication skills development with speech and language" },
  { time: "9:45 AM", activity: "Play-based learning activities with sensory integration focus" },
  { time: "10:15 AM", activity: "Individualized one-on-one focused skill building sessions" },
  { time: "11:00 AM", activity: "Home and daily living skills training practice" },
  { time: "12:00 PM", activity: "Lunch preparation with hands-on cooking and safety" },
  { time: "12:30 PM", activity: "Family mealtime therapy with social eating skills" },
  { time: "1:15 PM", activity: "Individualized one-on-one focused skill building sessions" },
  { time: "2:00 PM", activity: "Social skills practice with peer interaction activities" },
  { time: "2:45 PM", activity: "Independent play time for self-directed skill practice" },
  { time: "3:30 PM", activity: "Community outings for real-world application and generalization" },
  { time: "4:00 PM", activity: "Daily wrap-up session and parent communication time" },
];

const InHomeScheduleSection = () => {
  
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
              In-Home Therapy Schedule
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Our in-home ABA therapy follows a structured 8am-4pm schedule with 20-40 hours per week of personalized support. 
              Sessions are designed around your family's routine and home environment for natural learning opportunities.
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

export default InHomeScheduleSection;
