'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect, memo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Heart, ChevronDown, Stethoscope, BookOpen, Building2, Share2 } from "lucide-react";
import Image from 'next/image';
import logoFullColor from "@/assets/logo-full-color.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MobileNav } from "@/components/shared/MobileNav";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent flash on mount
  useEffect(() => {
    setIsReady(true);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (sectionTitle: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    
    // Set a quick delay before opening
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(sectionTitle);
    }, 150);
  };

  const handleMouseLeave = () => {
    // Clear any pending open timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    
    // Delay before closing to prevent accidental closes
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      const servicesSection = document.getElementById("services");
      servicesSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#services";
    }
  };

  const navigationSections = [
    {
      title: "Services",
      icon: Stethoscope,
      description: "Comprehensive ABA therapy services tailored to your child's needs.",
      mainHref: "/#services",
      links: [
        { label: "Center-Based ABA Therapy", href: "/center-based-therapy", description: "Structured therapy in our specialized center." },
        { label: "In-Home ABA Therapy", href: "/in-home-therapy", description: "Personalized therapy at home." },
        { label: "EIDBI", href: "/eidbi", description: "Early Intensive Developmental & Behavioral Intervention." },
      ],
    },
    {
      title: "Resources",
      icon: BookOpen,
      description: "Tools and information to support your therapy journey.",
      mainHref: "/blog",
      links: [
        { label: "Blog", href: "/blog", description: "Latest insights from our team." },
        { label: "FAQs", href: "/faq", description: "Answers to common questions." },
        { label: "Intake Process", href: "/intake-process", description: "Guide to getting started." },
      ],
    },
    {
      title: "Company",
      icon: Building2,
      description: "Learn more about our mission and team.",
      mainHref: "/about",
      links: [
        { label: "About Us", href: "/about", description: "Our story and commitment." },
        { label: "Careers", href: "/careers", description: "Join our dedicated team." },
        { label: "Referrals", href: "/referrals", description: "Refer a family today." },
        { label: "Contact Us", href: "/contact", description: "Get in touch with us." },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/40 transition-opacity duration-300 ${
        isReady ? 'opacity-100' : 'opacity-0'
      } ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={handleLogoClick}>
            <Image 
              src={logoFullColor} 
              alt="Ability Avenues" 
              className="h-14 md:h-16 lg:h-20 w-auto"
              width={200}
              height={80}
              priority
            />
          </Link>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-2">
            {navigationSections.map((section) => {
              const IconComponent = section.icon;
              const isOpen = openDropdown === section.title;
              return (
                <Popover 
                  key={section.title}
                  open={isOpen}
                  onOpenChange={(open) => setOpenDropdown(open ? section.title : null)}
                >
                  <PopoverTrigger 
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                    onMouseEnter={() => handleMouseEnter(section.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {section.title}
                    <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
                  </PopoverTrigger>
                  <PopoverContent 
                    className="w-[600px] p-0 bg-white border-gray-200 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                    align="center"
                    sideOffset={8}
                    onMouseEnter={() => handleMouseEnter(section.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid gap-0.5 lg:grid-cols-[.75fr_1fr]">
                      {/* Left Panel - Featured Section */}
                      <div
                        className="row-span-3 flex flex-col justify-end rounded-l-md bg-gradient-to-b from-gray-50 to-gray-100 p-6"
                      >
                        <IconComponent className="h-8 w-8 mb-4 text-primary" />
                        <div className="mb-2 text-lg font-medium">
                          {section.title}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {section.description}
                        </p>
                      </div>

                      {/* Right Panel - Navigation Links */}
                      <div className="flex flex-col justify-center py-4 px-2 space-y-1">
                        {section.links.map((link) => (
                          <div key={link.label}>
                            <Link
                              href={link.href as any}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                            >
                              <div className="text-lg font-medium leading-none">{link.label}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {link.description}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <MobileNav 
              navigationSections={navigationSections}
              handleServicesClick={handleServicesClick}
            />
          </div>

          {/* Right Side Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9529002344"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium hidden sm:inline">(952) 900-2344</span>
            </a>
            <Link href="/referrals">
              <Button variant="default" size="default" className="bg-xanthous hover:bg-xanthous/90 text-white">
                <Share2 className="w-5 h-5 mr-2" />
                Referrals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
