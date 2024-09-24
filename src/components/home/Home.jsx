import Categories from "./Categories"
import HeroSection from "./HeroSection"
import MarketingMaterials from "./MarketingMaterials"
import PopularProducts from "./PopularProducts"
import Services from "./Services"
import DiscountLabel from "../shared/DiscountLabel"

function Home() {

  return (
    <main>
      <DiscountLabel />
      <div className="space-y-24">
        <HeroSection />
        <Categories />
        <PopularProducts />
        <MarketingMaterials />
        <Services />
      </div>
    </main>
  )
}

export default Home
