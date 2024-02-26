import DefaultContainer from "@/components/ui/general/default-container";
import InnerHeader from "@/components/template/inner-header";
import HeroSection from "@/components/template/hero-section";
import ProductSection from "@/components/template/product-section";
import FeaturedSection from "@/components/template/featured-section";

export default function Home() {
  return (
    <DefaultContainer>
      <InnerHeader />
      <HeroSection />
      <ProductSection />
      <FeaturedSection />
    </DefaultContainer>
  );
}
