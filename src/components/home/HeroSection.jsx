
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export default function HeroSection() {
  return (
    <section className=" w-full py-6 md:py-0 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 ">
          <div className="flex flex-col justify-center space-y-4 order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-normal sm:text-5xl xl:text-6xl/none  ">
             Ink it Right, Print it Bright. Your Vision, Our Precision.
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Discover a world of possibilities. Our platform offers innovative solutions to help you achieve your goals and transform your ideas into reality.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className='uppercase' size="lg">Order Now</Button>
              {/* <Button variant="outline" size="lg">
                Learn More
              </Button> */}
            </div>
          </div>
          <div className=" p-10 order-1 md:order-2">
    
            <Carousel  className="w-full relative">
  <CarouselContent>
    <CarouselItem>        <img
              src="https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F2f%2F0c%2F71%2F2f0c71fec63305098cf790cd8b75cbb8.jpg&w=384&q=75"
              alt="Hero Image"
              width={500}
              height={500}
              className="aspect-square overflow-hidden rounded-xl object-cover object-center relative w-full"
            /></CarouselItem>
    <CarouselItem>        <img
              src="https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2F10%2F2e%2Fb2%2F102eb29ae655577b7bc12d5b9da29a74.jpg&w=384&q=75"
              alt="Hero Image"
              width={500}
              height={500}
              className="aspect-square overflow-hidden rounded-xl object-cover object-center relative w-full"
            /></CarouselItem>

  </CarouselContent>
  <CarouselPrevious className=" -left-3" />
          <CarouselNext className=" absolute -right-3" />
</Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}