'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import Link from 'next/link';

const MinneapolisLocation = () => {
  const neighborhoods = [
    'Downtown Minneapolis',
    'Uptown',
    'South Minneapolis',
    'North Minneapolis',
    'Northeast Minneapolis',
    'Southwest Minneapolis',
    'Minneapolis Metro Area',
    'St. Paul',
    'Bloomington',
    'Eden Prairie',
  ];

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
                  We proudly serve families from the following Minneapolis neighborhoods and surrounding communities:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pacific-cyan rounded-full" />
                      <span className="text-sm text-muted-foreground">{neighborhood}</span>
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
                        Ability Avenues<br />
                        Minneapolis Autism Center<br />
                        Minneapolis, MN 55401
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-raisin-black font-semibold">Phone</p>
                      <Link href="tel:" className="text-muted-foreground hover:text-secondary transition-colors">
                        Call us today
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-raisin-black font-semibold">Email</p>
                      <Link href="/contact" className="text-muted-foreground hover:text-secondary transition-colors">
                        Contact us online
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-pacific-cyan/5 rounded-xl border border-pacific-cyan/20">
                  <p className="text-sm text-raisin-black">
                    <strong>Hours:</strong> Monday - Friday, 8:30 AM - 4:30 PM
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Tours and consultations available by appointment.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Accessibility Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
