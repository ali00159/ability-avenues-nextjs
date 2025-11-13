'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Navigation, Clock, Map } from "lucide-react";
import Link from 'next/link';
import type { Route } from 'next';
import { locations } from '@/lib/locations';

const MinneapolisLocation = () => {
  // Generate service areas from centralized locations data
  const serviceAreas: { name: string; slug: string; href: Route }[] = locations.map(({ name, slug }) => ({
    name,
    slug,
    href: (slug === 'minneapolis' ? '/contact' : `/contact/${slug}`) as Route
  }));

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-raisin-black">Serving Minneapolis & </span>
              <span className="text-secondary">Surrounding Areas</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our autism center in Minneapolis welcomes families from across the Twin Cities metro area for evidence-based ABA therapy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-white border-2 border-gray-100">
                <div className="w-16 h-16 bg-pacific-cyan/10 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-pacific-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-raisin-black mb-4">Service Areas</h3>
                <p className="text-muted-foreground mb-6">
                  We proudly serve families from the following Twin Cities metro communities:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map(({ name, href, slug }) => (
                    <div key={slug} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pacific-cyan rounded-full" />
                      {href ? (
                        <Link
                          href={href}
                          aria-label={`Contact Ability Avenues in ${name}`}
                          title={`Contact Ability Avenues in ${name}`}
                          className="text-sm text-muted-foreground hover:text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
                        >
                          {name}
                        </Link>
                      ) : (
                        <span className="text-sm text-muted-foreground">{name}</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6 italic">
                  Don't see your area listed? Contact us to see if we serve your location!
                </p>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-white border-2 border-gray-100">
                <div className="w-16 h-16 bg-yellow-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <Navigation className="w-8 h-8 text-yellow-green" />
                </div>
                <h3 className="text-2xl font-bold text-raisin-black mb-6">Visit Our Center</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-raisin-black font-semibold">Address</p>
                      <p className="text-muted-foreground">
                        6385 Old Shady Oak Rd Suite 250<br />
                        Eden Prairie, MN 55344
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-raisin-black font-semibold">Phone</p>
                      <Link href="tel:9529002344" className="text-muted-foreground hover:text-secondary transition-colors">
                        (952) 900-2344
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-raisin-black font-semibold">Email</p>
                      <Link href="mailto:info@abilityavenues.com" className="text-muted-foreground hover:text-secondary transition-colors">
                        info@abilityavenues.com
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-raisin-black font-semibold">Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 w-full"
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border-2 border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18059.989812345!2d-93.26891916537508!3d44.975705198235715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU4JzMyLjUiTiA5M8KwMTYnMDguMSJX!5e0!3m2!1sen!2sus!4v1735000000&t=m&z=12"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Minneapolis Service Area Map"
                className="w-full h-full"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              Serving families across the Minneapolis metro area and surrounding Twin Cities communities
            </p>
          </motion.div>

          {/* Accessibility Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <Card className="p-6 bg-yellow-green/5 border-2 border-yellow-green/20">
              <p className="text-base text-raisin-black text-center leading-relaxed">
                Our autism center is fully accessible and designed to support children with diverse sensory needs. 
                We offer sensory-friendly spaces, quiet rooms, and therapeutic equipment to create an optimal learning environment for every child.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MinneapolisLocation;
