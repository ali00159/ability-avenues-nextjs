'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AboutStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const numbers = statsRef.current.querySelectorAll('[data-stat-number]');

    gsap.fromTo(
      numbers,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      }
    );
  }, []);

  const stats = [
    {
      number: '2024',
      label: 'Year Established',
    },
    {
      number: '100+',
      label: 'Families Served',
    },
    {
      number: '15+',
      label: 'Dedicated Team Members',
    },
    {
      number: '3',
      label: 'Locations Across Minneapolis',
    },
  ];

  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                data-stat-number
                className="font-bold mb-3"
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: 800,
                  color: '#1F2937',
                  lineHeight: 1.2,
                }}
              >
                {stat.number}
              </div>
              <div
                className="text-lg"
                style={{
                  color: '#4B5563',
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;

