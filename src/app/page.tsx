import DefaultContainer from "@/components/ui/default-container";
import InnerHeader from "@/components/template/inner-header";
import HeroSection from "@/components/template/hero-section";

export default function Home() {
  return (
    <DefaultContainer>
      <InnerHeader />
      <HeroSection />
    </DefaultContainer>
  );
}
