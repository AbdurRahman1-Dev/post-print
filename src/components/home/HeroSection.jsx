
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="container mx-auto w-full py-5 md:py-0">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
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
          <div className="flex items-center justify-center">
            <img
              src="https://poshprint.co/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F564x%2F10%2F2e%2Fb2%2F102eb29ae655577b7bc12d5b9da29a74.jpg&w=384&q=75"
              alt="Hero Image"
              width={500}
              height={500}
              className="aspect-square overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}