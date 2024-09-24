
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Title from "../shared/Title"
import Autoplay from "embla-carousel-autoplay"
const categories = [
  { name: "Electronics", image: "/placeholder.svg", href: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F09%2F57%2F55%2F095755256345365d22ca7180d3c9cecc.jpg&w=384&q=75" },
  { name: "Clothing", image: "/placeholder.svg", href: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2F5c%2F37%2Fa4%2F5c37a4844d0882c22b5c811bd69ea401.jpg&w=384&q=75" },
  { name: "Home & Garden", image: "/placeholder.svg", href: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2Fc3%2F2e%2Fc1%2Fc32ec1cc61b40ca26d0fee41b506d994.jpg&w=384&q=75" },
  { name: "Sports", image: "/placeholder.svg", href: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2F10%2F2e%2Fb2%2F102eb29ae655577b7bc12d5b9da29a74.jpg&w=384&q=75" },
  { name: "Books", image: "/placeholder.svg", href: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F51%2F9d%2F65%2F519d65c894dcacbe98eaf394fb95c395.jpg&w=384&q=75" },
  { name: "Sports", image: "/placeholder.svg", href: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2F10%2F2e%2Fb2%2F102eb29ae655577b7bc12d5b9da29a74.jpg&w=384&q=75" },
  { name: "Clothing", image: "/placeholder.svg", href: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2F5c%2F37%2Fa4%2F5c37a4844d0882c22b5c811bd69ea401.jpg&w=384&q=75" },
  { name: "Electronics", image: "/placeholder.svg", href: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F09%2F57%2F55%2F095755256345365d22ca7180d3c9cecc.jpg&w=384&q=75" },

]

export default function Categories() {
  return (
    <section className="w-full  container mx-auto px-2">
      <div className="px-2 ">
        <Title title="Featured Categories" />
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true
            }),
          ]}
          opts={{
            align: "start",
            // loop: true,

          }}
          className="w-full "
        >
          <CarouselContent>
            {categories.map((category, index) => (
              <CarouselItem key={index} className="basis-2/4 md:basis-1/4 lg:basis-1/6">
                <Card className="relative overflow-hidden w-48 h-48 rounded-full mx-auto group ">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${category.href}`,
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                    aria-hidden="true"
                  />
                  <div className="relative h-full flex flex-col justify-center items-center p-6 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <h4 className="text-xl font-bold mb-2 text-center text-white">{category.name}</h4>

                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" -left-3" />
          <CarouselNext className=" -right-3" />
        </Carousel>
      </div>
    </section>
  )
}