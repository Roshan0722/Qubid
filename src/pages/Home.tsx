import Hero from "../components/Hero";
import VisualMarquee from "../components/VisualMarquee";
import Features from "../components/Features";
import SourceStrip from "../components/SourceStrip";
import ThreeCards from "../components/ThreeCards";
import DarkBand from "../components/DarkBand";
import CaseStudies from "../components/CaseStudies";
import Resources from "../components/Resources";
import Faq from "../components/Faq";
import CtaBand from "../components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <VisualMarquee />
      <Features />
      <SourceStrip />
      <ThreeCards />
      <DarkBand />
      <CaseStudies />
      <Resources />
      <Faq />
      <CtaBand />
    </>
  );
}
