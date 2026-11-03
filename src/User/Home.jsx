import CategorySection from "./homepage/category";
import HeroSection from "./homepage/herosection";
import OfferSection from "./homepage/offersection";
import PopularFoods from "./homepage/popular";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <CategorySection></CategorySection>
      <PopularFoods></PopularFoods>
      <OfferSection></OfferSection>
    </>
  );
}
