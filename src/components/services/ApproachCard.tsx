'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ApproachCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  index: number;
}

const ApproachCard = ({
  icon: Icon,
  title,
  description,
  bgColor,
  borderColor,
  iconBgColor,
  iconColor,
  index,
}: ApproachCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, delay: index * 0.1 }}
    >
      <Card
        className={`p-8 h-full ${bgColor} border-2 ${borderColor} transition-all duration-300 hover:shadow-lg`}
      >
        <div className="flex flex-col items-start h-full">
          <div
            className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mb-6`}
          >
            <Icon className={`w-8 h-8 ${iconColor}`} />
          </div>
          <h3 className="text-xl font-bold text-raisin-black mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed flex-grow">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ApproachCard;

