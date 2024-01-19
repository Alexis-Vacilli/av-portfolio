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
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-5 text-center xl:text-left">
            <h1 className="h1">Hello, my name is Alexis Vacilli</h1>
            <div className="text-sm font-bold mt-4 text-primary tracking-[4px] uppercase">
              I am <span>Software Developer</span>
            </div>
            <p className="mt-4 subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident odio facere vitae similique? Quisquam sapiente quia
              voluptate blanditiis officia beatae!
            </p>
            {/* Buttons */}
            <div>
              <Button
                variant="outline"
                className="gap-x-2 border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Download CV
                <Download size={16} />
              </Button>
            </div>
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">Image</div>
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
