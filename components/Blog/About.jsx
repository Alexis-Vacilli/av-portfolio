import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

import Link from "next/link";

const About = () => {
  return (
    <Card className="bg-backgound shadow-md dark:shadow-sm dark:shadow-input  border border-input">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent className="mb-10">
        <div className="flex items-center space-x-5 pb-5">
          <div className="h-[100px] w-[100px] border-4 border-foreground bg-profile bg-cover rounded-full"></div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">Alexis Vacilli</span>
            <span className="text-sm font-light">Developer & blogger</span>
          </div>
        </div>
        <CardDescription className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere
          itaque voluptas officiis voluptatem consequatur dolorum, delectus
          saepe dolor cumque.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex space-x-5">
        <Link href="/" className='flex bg-input/40 px-4 items-center hover:text-primary'> <span><FaXTwitter className='mr-2' /></span> Twitter</Link>
        <Link href="/" className='flex bg-input/40 px-4 items-center hover:text-primary'> <span><FaLinkedinIn className='mr-2' /></span> LinkedIn</Link>
        <Link href="/" className='flex bg-input/40 px-4 items-center hover:text-primary'> <span><MdOutlineMailOutline className='mr-2' /></span> Mail</Link>
      </CardFooter>
    </Card>
  );
};

export default About;
