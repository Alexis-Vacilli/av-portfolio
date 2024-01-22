
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardHeader>Card Image</CardHeader>
      <div className="h-full px-8 py-6">
        <h4 className='text-base text-primary font-extrabold uppercase'>{project.category}</h4>
        <h3 className='text-xl font-extrabold'>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
