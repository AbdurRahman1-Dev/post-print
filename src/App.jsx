import Categories from "./components/home/Categories"
import HeroSection from "./components/home/HeroSection"
import Products from "./components/home/Products"
import Services from "./components/home/Services"
import DiscountLabel from "./components/shared/DiscountLabel"
import Footer from "./components/shared/Footer"
import Navbar from "./components/shared/Navbar"


function App() {
 
  return (
   <main >
     <Navbar/>
     <DiscountLabel/>
    <div className="space-y-24">
       <HeroSection/>
     <Categories/>
     <Products/>
     <Services/>
    <Footer/>
    </div>
   </main>
  )
}

export default App
