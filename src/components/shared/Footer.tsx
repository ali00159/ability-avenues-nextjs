'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { memo } from "react";
import { Instagram, Linkedin, Mail, MapPin, Phone, Printer } from "lucide-react";
import Image from 'next/image';
import logoFullLight from "@/assets/logo-full-light.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleLinkClick = (href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Center-Based ABA Therapy", href: "/center-based-therapy", hasPage: true, type: "route" },
        { label: "In-Home ABA Therapy", href: "/in-home-therapy", hasPage: true, type: "route" },
        { label: "EIDBI", href: "/eidbi", hasPage: true, type: "route" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Intake Process", href: "/intake-process", hasPage: true, type: "route" },
        { label: "Blog", href: "/blog", hasPage: true, type: "route" },
        { label: "FAQs", href: "/faq", hasPage: true, type: "route" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about", hasPage: true, type: "route" },
        { label: "Careers", href: "/careers", hasPage: true, type: "route" },
        { label: "Referrals", href: "/referrals", hasPage: true, type: "route" },
        { label: "Contact Us", href: "/contact", hasPage: true, type: "route" },
      ],
    },
  ];

  return (
    <footer className="bg-raisin-black text-cornsilk">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" onClick={() => handleLinkClick('/')}>
              <Image 
                src={logoFullLight} 
                alt="Ability Avenues" 
                className="h-24 w-auto mb-6 cursor-pointer hover:opacity-80 transition-opacity"
                width={200}
                height={96}
              />
            </Link>
            <p className="text-cornsilk/80 mb-6 leading-relaxed">
              Empowering children with autism to reach their full potential through evidence-based ABA therapy and
              compassionate care.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ability_avenues"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/ability-avenues/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.hasPage ? (
                      <Link 
                        href={link.href as any} 
                        onClick={() => handleLinkClick(link.href)}
                        className="text-cornsilk/80 hover:text-xanthous transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-cornsilk/80">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-xanthous flex-shrink-0 mt-1" />
              <div>
                <div className="font-medium text-white mb-1">Location</div>
                <div className="text-sm text-cornsilk/80">
                  6385 Old Shady Oak Rd Suite 250
                  <br />
                  Eden Prairie, MN 55344
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-xanthous flex-shrink-0 mt-1" />
              <div>
                <div className="font-medium text-white mb-1">Phone</div>
                <a href="tel:9529002344" className="text-sm text-cornsilk/80 hover:text-xanthous transition-colors">
                  (952) 900-2344
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Printer className="w-5 h-5 text-xanthous flex-shrink-0 mt-1" />
              <div>
                <div className="font-medium text-white mb-1">Fax</div>
                <div className="text-sm text-cornsilk/80">(952) 443-8616</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-xanthous flex-shrink-0 mt-1" />
              <div>
                <div className="font-medium text-white mb-1">Email</div>
                <a
                  href="mailto:info@abilityavenues.com"
                  className="text-sm text-cornsilk/80 hover:text-xanthous transition-colors"
                >
                  info@abilityavenues.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-cornsilk/60">
          <div>© {currentYear} Ability Avenues. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="text-cornsilk/60">Privacy Policy</span>
            <span className="text-cornsilk/60">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
