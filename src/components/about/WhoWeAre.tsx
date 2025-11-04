'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamIllustration from "@/assets/team-illustration.svg";
import visionIllustration from "@/assets/vision-illustration.svg";
import checkmarkIcon from "@/assets/checkmark-vision.svg";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      // Reset element to ensure clean state on navigation
      gsap.set(cardRef.current, { opacity: 1, y: 0 });

      const ctx = gsap.context(() => {
        gsap.fromTo(cardRef.current,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
            }
          }
        );
      });

      // Cleanup function to kill ScrollTriggers and reset
      return () => {
        ctx.revert();
        if (cardRef.current) {
          gsap.set(cardRef.current, { clearProps: "all" });
        }
      };
    }
  }, []);

  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    
    highlights.forEach(phrase => {
      const regex = new RegExp(`(${phrase})`, "gi");
      result = result.replace(regex, `<span class="text-cerulean underline decoration-2">$1</span>`);
    });
    
    return result;
  };

  return (
    <section className="py-12 px-4">
      <div ref={cardRef} className="max-w-[1200px] mx-auto space-y-20">
        
        {/* Who We Are Section - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Large SVG Illustration */}
          <div className="relative flex items-center justify-center">
            <Image
              src={teamIllustration}
              alt="Ability Avenues therapy team"
              className="w-full max-w-lg"
              width={500}
              height={400}
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-raisin-black">
              Who <span className="text-xanthous">We Are</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p dangerouslySetInnerHTML={{ 
                __html: highlightText("Since our founding in 2023, Ability Avenues has been committed to the philosophy of 'zero distance,' which ensures seamless communication between therapists, families, and children. We believe that meaningful change happens when families and therapists work together closely, fostering the best possible outcomes for the children we serve.", ["zero distance", "meaningful change", "work together closely"])
              }} />
              
              <p>
                We strive to create a supportive environment that enables every child to grow and thrive in the Minneapolis area and beyond. Our dedicated team is passionate about providing exceptional services and building strong partnerships with families to make a lasting impact in the lives of children and their communities.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision Section - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-raisin-black">
              Our <span className="text-xanthous">Vision</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-lg" dangerouslySetInnerHTML={{ 
                __html: highlightText("At Ability Avenues, our vision is to create a world where every child has the opportunity to reach their full potential through personalized and compassionate care. We are dedicated to transforming lives by providing high-quality ABA therapy that addresses the unique needs of each child we serve.", ["full potential", "transforming lives", "unique needs"])
              }} />
              
              <ul className="space-y-3">
                <li className="flex items-start text-lg text-gray-600">
                  <Image src={checkmarkIcon} alt="" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" width={24} height={24} />
                  <span>Early intervention as a key foundation</span>
                </li>
                <li className="flex items-start text-lg text-gray-600">
                  <Image src={checkmarkIcon} alt="" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" width={24} height={24} />
                  <span>Equipping children with essential skills beyond school readiness</span>
                </li>
                <li className="flex items-start text-lg text-gray-600">
                  <Image src={checkmarkIcon} alt="" className="w-6 h-6 mr-3 mt-1 flex-shrink-0" width={24} height={24} />
                  <span>Fostering growth in communication, social interaction, and daily life skills</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - SVG Illustration */}
          <div className="relative flex items-center justify-center">
            <Image
              src={visionIllustration}
              alt="Vision illustration"
              className="w-full max-w-xl"
              width={600}
              height={400}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
