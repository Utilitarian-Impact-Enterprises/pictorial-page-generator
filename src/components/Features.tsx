
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Feature = {
  icon: React.ReactNode;
  title: string;
  bgColor: string;
};

const Features = () => {

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <Accordion type="single" collapsible>
          <AccordionItem value="socio">
            <AccordionTrigger className="text-white text-2xl">Socio</AccordionTrigger>
            <AccordionContent className="text-white text-xl">
              Explore our social features and community engagement tools designed to help you connect with your audience and grow your network.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <br />
        <br />

      </div>
    </section>
  );
};

export default Features;
