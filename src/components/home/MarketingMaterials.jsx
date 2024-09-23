
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Title from "../shared/Title";

const products = [
  { id: 1, name: "Product 1", price: "$19.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fsinalite.com%2Fmedia%2Fimages%2Flinen-pc-cards.png&w=384&q=75" },
  { id: 2, name: "Product 2", price: "$29.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2F09%2F57%2F55%2F095755256345365d22ca7180d3c9cecc.jpg&w=750&q=75" },
  { id: 3, name: "Product 3", price: "$39.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F24%2F99%2F0e%2F24990e361c34b45ca0f32133ee043d47.jpg&w=384&q=75" },
  { id: 4, name: "Product 4", price: "$49.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Fd4%2F39%2Fbb%2Fd439bbd73a3ef215e9401eec618fd1db.jpg&w=384&q=75" },
  { id: 5, name: "Product 5", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F36%2Fd6%2F81%2F36d6816ebec8a8ca182bdc57a18dadc5.jpg&w=384&q=75" }, { id: 6, name: "Product 6", price: "$59.99", image: "https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffa%2F56%2Fd4%2Ffa56d48922e72bdeb42d6985df517f1e.jpg&w=384&q=75" },
];

const MarketingMaterials = () => {
  return (
    <section className="container mx-auto px-2 w-full">
      <div className="px-2">
        <Title title="Marketing Materials" />
        <Carousel plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
          }),
        ]}
          opts={{
            align: "start",
            // loop: true,


          }} className="w-full">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className='basis-2/3 md:basis-1/4 lg:basis-1/5'>
                <div className="p-2">  <Card className='p-2'>
                  <CardContent className="flex aspect-square items-center justify-center p-5">
                    <div className="text-center">
                      <img src={product.image} alt={product.name} className="w-full h-auto" />
                      <h3 className="font-semibold">{product.name}</h3>
                      {/* <p className="text-sm text-gray-500">{product.price}</p> */}
                    </div>
                  </CardContent>
                </Card></div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" -left-3" />
          <CarouselNext className=" -right-3" />
        </Carousel>
      </div>
    </section>
  );
};

export default MarketingMaterials;