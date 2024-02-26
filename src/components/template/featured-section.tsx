import FeaturedCarousel from "../ui/featured-carousel";
import SectionTitle from "../ui/general/section-title";

const FeaturedSection = () => {
  return (
    <section className="mb-14 flex flex-col items-center justify-center">
      <SectionTitle
        title="Featured"
        description="There are newest style of the season."
      />
      <FeaturedCarousel />
    </section>
  );
};

export default FeaturedSection;
