import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Link2, Clock, Star, Heart } from "lucide-react";
import heroIcon from "@/assets/hero-icon-yellow.svg";

const features = [
  {
    icon: Link2,
    title: "Zero Distance Approach",
    description: "Our core value of 'zero distance' means fostering close collaboration between therapists, families, and children. We prioritize open communication and trust, ensuring every individual feels connected and supported throughout their journey."
  },
  {
    icon: Clock,
    title: "Timely Access to Services",
    description: "We are committed to minimizing wait times and offering timely access to high-quality ABA services. While other providers have extensive waitlists, we focus on supporting families who have been told to wait years for care. Our mission is to provide essential therapy to children without delay."
  },
  {
    icon: Star,
    title: "Commitment to Exceptionalism",
    description: "Our highly skilled ABA staff is dedicated to delivering exceptional services through evidence-based practices, individualized care, and ongoing professional development. We strive to create meaningful, lasting improvements in each child's life."
  },
  {
    icon: Heart,
    title: "Individualized ABA Services",
    description: "We offer individualized therapy tailored to each child's unique needs. Our team develops customized treatment plans that target specific goals. By working closely with families, we create flexible schedules and provide therapy in-home, in the community, or at our center."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-pacific-cyan py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Icon */}
        <div className="flex justify-center mb-6">
          <Image 
            src={heroIcon} 
            alt="Decorative icon" 
            className="w-16 h-16"
            style={{ transform: "rotate(-35deg)" }}
            width={64}
            height={64}
          />
        </div>

        <h2 
          className="text-center font-bold mb-6 text-white leading-tight"
          style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
        >
          <span className="block">Why Choose</span>
          <span className="block text-cornsilk">Ability Avenues</span>
        </h2>
        
        <p className="text-center text-white/90 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          At Ability Avenues, we combine evidence-based ABA therapy with compassionate care to help children reach their full potential. Our approach focuses on individualized treatment plans, family collaboration, and timely access to quality services.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="h-full bg-card border-border shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-yellow-green/10"
                  >
                    <Icon className="w-8 h-8 text-pacific-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
