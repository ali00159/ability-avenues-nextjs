'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Heart, Target } from 'lucide-react';
import Image from 'next/image';
import blueHeartIcon from '@/assets/blue-heart-icon.svg';
import yellowBulbIcon from '@/assets/yellow-bulb-icon.svg';
import greenFamilyIcon from '@/assets/green-family-icon.svg';
import blueHouseIcon from '@/assets/blue-house-icon.svg';
import greenParkIcon from '@/assets/green-park-icon.svg';

const approaches = [
  {
    icon: blueHeartIcon,
    title: 'Parent Training & Support',
    points: [
      'Comprehensive parent training to implement ABA strategies',
      'Learn to reinforce positive behaviors throughout the day',
      'Manage challenging situations with confidence',
      'Support your child\'s development at home',
    ],
    bgColor: 'from-pacific-cyan/20 via-pacific-cyan/10 to-white',
    iconColor: 'pacific-cyan',
    borderColor: 'border-pacific-cyan/30',
    accentColor: 'pacific-cyan',
    isCustomIcon: true,
  },
  {
    icon: greenFamilyIcon,
    title: 'Sibling Participation',
    points: [
      'Siblings welcome to participate in therapy sessions',
      'Learn supportive play and interaction strategies',
      'Promotes family bonding and social skills',
      'Helps all children develop together',
    ],
    bgColor: 'from-yellow-green/25 via-yellow-green/15 to-white',
    iconColor: 'yellow-green',
    borderColor: 'border-yellow-green/40',
    accentColor: 'yellow-green',
    isCustomIcon: true,
  },
  {
    icon: yellowBulbIcon,
    title: 'Daily Living Skills',
    points: [
      'Focus on essential skills like toileting and eating',
      'Practice dressing and personal hygiene',
      'Use real materials and daily routines',
      'Natural environment skill development',
    ],
    bgColor: 'from-xanthous/20 via-xanthous/10 to-white',
    iconColor: 'xanthous',
    borderColor: 'border-xanthous/35',
    accentColor: 'xanthous',
    isCustomIcon: true,
  },
  {
    icon: greenParkIcon,
    title: 'Community Integration',
    points: [
      'Generalize skills to community settings',
      'Practice in parks, stores, and restaurants',
      'Build confidence in real-world situations',
      'Apply abilities beyond the home environment',
    ],
    bgColor: 'from-secondary/20 via-secondary/10 to-white',
    iconColor: 'secondary',
    borderColor: 'border-secondary/30',
    accentColor: 'secondary',
    isCustomIcon: true,
  },
  {
    icon: blueHouseIcon,
    title: 'Natural Environment Teaching',
    points: [
      'Learning through everyday activities',
      'Embed teaching in cooking and cleaning',
      'Seamless skill development in routines',
      'Play-based learning opportunities',
    ],
    bgColor: 'from-primary/20 via-primary/10 to-white',
    iconColor: 'primary',
    borderColor: 'border-primary/30',
    accentColor: 'primary',
    isCustomIcon: true,
  },
];

const InHomeTherapyApproach = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-cornsilk/40 via-white to-pacific-cyan/8 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our In-Home{' '}
            <span className="text-secondary">Therapy Approach</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our in-home ABA therapy approach focuses on family involvement, natural learning environments, 
            and practical skill development that integrates seamlessly into your daily routine.
          </p>
        </motion.div>

        {/* Services Bento Grid - 2 rows: first row 2 large cards, second row 3 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-8 max-w-7xl mx-auto">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon;
            const isCustomIcon = approach.isCustomIcon || false;
            
            // Determine grid positioning for bento layout
            let gridClasses = '';
            if (index < 2) {
              // First row: 2 large cards (each spans 3 columns)
              gridClasses = 'lg:col-span-3';
            } else {
              // Second row: 3 smaller cards (each spans 2 columns)
              gridClasses = 'lg:col-span-2';
            }
            
            return (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={gridClasses}
              >
                <Card
                  className={`p-8 h-full hover-lift hover:shadow-xl transition-all duration-300 border-2 ${approach.borderColor} hover:border-opacity-60 bg-gradient-to-br ${approach.bgColor} backdrop-blur-sm flex flex-col justify-between shadow-lg hover:shadow-2xl`}
                >
                  <div>
                    {/* Icon */}
                    <div className="mb-6">
                      {isCustomIcon ? (
                        <Image
                          src={IconComponent}
                          alt=""
                          className="w-20 h-20 object-contain"
                          width={80}
                          height={80}
                          aria-hidden="true"
                        />
                      ) : (
                        <IconComponent
                          className="w-20 h-20"
                          style={{ color: `hsl(var(--${approach.iconColor}))` }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
                      {approach.title}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {approach.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-${approach.accentColor} shadow-sm`}
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InHomeTherapyApproach;