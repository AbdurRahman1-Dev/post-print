import Categories from "./Categories"
import HeroSection from "./HeroSection"
import MarketingMaterials from "./MarketingMaterials"
import PopularProducts from "./PopularProducts"
import Services from "./Services"
import DiscountLabel from "../shared/DiscountLabel"
import NewsletterSection from "./NewsletterSection"

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
        <NewsletterSection />
      </div>
    </main>
  )
}

export default Home
