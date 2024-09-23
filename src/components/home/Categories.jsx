
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Title from "../shared/Title"

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
      <div className=" ">
     <Title title="Featured Categories"/>
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}
          className="w-full "
        >
          <CarouselContent>
            {categories.map((category, index) => (
              <CarouselItem key={index} className="basis-2/3 md:basis-1/4 lg:basis-1/6">
                <div className="p-2">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center px-2 py-3">
                      <a href={category.href} className="text-center group">
                        <div className="relative overflow-hidden ">
                          <img
                            src={category.href}
                            alt={category.name}
                          
                            className="object-cover transition-transform duration-300 group-hover:scale-110 w-full"
                          />
                        </div>
                        <h3 className="font-medium text-sm group-hover:text-purple-600 transition-colors duration-300">
                          {category.name}
                        </h3>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-3" />
          <CarouselNext className="hidden md:flex -right-3" />
        </Carousel>
      </div>
    </section>
  )
}