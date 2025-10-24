'use client';

import { lazy, Suspense } from "react";
import { usePathname } from 'next/navigation';
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";

const ContactForm = lazy(() => import("@/components/contact/ContactForm"));

const ContactUs = () => {
  const pathname = usePathname();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              key={`contact-hero-${pathname}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Decorative Icon */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-24 h-24">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-12 bg-pacific-cyan/30 rounded-2xl rotate-12"></div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-12 bg-yellow-green/40 rounded-2xl -rotate-6"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-14 bg-secondary/30 rounded-2xl rotate-3"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-raisin-black mb-6">
                Get in touch with{" "}
                <span className="text-yellow-green">Ability Avenues</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
                At Ability Avenues, children with autism benefit from one-on-one support from energetic and highly-trained clinicians. Together with families, these professionals set individual goals that honor each child's unique way of learning and communicating.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Whether you're researching autism, already have an autism diagnosis, or are looking to start applied behavior analysis (ABA) therapy, we're here to help. We provide no-cost diagnostic support online or in person at one of our joyful and welcoming autism care centers.
              </p>
              
              <p className="text-lg md:text-xl font-semibold text-raisin-black leading-relaxed max-w-3xl mx-auto">
                Here, your child is in capable hands. Your voice matters to us, and we seek to advocate for your family in everything we do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-border/40 rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-yellow-green" />
                </div>
                <h3 className="text-xl font-bold text-raisin-black mb-3">Phone</h3>
                <a
                  href="tel:9529002344"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block"
                >
                  (952) 900-2344
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white border border-border/40 rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <Printer className="w-8 h-8 text-yellow-green" />
                </div>
                <h3 className="text-xl font-bold text-raisin-black mb-3">Fax</h3>
                <p className="text-muted-foreground">
                  (952) 443-8616
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white border border-border/40 rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-yellow-green" />
                </div>
                <h3 className="text-xl font-bold text-raisin-black mb-3">Email</h3>
                <a
                  href="mailto:info@abilityavenues.com"
                  className="text-muted-foreground hover:text-secondary transition-colors inline-block"
                >
                  info@abilityavenues.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white border border-border/40 rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-yellow-green" />
                </div>
                <h3 className="text-xl font-bold text-raisin-black mb-3">Location</h3>
                <p className="text-muted-foreground">
                  6385 Old Shady Oak Rd Suite 250<br />
                  Eden Prairie, MN 55344
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white border border-border/40 rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-green/10 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-yellow-green" />
                </div>
                <h3 className="text-xl font-bold text-raisin-black mb-3">Hours</h3>
                <p className="text-muted-foreground">
                  Mon-Fri: 8am-6pm<br />
                  Sat-Sun: 10am-4pm
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <Suspense fallback={<div className="h-screen" />}>
          <ContactForm />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-64" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ContactUs;
