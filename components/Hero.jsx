// Components
import Socials from "./ui/Socials";
import Link from "next/link";
import Image from "next/image";
import profile from "../public/assets/Hero/Profile.png";
import { Button } from "./ui/button";
import { Send, File } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24  h-[84vh] mb-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 xl:flex-row">
          {/* image */}
          <div className="w-full xl:w-6/12">
            {/* circle */}
            <div className="xl:mr-10 w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-profile bg-cover rounded-full border-8 border-border dark:border-border/70 right-0"></div>
            </div>
          </div>
          {/* text */}
          <div className="flex max-w-[600px] flex-col  justify-center mx-auto xl:mx-0 text-center xl:text-start sm:mb-12">
            <div className="text-2xl mb-4 secondary-font tracking-[-1px] text-primary">
              Software Developer
            </div>
            <h1 className="h1 mb-5">Hello, my name is Alexis Vacilli</h1>
            <p className="text-base text-muted-foreground mb-8 font-light max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sunt
              excepturi blanditiis, laudantium perferendis placeat cumque
              eveniet natus optio tenetur.
            </p>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/'>
                <Button size='lg' variant='outline' className='gap-x-2 rounded-sm border-2 border-input'>Email me<Send size={18} /></Button>
              </Link>
              <Button size='lg' variant='secondary' className='gap-x-2 rounded-sm text-white dark:text-foreground '>Get CV<File size={18}/></Button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
