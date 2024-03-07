import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PortableText } from "@portabletext/react";

const Blog = ({ post }) => {
  return (
    <Card className="flex flex-col md:flex-row group overflow-hidden bg-backgound shadow-sm dark:shadow-sm dark:shadow-input  border border-input">
      <div className="flex flex-col justify-between md:w-1/2">
        <CardHeader>
          <p>{new Date(post.publishedAt).toDateString()}</p>
          <CardTitle className="pt-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {post.excertp.length > 100
              ? post.excertp.slice(0, 100) + "..."
              : post.excertp}
          </CardDescription>
          <div className="flex gap-x-2 items-center py-2">
            <Link
              href={`/blog/${post.slug.current}`}
              className="font-semibold text-lg"
            >
              {" "}
              Read more{" "}
            </Link>
            <ArrowRight className="text-primary w-4 font-extrabold cursor-pointer animate-arrow" />
          </div>
        </CardContent>
      </div>
      <div className="flex-shrink-0 md:w-1/2">
        {/* <Image
          src={item.image}
          width={150}
          height={80}
          alt="blog-image"
          className="w-full p-6 rounded-[40px]"
        /> */}
      </div>
    </Card>
  );
};

export default Blog;
