import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";

import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <Card className='bg-background'>
      <CardHeader>
        <div className='relative w-full h-[250px]'>
          <Image
            src={project.image}
            className="absolute bottom-0 shadow-2xl rounded-lg"
            width={247}
            height={230}
            alt={project.name}
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="mb-1 text-xl font-semibold">{project.name}</h4>
        <p className='text-muted-foreground text-base'>{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
