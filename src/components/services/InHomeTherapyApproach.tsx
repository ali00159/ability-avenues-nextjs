'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Heart, Target, Users, MapPin, Home } from 'lucide-react';

const approaches = [
  {
    icon: Heart,
    title: 'Parent Training & Support',
    points: [
      'Comprehensive parent training to implement ABA strategies',
      'Learn to reinforce positive behaviors throughout the day',
      'Manage challenging situations with confidence',
      'Support your child\'s development at home',
    ],
    bgColor: 'from-pacific-cyan/10 to-pacific-cyan/5',
    iconColor: 'pacific-cyan',
  },
  {
    icon: Users,
    title: 'Sibling Participation',
    points: [
      'Siblings welcome to participate in therapy sessions',
      'Learn supportive play and interaction strategies',
      'Promotes family bonding and social skills',
      'Helps all children develop together',
    ],
    bgColor: 'from-yellow-green/10 to-yellow-green/5',
    iconColor: 'yellow-green',
  },
  {
    icon: Target,
    title: 'Daily Living Skills',
    points: [
      'Focus on essential skills like toileting and eating',
      'Practice dressing and personal hygiene',
      'Use real materials and daily routines',
      'Natural environment skill development',
    ],
    bgColor: 'from-xanthous/10 to-xanthous/5',
    iconColor: 'xanthous',
  },
  {
    icon: MapPin,
    title: 'Community Integration',
    points: [
      'Generalize skills to community settings',
      'Practice in parks, stores, and restaurants',
      'Build confidence in real-world situations',
      'Apply abilities beyond the home environment',
    ],
    bgColor: 'from-secondary/10 to-secondary/5',
    iconColor: 'secondary',
  },
  {
    icon: Home,
    title: 'Natural Environment Teaching',
    points: [
      'Learning through everyday activities',
      'Embed teaching in cooking and cleaning',
      'Seamless skill development in routines',
      'Play-based learning opportunities',
    ],
    bgColor: 'from-primary/10 to-primary/5',
    iconColor: 'primary',
  },
];

const InHomeTherapyApproach = () => {
  return (
    <section className="py-24 bg-pacific-cyan/5 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
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
                transition={{ duration: 0.85, delay: index * 0.1 }}
                className={gridClasses}
              >
                <Card
                  className={`p-8 h-full hover-lift hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-gradient-to-br ${approach.bgColor} backdrop-blur-sm flex flex-col justify-between`}
                >
                  <div>
                    {/* Icon */}
                    <motion.div
                      className="mb-6 inline-flex rounded-2xl p-4 bg-white shadow-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent
                        className="w-12 h-12"
                        style={{ color: `hsl(var(--${approach.iconColor}))` }}
                        aria-hidden="true"
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
                      {approach.title}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {approach.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: `hsl(var(--${approach.iconColor}))` }}
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