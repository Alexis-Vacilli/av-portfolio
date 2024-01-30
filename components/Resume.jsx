import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const experience = [
  {
    title: 'UI/UX Designer',
    company: 'Leapr Labs',
    date: '2020 - Present',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, deleniti!'
  },
  {
    title: 'Mobile App Developer',
    company: 'Limitless Apps',
    date: '2020 - Present',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, deleniti!'
  },
  {
    title: 'Frontend Developer',
    company: 'Leapr Labs',
    date: '2020 - Present',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, deleniti!'
  },

];

const training = [
  {
    title: 'UI/UX Designer',
    company: 'SOLVIT',
    date: '2020 - Present',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quibusdam quas id cumque voluptate iusto vitae officia quam inventore reprehenderit.'
  },
  {
    title: 'Mobile App Developer',
    company: 'Andela',
    date: '2020 - Present',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, deleniti!'
  },
  {
    title: 'Frontend Developer',
    company: 'Leapr Labs',
    date: '2020 - Present',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, deleniti!'
  },

];



const Resume = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-12 xl:mb-24">
          <h2 className="section-title text-center mx-auto">Resume</h2>
          <p className="section-subtitle text-center secondary-font mx-auto">
            <span className="text-primary">My</span> Story
          </p>
        </div>
        {/* Section content */}
        <div className="w-full flex flex-col gap-y-20 md:flex-row justify-between">
          <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
            <h2 className="w-full text-2xl font-extrabold relative inline-block mb-4">
              Professional Training
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-11/12 h-[2px] bg-foreground dark:bg-border"></div>
            </h2>
            <Accordion className='relative'>{training.map((item, index) => {
              return <AccordionItem key={index} value={`item-${index}`} className='centered text-xl font-semibold border-b-2 border-foreground dark:border-border'>
                <AccordionTrigger className='px-6 py-8'>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <div className='centered flex justify-between items-center '>
                    <span className='text-3xl secondary-font'>{item.company}</span>
                    <span className='bg-primary'>{item.date}</span>
                  </div>
                  <div className='centered text-start py-4 font-normal'>{item.description}</div>
                </AccordionContent>
              </AccordionItem>
            })}</Accordion>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <h2 className="w-full text-2xl font-extrabold relative inline-block mb-4">
              Experience
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-11/12 h-[2px] bg-foreground dark:bg-border"></div>
            </h2>
            <Accordion className='relative'>{experience.map((item, index) => {
              return <AccordionItem key={index} value={`item-${index}`} className='centered text-xl font-semibold border-b-2 border-foreground dark:border-border'>
                <AccordionTrigger className='px-6 py-8'>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <div className='centered flex justify-between items-center '>
                    <span className='text-3xl secondary-font'>{item.company}</span>
                    <span className='bg-primary'>{item.date}</span>
                  </div>
                  <div className='centered text-start py-4 font-normal'>{item.description}</div>
                </AccordionContent>
              </AccordionItem>
            })}</Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
