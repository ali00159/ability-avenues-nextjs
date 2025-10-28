import { lazy, Suspense } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import EidbiHero from "@/components/eidbi/EidbiHero";

// Lazy load below-the-fold sections for performance
const EligibilityChecker = lazy(() => import("@/components/eidbi/EligibilityChecker"));
const WhatIsEidbi = lazy(() => import("@/components/eidbi/WhatIsEidbi"));
const ComprehensiveServices = lazy(() => import("@/components/eidbi/ComprehensiveServices"));
const EidbiProcess = lazy(() => import("@/components/eidbi/EidbiProcess"));
const NoCostHighlight = lazy(() => import("@/components/eidbi/NoCostHighlight"));
const SupportNetwork = lazy(() => import("@/components/eidbi/SupportNetwork"));
const FinalCTA = lazy(() => import("@/components/eidbi/FinalCTA"));

const EIDBI = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <EidbiHero />
        <Suspense fallback={<div className="h-screen" />}>
          <EligibilityChecker />
          <WhatIsEidbi />
          <ComprehensiveServices />
          <EidbiProcess />
          <NoCostHighlight />
          <SupportNetwork />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-64" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default EIDBI;

