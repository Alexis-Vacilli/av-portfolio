import Image from "next/image";
import image from "../../public/assets/Blog/blog-2.jpeg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Card = () => {
  return (
    <div className="mb-[50px] flex gap-5 items-center border rounded-xl py-2 px-4">
      <div className="flex-1 flex flex-col gap-3 p-5">
        <div className="details">
          <span className="">January, 12 2024 - </span>
          <span className="text-primary font-semibold uppercase">Sport</span>
        </div>
        <h1 className='text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur</h1>
        <p className='text-base font-light'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, in,
          amet dolorum debitis maxime expedita velit neque 
        </p>
        <div className="flex gap-x-2 items-center py-2">
          <Link href="/" className="font-semibold text-lg">
            {" "}
            Read more{" "}
          </Link>
          <ArrowRight className="text-primary w-4 font-extrabold cursor-pointer animate-arrow" />
        </div>
      </div>
      <div className="flex-1 h-[250px]  relative">
        <Image src={image} fill alt="" className='object-cover rounded-xl' />
      </div>
    </div>
  );
};

export default Card;
