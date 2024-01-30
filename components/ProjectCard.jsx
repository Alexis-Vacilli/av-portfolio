import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <Card className="bg-background">
      <CardContent className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-6 right-5">
          {project.category}
        </Badge>
        <p className="mb-1 text-xl font-semibold">{project.name}</p>
        <CardDescription className="text-muted-foreground text-base mb-10">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className='flex space-x-2'>
        <Link href="/" className="font-semibold text-sm">
          {" "}
          View Project{" "}
        </Link>
        <ArrowRight className="text-primary w-4 font-extrabold animate-in cursor-pointer animate-arrow" />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
