import Link from "next/link";
const MenuCategories = () => {
  return (
    <div>
      <h2 className="text-xl">Discover by topics</h2>
      <h1 className="font-semibold text-3xl">Categories</h1>
      <div className="mt-[35px] mb-[60px] flex flex-wrap gap-3 w-2/3">
        <Link href="" className="px-8 py-1 rounded-sm  bg-[#da85c731] text-[14px]"> 
          Social
        </Link>
        <Link href="" className="px-8 py-1 rounded-sm  bg-[#7fb88133] text-[14px]">
          Sports
        </Link>
        <Link href="" className="px-8 py-1 rounded-sm  bg-[#d3da8531] text-[14px]">
          Politics
        </Link>
        <Link href="" className="px-8 py-1 rounded-sm  bg-[#7357ff31] text-[14px]">
          Technology
        </Link>
        <Link href="" className="px-8 py-1 rounded-sm  bg-[#da858631] text-[14px]">
          Politics
        </Link>
      </div>
    </div>
  );
};

export default MenuCategories;
