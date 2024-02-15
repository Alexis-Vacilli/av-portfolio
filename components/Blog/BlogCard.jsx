import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Next
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ date, title, description, image }) => {
  return (
    <Card className="flex flex-col md:flex-row group overflow-hidden bg-background border border-input">
      <div className="relative flex-shrink-0 md:w-1/2">
        <Image
          src={image}
          width={150}
          height={50}
          alt="blog-image"
          className="w-full object-cover h-56"
        />
      </div>
      <div className="flex flex-col justify-between md:w-1/2 ">
        <CardHeader>
          <p>{date}</p>
          <CardTitle className="pt-2">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </CardDescription>
          <div className="flex gap-x-2 items-center py-2">
            <Link href="/" className="font-semibold text-lg">
              {" "}
              Read more{" "}
            </Link>
            <ArrowRight className="text-primary w-4 font-extrabold cursor-pointer animate-arrow" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BlogCard;
