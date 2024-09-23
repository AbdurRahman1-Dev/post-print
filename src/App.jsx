import Categories from "./components/home/Categories"
import HeroSection from "./components/home/HeroSection"
import DiscountLabel from "./components/shared/DiscountLabel"
import Navbar from "./components/shared/Navbar"


function App() {
 
  return (
   <main >
     <Navbar/>
     <DiscountLabel/>
    <div className="space-y-16">
       <HeroSection/>
     <Categories/>
    </div>
   </main>
  )
}

export default App
