'use client';

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  { time: "8:30 AM", activity: "Arrival & Greeting" },
  { time: "9:00 AM", activity: "Small group learning and playing" },
  { time: "9:45 AM", activity: "Circle time activity" },
  { time: "10:15 AM", activity: "Snack and hygiene" },
  { time: "10:30 AM", activity: "1:1 focused learning" },
  { time: "12:00 PM", activity: "Playground activity (indoor & outdoor)" },
  { time: "12:45 PM", activity: "Lunch" },
  { time: "1:15 PM", activity: "Independent play & quiet time" },
  { time: "2:00 PM", activity: "1:1 focused learning" },
  { time: "3:30 PM", activity: "Small group learning and playing" },
  { time: "4:30 PM", activity: "Wrap-up & Family Communication" },
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-xanthous/10 mb-6">
              <Clock className="w-8 h-8 text-xanthous" />
            </div>
            <h2 className="mb-6 text-raisin-black">
              Our Daily Schedule
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              A typical day in our Center-Based ABA Program is structured to provide a balance of group activities, 
              individualized learning, and play-based development.
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
                className={`grid grid-cols-[140px_1fr] gap-6 p-6 ${
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

export default DailyScheduleSection;
