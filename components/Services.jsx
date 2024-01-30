import { Paintbrush, Blocks, Gem, ArrowRight  } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";

// next
import Link from 'next/link'

const serviceData = [
  {
    icon: <Paintbrush size={72} strokeWidth={0.8} />,
    title: "UI/IX & Logo Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
    
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "iOS & Android",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
    
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
    
  },
];

const Services = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="mb-12 xl:mb-24">
          <h2 className="section-title text-center mx-auto">What I do</h2>
          <p className="section-subtitle text-center secondary-font mx-auto">
            <span className="text-primary">My</span> Services
          </p>
        </div>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative bg-background "
                key={index}
              >
                <CardHeader className="absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className=''>
                  <CardTitle className="mb-4 font-semibold">{item.title}</CardTitle>
                  <CardDescription className='text-base'>{item.description}</CardDescription>
                </CardContent>
                <CardFooter className='gap-x-2'>
                    <Link href='/' className='font-semibold text-lg'> See Project </Link>
                    <ArrowRight className='text-primary w-4 font-extrabold animate-in cursor-pointer animate-arrow' />
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
