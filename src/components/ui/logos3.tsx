// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Accepted Insurance Providers",
  logos = [
    {
      id: "logo-1",
      description: "Blue Cross Blue Shield",
      image: "/shield-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-2",
      description: "Medica",
      image: "/shield-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-3",
      description: "HealthPartners",
      image: "/shield-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-4",
      description: "Ucare",
      image: "/shield-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-5",
      description: "Humana",
      image: "/shield-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-6",
      description: "UnitedHealthcare",
      image: "/shield-icon.svg",
      className: "h-12 w-auto",
    },
  ],
}: Logos3Props) => {
  // Duplicate logos for smoother infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="py-8 px-4">
      <div className="flex flex-col items-center text-center mb-6">
        <h2 className="text-2xl font-bold text-pretty lg:text-3xl">
          {heading}
        </h2>
      </div>
      <div className="pt-6 md:pt-10">
        <div className="relative overflow-hidden">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: false,
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {duplicatedLogos.map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-${index}`}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center">
                    <div>
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Gradient fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export { Logos3 };

