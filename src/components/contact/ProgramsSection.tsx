'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, Building2, Users, School } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Program } from '@/lib/locations';

interface ProgramsSectionProps {
  programs: Program[];
  cityName: string;
}

const iconMap = {
  'In-Home ABA Therapy': Home,
  'Center-Based ABA Therapy': Building2,
  'Caregiver Coaching': Users,
  'School Collaboration': School,
};

const accentStyles = [
  { color: 'pacific-cyan' },
  { color: 'yellow-green' },
  { color: 'primary' },
  { color: 'xanthous' },
];

const ProgramsSection = ({ programs, cityName }: ProgramsSectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 via-white to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16 max-w-3xl mx-auto text-center"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Programs
          </span>
          <h2 className="mt-4 mb-6 text-3xl md:text-4xl font-bold text-raisin-black">
            ABA Therapy Programs in <span className="text-pacific-cyan">{cityName}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer flexible, evidence-based ABA therapy options tailored to your child's needs and your family's lifestyle in {cityName}.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 max-w-6xl mx-auto">
          {programs.map((program, index) => {
            const IconComponent = iconMap[program.title as keyof typeof iconMap] || Home;
            const accent = accentStyles[index % accentStyles.length];
            const color = `hsl(var(--${accent.color}))`;
            const colorSoft = `hsl(var(--${accent.color}) / 0.08)`;
            const colorBorder = `hsl(var(--${accent.color}) / 0.25)`;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card
                  className={cn(
                    'group flex h-full flex-col rounded-3xl border-2 border-transparent bg-white p-8 transition-all duration-300 hover-lift hover:shadow-lg',
                    'hover:border-primary/20'
                  )}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:shadow-md"
                      style={{ backgroundColor: colorSoft }}
                    >
                      <IconComponent
                        className="h-7 w-7 transition-colors duration-300"
                        style={{ color }}
                      />
                    </div>
                  </div>

                  {/* Title & Age Range */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-raisin-black md:text-3xl">
                      {program.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className="px-4 py-1 text-xs font-semibold uppercase tracking-wide border-2"
                      style={{
                        borderColor: colorBorder,
                        backgroundColor: colorSoft,
                        color,
                      }}
                    >
                      {program.ageRange || 'All Ages'}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-6 space-y-3">
                    {program.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                      >
                        <span
                          className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full transition-colors duration-300"
                          style={{ backgroundColor: color }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

