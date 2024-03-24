import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="container mx-auto">
      <h1 className='text-3xl font-semibold my-[50px]'>Popular Categories</h1>
      <div className="flex flex-wrap gap-2">
        <Link href="" className="capitalise xl:w-[10%] w-[23%] h-[20px] flex items-center justify-center rounded-sm bg-[#57c4ff31] p-3">
          Social
        </Link>
        <Link href="" className="capitalise xl:w-[10%] w-[23%] h-[20px] flex items-center justify-center rounded-sm bg-[#da85c731] p-3">
          Politics
        </Link>
        <Link href="" className="capitalise xl:w-[10%] w-[23%] h-[20px] flex items-center justify-center rounded-sm bg-[#7fb88133] p-3">
          Sports
        </Link>
        <Link href="" className="capitalise xl:w-[10%] w-[23%] h-[20px] flex items-center justify-center rounded-sm bg-[#ff795736] p-3 ">
          Tech
        </Link>
      </div>
    </div>
  );
};

export default Categories;
