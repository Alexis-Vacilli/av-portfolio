"use client";
import { Map, Mail, BookUser } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Form from "./Form";
import Socials from "./ui/Socials";

const Contact = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-12 xl:mb-24">
          <h2 className="section-title text-center mx-auto">Contact Me</h2>
          <p className="section-subtitle text-center secondary-font mx-auto">
            <span className="text-primary">My</span> Contacts
          </p>
        </div>
        {/* Content */}
        <div className="w-full flex flex-col gap-x-5 gap-y-20 md:flex-row justify-between">
          {/* Accordions */}
          <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
            <Accordion className="flex flex-col gap-y-1">
              <AccordionItem
                value="item-1"
                className="bg-background  border-b-0 shadow-md"
              >
                <AccordionTrigger className="text-xl font-semibold px-6 py-6">
                  Working days
                </AccordionTrigger>
                <AccordionContent className="bg-white/20 dark:bg-black/10 text-start px-10 py-12 font-light text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, laboriosam nam quisquam culpa reprehenderit
                  laudantium dolore? Placeat aut quae est repellat obcaecati
                  architecto provident porro beatae inventore accusantium
                  doloribus aspernatur accusamus nobis laborum enim, qui ea! Ut
                  animi excepturi quibusdam.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="bg-background border-b-0 shadow-md"
              >
                <AccordionTrigger className="text-xl font-semibold px-6 py-6">
                  Social Profiles
                </AccordionTrigger>
                <AccordionContent className="bg-white/20 dark:bg-black/10 text-start px-10 py-12 font-light text-lg grid grid-cols-2 gap-4">
                  <div>Twitter</div>
                  <div>LinkedIn</div>
                  <div>Dribble</div>
                  <div>Facebook</div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="bg-background border-b-0 shadow-md"
              >
                <AccordionTrigger className="text-xl font-semibold px-6 py-6">
                  Contacts
                </AccordionTrigger>
                <AccordionContent className="bg-white/20 dark:bg-black/10 text-start px-10 py-12 font-light text-lg flex flex-col gap-y-2">
                  <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside text-foreground dark:text-foreground'>
                    <li>alexisvacilli10@gmail.com</li>
                    <li>alexisvacilli.com</li>
                    <li>+250780535440</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Form */}
          <div className="w-full md:w-1/2 text-center">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
