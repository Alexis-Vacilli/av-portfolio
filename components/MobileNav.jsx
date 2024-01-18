import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignRight } from "lucide-react";

// components
import Nav from "./Nav";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRight className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between h-full py-8">
          <div className="flex flex-col items-center">
            <Nav
              containerStyles="flex flex-col gap-y-6 mt-20"
              linkStyles="text-2xl relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[3px] bg-primary w-[50px]"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
