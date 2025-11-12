// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import insuranceHpIcon from "@/assets/insurance-hp-icon.svg";
import insuranceUcIcon from "@/assets/insurance-uc-icon.svg";
import insuranceMedIcon from "@/assets/insurance-med-icon.svg";
import insuranceUhcIcon from "@/assets/insurance-uhc-icon.svg";
import insuranceBcbsIcon from "@/assets/insurance-bcbs-icon.svg";
import insuranceDhsIcon from "@/assets/insurance-dhs-icon.svg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
  wrapperClassName?: string;
  itemClassName?: string;
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
      description: "HealthPartners",
      image: insuranceHpIcon,
      className: "h-10 w-auto",
      wrapperClassName: "ml-12 mr-8",
      itemClassName: "",
    },
    {
      id: "logo-2",
      description: "UCare",
      image: insuranceUcIcon,
      className: "h-5 w-auto",
      wrapperClassName: "mx-8",
      itemClassName: "",
    },
    {
      id: "logo-3",
      description: "Medica",
      image: insuranceMedIcon,
      className: "h-5 w-auto",
      wrapperClassName: "mx-8",
      itemClassName: "",
    },
    {
      id: "logo-4",
      description: "UnitedHealthcare",
      image: insuranceUhcIcon,
      className: "h-10 w-auto",
      wrapperClassName: "mx-8",
      itemClassName: "",
    },
    {
      id: "logo-5",
      description: "Blue Cross Blue Shield",
      image: insuranceBcbsIcon,
      className: "h-12 w-auto",
      wrapperClassName: "mx-8",
      itemClassName: "",
    },
    {
      id: "logo-6",
      description: "Minnesota Department of Human Services",
      image: insuranceDhsIcon,
      className: "h-10 w-auto",
      wrapperClassName: "ml-8 mr-16",
      itemClassName: "lg:basis-1/7 xl:basis-1/8",
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
                  className={cn(
                    "flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6",
                    logo.itemClassName,
                  )}
                >
                  <div
                    className={cn(
                      "mx-8 flex shrink-0 items-center justify-center",
                      logo.wrapperClassName,
                    )}
                  >
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

