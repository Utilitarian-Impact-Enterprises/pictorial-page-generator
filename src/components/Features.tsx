import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
type Feature = {
  icon: React.ReactNode;
  title: string;
  bgColor: string;
};
const Features = () => {
  return <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <Accordion type="single" collapsible>
          <AccordionItem value="socio">
            <AccordionTrigger className="text-white text-2xl">Socio</AccordionTrigger>
            <AccordionContent className="text-white text-xl">
              Explore our social features and community engagement tools designed to help you connect with your audience and grow your network.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="economic">
            <AccordionTrigger className="text-white text-2xl">Economic</AccordionTrigger>
            <AccordionContent className="text-white text-xl">
              Explore our economic features designed to help you manage finances, receive payments, and handle transactions efficiently.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="technology">
            <AccordionTrigger className="text-white text-2xl">Technology</AccordionTrigger>
            <AccordionContent className="text-white text-xl">
              Discover our cutting-edge technological solutions that power your digital presence and streamline your workflow.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <br />
        <br />

        

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7
      }} viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-500 p-4 rounded-lg">
            <h3 className="text-white text-xl">Feature 1</h3>
            <p className="text-white text-lg">Description of feature 1</p>
          </div>

          <div className="bg-green-500 p-4 rounded-lg">
            <h3 className="text-white text-xl">Feature 2</h3>
            <p className="text-white text-lg">Description of feature 2</p>
          </div>

          <div className="bg-red-500 p-4 rounded-lg">
            <h3 className="text-white text-xl">Feature 3</h3>
            <p className="text-white text-lg">Description of feature 3</p>
          </div>

          <div className="bg-yellow-500 p-4 rounded-lg">
            <h3 className="text-white text-xl">Feature 4</h3>
            <p className="text-white text-lg">Description of feature 4</p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Features;