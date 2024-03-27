import Link from "next/link";
import Image from "next/image";
import image from "../../public/assets/Blog/blog.jpeg";
import MenuCategories from "./MenuCategories";


const Menu = () => {
  return (
    <div className="w-5/12 mt-[60px]">
      <h2 className='text-xl'>What's hot</h2>
      <h1 className='font-semibold text-3xl'>Most popular</h1>
      <div className="flex flex-col gap-y-5 mt-[35px] mb-[60px]">
        <Link href="" className="flex items-center gap-x-4">
          <div className=" relative aspect-square  w-16 h-16">
            <Image
              src={image}
              fill
              alt=""
              className="object-cover rounded-full border-4 border-border"
            />
          </div>
          <div className="flex-4 flex flex-col">
              <span className="px-2 rounded-sm text-[12px] bg-[#57c4ff31]" style={{width: 'max-content'}}>Sport</span>
              <h3 className='text-[18px] font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, hic!</h3>
              <div className="text-[12px]">
                  <span className='username'>Alexis Vacilli - </span>
                  <span className='text-foreground/50'>January, 12 2024 </span>
              </div>
          </div>
        </Link>
        <Link href="" className="flex items-center gap-x-4">
          <div className=" relative aspect-square  w-16 h-16">
            <Image
              src={image}
              fill
              alt=""
              className="object-cover rounded-full border-4 border-border"
            />
          </div>
          <div className="flex-4 flex flex-col">
              <span className="px-2 rounded-sm text-[12px] bg-[#da85c731]" style={{width: 'max-content'}}>Social</span>
              <h3 className='text-[18px] font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, hic!</h3>
              <div className="text-[12px] ">
                  <span className='username'>Alexis Vacilli - </span>
                  <span className='text-foreground/50'>January, 12 2024 </span>
              </div>
          </div>
        </Link>
        <Link href="" className="flex items-center gap-x-4">
          <div className=" relative aspect-square  w-16 h-16">
            <Image
              src={image}
              fill
              alt=""
              className="object-cover rounded-full border-4 border-border"
            />
          </div>
          <div className="flex-4 flex flex-col">
              <span className="px-2 rounded-sm text-[12px] bg-[#7fb88133]" style={{width: 'max-content'}}>Politics</span>
              <h3 className='text-[18px] font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, hic!</h3>
              <div className="text-[12px] ">
                  <span className='username'>Alexis Vacilli - </span>
                  <span className='text-foreground/50'>January, 12 2024 </span>
              </div>
          </div>
        </Link>
      </div>
      <MenuCategories />
    </div>
  );
};

export default Menu;
