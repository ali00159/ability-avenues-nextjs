'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

interface ServiceAreaSectionProps {
  neighborhoods: string[];
  zipCodes: string[];
  cityName: string;
  nearbyCities: string[];
}

const ServiceAreaSection = ({ neighborhoods, zipCodes, cityName, nearbyCities }: ServiceAreaSectionProps) => {
  return (
    <section className="py-24 bg-[radial-gradient(circle_at_center,white_0%,hsl(var(--xanthous))_100%)] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white border-2 border-yellow-green/30 rounded-3xl shadow-lg p-8 md:p-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="text-yellow-green font-semibold uppercase tracking-wider text-sm">
                Service Area
              </span>
              <h2 className="mt-4 mb-6 text-3xl md:text-4xl font-bold text-raisin-black">
                Serving <span className="text-yellow-green">{cityName}</span> and Surrounding Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide in-home and center-based ABA therapy throughout {cityName} and neighboring communities in the Twin Cities metro area.
              </p>
            </motion.div>

            {/* Neighborhoods */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <Card className="p-8 md:p-10 rounded-3xl border-2 border-border/40">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-pacific-cyan/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-pacific-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-raisin-black">
                    {cityName} Neighborhoods We Serve
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {neighborhoods.map((neighborhood, index) => (
                    <motion.div
                      key={neighborhood}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                    >
                      <Badge 
                        variant="outline" 
                        className="px-4 py-2 text-sm font-medium border-2 border-pacific-cyan/30 bg-pacific-cyan/5 hover:bg-pacific-cyan/10 transition-colors"
                      >
                        {neighborhood}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* ZIP Codes */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="p-8 md:p-10 rounded-3xl border-2 border-border/40">
                <h3 className="text-2xl font-bold text-raisin-black mb-6">
                  ZIP Codes Served
                </h3>
                <div className="flex flex-wrap gap-3">
                  {zipCodes.map((zip, index) => (
                    <motion.div
                      key={zip}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                    >
                      <Badge 
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium border-2 border-yellow-green/30 bg-yellow-green/5 hover:bg-yellow-green/10 transition-colors"
                      >
                        {zip}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Nearby Cities */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-8 md:p-10 rounded-3xl border-2 border-border/40 bg-gradient-to-br from-muted/30 to-white">
                <h3 className="text-2xl font-bold text-raisin-black mb-4">
                  We Also Serve Nearby Cities
                </h3>
                <p className="text-muted-foreground mb-6">
                  In addition to {cityName}, we provide ABA therapy services to families in these surrounding communities:
                </p>
                <div className="flex flex-wrap gap-3">
                  {nearbyCities.map((city, index) => (
                    <motion.div
                      key={city}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      className="flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-raisin-black">{city}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;

