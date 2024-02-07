'use client';
import { Map, Mail, BookUser } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
      </div>
    </section>
  );
};

export default Contact;
