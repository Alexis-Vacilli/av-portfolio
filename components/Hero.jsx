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
    <section className="py-6 xl:py-12 h-[84vh]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="w-full xl:w-6/12">
            {/* circle */}
            <div className="xl:mr-10 w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-profile bg-cover rounded-full border-8 border-border dark:border-border/70 right-0"></div>
            </div>
          </div>
          {/* Text */}
          <div className="w-full xl:w-6/12 p-8 flex flex-col gap-y-1 justify-center text-center xl:text-start">
            <h4 className="secondary-font text-2xl font-bold">
              Hello, my name is
            </h4>
            <h1 className="h1 bg-hero bg-center xl:bg-left bg-no-repeat">
              Alexis Vacilli
            </h1>
            <div className="text-sm font-bold mt-4 tracking-[4px] uppercase">
              I AM{" "}
              <span className="secondary-font text-primary font-bold">
                Software Developer
              </span>
            </div>
            <p className="mt-4 subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              laudantium voluptatem molestias quasi, optio doloremque modi ex
              veritatis omnis blanditiis?
            </p>
            <Socials
              containerStyles="flex gap-x-4 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[25px] hover:text-primary transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
