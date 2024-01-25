// Components
import DevImg from "./ui/DevImg";
import Ba from "./ui/Ba";
import Socials from "./ui/Socials";

// Icons
import { RiArrowDownSLine } from "react-icons/ri";
import { Download } from "lucide-react";

// Shadcn
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-5 text-center xl:text-left ">
            <h1 className="h1 bg-hero bg-right">
              Hello, my name is Alexis Vacilli
            </h1>
            <div className="text-sm font-bold mt-4 tracking-[4px] uppercase">
              I am{" "}
              <span className="secondary-font text-primary font-bold">
                Software Developer
              </span>
            </div>
            <p className="mt-4 subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident odio facere vitae similique? Quisquam sapiente quia
              voluptate blanditiis officia beatae!
            </p>
            {/* Buttons */}
            {/* <div className='mb-8'>
              <Button
                variant="outline"
                className="gap-x-2 border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Download CV
                <Download size={16} />
              </Button>
            </div> */}
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-4 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[25px] hover:text-primary transition-all"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape_light dark:bg-hero_shape_dark w-[600px] h-[600px] bg-no-repeat absolute -top-28 -right-2"></div>
            <DevImg containerStyles="" imgSrc="" />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
