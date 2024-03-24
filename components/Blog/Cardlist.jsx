import { ArrowRight } from "lucide-react";


// Next
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Card from '@/components/Blog/Card'

const Cardlist = ({title, titleImage, content, smallDescription}) => {
  return (
    <div className='w-7/12 my-[50px]'>
      <h1 className='text-3xl py-10 font-semibold'>Recent Posts</h1>
      <div className="posts">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cardlist;
