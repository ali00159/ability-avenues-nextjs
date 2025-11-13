"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Logo {
  name: string;
  id: number;
  image: StaticImageData;
}

interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentTime: number;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  if (columnCount <= 0) return [];

  const shuffled = shuffleArray(allLogos);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount]?.push(logo);
  });

  const maxLength = Math.max(0, ...columns.map((col) => col.length));

  columns.forEach((col) => {
    while (col.length < maxLength && shuffled.length > 0) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]!);
    }
  });

  return columns;
};

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    if (logos.length === 0) {
      return null;
    }

    const cycleInterval = 2000;
    const columnDelay = index * 200;
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length);
    const currentIndex = Math.floor(adjustedTime / cycleInterval);

    const currentLogo = useMemo(
      () => logos[currentIndex % logos.length]!,
      [logos, currentIndex],
    );

    return (
      <motion.div
        className="relative h-24 w-32 overflow-hidden rounded-xl border border-muted/30 bg-white/70 p-4 shadow-sm backdrop-blur-md md:h-36 md:w-48 md:p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLogo.id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <div className="relative h-20 w-20 max-h-[85%] max-w-[85%] md:h-32 md:w-32">
              <Image
                src={currentLogo.image}
                alt={currentLogo.name}
                fill
                sizes="(max-width: 768px) 5rem, (max-width: 1024px) 7rem, 8rem"
                className="h-full w-full object-contain"
                priority={index === 0}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  },
);

LogoColumn.displayName = "LogoColumn";

interface LogoCarouselProps {
  columnCount?: number;
  logos: Logo[];
  className?: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({
  columnCount = 2,
  logos,
  className,
}) => {
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [currentTime, setCurrentTime] = useState(0);

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(updateTime, 100);
    return () => window.clearInterval(intervalId);
  }, [updateTime]);

  useEffect(() => {
    if (logos.length === 0) {
      setLogoSets([]);
      return;
    }

    const distributedLogos = distributeLogos(logos, columnCount);
    setLogoSets(distributedLogos);
  }, [logos, columnCount]);

  if (logos.length === 0) {
    return null;
  }

  return (
    <div className={["flex flex-wrap justify-center gap-8 md:gap-12", className].filter(Boolean).join(" ")}>
      {logoSets.map((column, index) => (
        <LogoColumn
          key={`logo-column-${index}`}
          logos={column}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
};

export type { Logo };
export { LogoCarousel };


