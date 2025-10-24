'use client';

import Link from 'next/link';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  navigationSections: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
      isScroll?: boolean;
    }>;
  }>;
  handleServicesClick: (e: React.MouseEvent) => void;
}

export const MobileNav = ({ navigationSections, handleServicesClick }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleClose = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  return (
    <div className="lg:hidden">
      {/* Menu Toggle Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed left-0 right-0 bg-white border-b shadow-lg transition-all duration-300 ease-in-out overflow-y-auto",
          isOpen 
            ? "top-20 max-h-[calc(100vh-5rem)] opacity-100" 
            : "top-20 max-h-0 opacity-0 pointer-events-none"
        )}
        style={{ zIndex: 40 }}
      >
        <nav className="px-6 py-8 space-y-1">
          {navigationSections.map((section) => (
            <Collapsible
              key={section.title}
              open={openSection === section.title}
              onOpenChange={(open) => setOpenSection(open ? section.title : null)}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full py-6 text-xl font-semibold text-foreground hover:text-primary transition-colors">
                {section.title}
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    openSection === section.title && "rotate-180"
                  )} 
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-0 pb-2">
                {section.links.map((link) => (
                  <div key={link.label}>
                    {link.isScroll ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          handleServicesClick(e);
                          handleClose();
                        }}
                        className="block py-3 px-4 text-base text-foreground/80 hover:text-foreground hover:bg-gray-50 transition-colors rounded-md"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href as any}
                        onClick={handleClose}
                        className="block py-3 px-4 text-base text-foreground/80 hover:text-foreground hover:bg-gray-50 transition-colors rounded-md"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}

          {/* Mobile Contact Section */}
          <div className="pt-8 space-y-6">
            <a
              href="tel:9529002344"
              className="flex items-center justify-center gap-2 py-4 text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(952) 900-2344</span>
            </a>
            <Link href="/contact" onClick={handleClose}>
              <Button 
                size="lg" 
                className="group w-full bg-[hsl(var(--yellow-green))] hover:bg-[hsl(79,98%,45%)] text-[hsl(var(--raisin-black))] font-semibold shadow-lg justify-center border-0"
              >
                <span className="whitespace-nowrap">Contact Us</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
