import { lazy, Suspense } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import AboutHero from "@/components/about/AboutHero";

// Lazy load sections for performance
const WhoWeAre = lazy(() => import("@/components/about/WhoWeAre"));
const WhyChooseUs = lazy(() => import("@/components/about/WhyChooseUs"));
const Promises = lazy(() => import("@/components/about/Promises"));
const JoinTeamCTA = lazy(() => import("@/components/about/JoinTeamCTA"));

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <Suspense fallback={<div className="h-screen" />}>
          <WhoWeAre />
          <WhyChooseUs />
          <Promises />
          <JoinTeamCTA />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-64" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default AboutUs;
