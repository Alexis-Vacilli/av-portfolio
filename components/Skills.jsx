import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const skillsData = [
  {
    name: "Javascript",
    percentage: "70",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
  },
  {
    name: "Typescript",
    percentage: "70",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    name: "Nodejs",
    percentage: "65",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
  },
  {
    name: "Nextjs",
    percentage: "80",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
  },
  {
    name: "UI/X Design",
    percentage: "90",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
  },
  {
    name: "React Native",
    percentage: "60",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?",
  },
];

const Skills = () => {
  return (
    <section className="py-12 xl:py-24">
      {/* Container */}
      <div className="container mx-auto">
        {/* Tiles */}
        <div className="mb-6 xl:mb-12">
          <h2 className="section-title text-center mx-auto">
            Professional skills
          </h2>
          <p className="section-subtitle text-center secondary-font mx-auto">
            <span className="text-primary">My</span> Expertise
          </p>
        </div>
        {/* Card Container */}
        <div className="grid xl:grid-cols-3 justify-center xl:gap-y-2 xl:gap-x-8">
          {skillsData.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424px] h-[300px] flex flex-col justify-center bg-background border-none"
              >
                <CardHeader>
                  <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold">{item.name}</h2>
                    <p className="text-xl font-semibold">
                      {item.percentage}
                      <span className="text-primary">%</span>{" "}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base font-normal">
                    {item.description}
                  </CardDescription>
                </CardContent>
                <div className="w-full bg-gray-300 h-[3px] dark:bg-border">
                    {/* bg-bg_dot_light bg-right bg-no-repeat */}
                  <div
                    className="bg-foreground dark:bg-primary h-[3px]"
                    style={{width: `${item.percentage}%`}}
                  ></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
