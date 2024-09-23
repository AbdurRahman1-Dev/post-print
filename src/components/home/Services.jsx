import {
  Card,

  CardDescription,
CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight } from "lucide-react";

const Services = () => {

  const services = [
        { name: "Web Development", des: "We craft exceptional websites tailored to your goals, driving results and exceeding expectations. Let's build your website for success!" },   
        
        { name: "Digital Marketing Services", des: "Supercharge your online presence with data-driven digital marketing strategies that attract, engage, and convert your target audience. Grow your brand and achieve real results!" },  
        
        { name: "Graphic Content Design", des: "From logos and social media graphics to website visuals and marketing materials, we create impactful designs that tell your story and achieve your goals." },  
        
        { name: "Social Media Ad", des: "We develop targeted ad campaigns that resonate with your audience, drive engagement, and deliver measurable results." },
   
  ]
  return (
    <section className="container mx-auto px-4 md:flex justify-between gap-10 items-start flex-row-reverse relative space-y-5">
              <div className="flex flex-col justify-center space-y-4 order-2 md:order-1 md:w-[40%] md:sticky top-5 left-0">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-normal sm:text-3xl xl:text-4xl/none">
         Helpful Services For You
              </h3>
              <p className="max-w-[600px] text-zinc-500 text-base dark:text-zinc-400">
                Discover a world of possibilities. Our platform offers innovative solutions to help you achieve your goals and transform your ideas into reality.
              </p>
              <ul className="space-y-2">
                {services.map((item) => (
                      <li key={item.name} className="flex items-center space-x-3 rtl:space-x-reverse">
   <Check className="text-green-500"/>
        <span>{item.name}</span>
    </li>
                
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className='uppercase' size="lg">get in touch </Button>
        
            </div>
          </div>
      <div className="md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {services.map((item) => ( <Card key={item.name}>

  <CardHeader className='flex flex-col justify-start items-start gap-2'>
    <CardTitle className='text-2xl'>{item.name}</CardTitle>
    <CardDescription>{item.des}</CardDescription>

          
       
  <Button variant="ghost">Explore more <ChevronRight /></Button>
  
  </CardHeader>

</Card>))}

      </div>
    </section>
  );
};

export default Services;