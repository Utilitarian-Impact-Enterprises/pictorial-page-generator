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

        <Accordion type="multiple">
          <AccordionItem value="socio">
            <AccordionTrigger className="text-white text-2xl">Socio</AccordionTrigger>
            <AccordionContent className="text-white text-xl">
              <p className="mb-4">
                Social and cultural fabric. Normcreativity. 
                Finding new constellations, methods and processes of how to coordinate ourselves to take care of all of our needs.
              </p>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Sense-making, decision-making, Collective intelligence. Governance & Culture. Process facilitation.</li>
                <li>Corporate social responsibility.</li>
                <li>Support collaborative decision-making processes</li>
                <li>Building local societies/communities. With spaces accommodating people's needs.</li>
                <li>Researching insights. Mapping things out. Societal analysis.</li>
                <li>Coordination of actors in cooperation. Creating experiences, events, forums.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="economic">
            <AccordionTrigger className="text-white text-2xl">Economic</AccordionTrigger>
            <AccordionContent className="text-white text-xl">
              <p className="mb-4">Reimagining economic systems to promote sustainable prosperity for all. Economic innovations include:</p>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Sharing Economy. Collaborative consumption. Peer-to-peer exchange. Resource sharing.</li>
                <li>Impact funding allocation mechanisms. Picking up on signals of needs + Deliberative processes including expertise and affected parties.</li>
                <li>Sustainable resource allocation systems</li>
                <li>Fair market mechanisms and platforms</li>
                <li>Economic opportunity creation frameworks</li>
                <li>Capital/budget/resource/savings allocation for sustainability. Funds investment guidance towards ventures making a difference.</li>
                <li>Labor market. Expanding the amount of meaningful jobs. Guiding/matching human resources.</li>
                <li>Develop a future economy that is productive and balanced. The economy that keeps pace with developments and ensures prosperity for all.</li>
                <li>Complementary/alternative currencies and mutual credit.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="technology">
            <AccordionTrigger className="text-white text-2xl">Technology</AccordionTrigger>
            <AccordionContent className="text-white text-xl">
              <p className="mb-4">
                Leveraging technology to capture frameworks that guide us through processes that elevate our life quality of life.
              </p>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>AI-driven social impact solutions</li>
                <li>Blockchain for transparent governance</li>
                <li>Data analytics for community insights</li>
                <li>Platform technologies for collective action</li>
                <li>Frameworks that facilitate socioeconomic democracy enabled by digital technology.</li>
                <li>Democratizing digital space. Open source & Decentralized tech. Creating and popularizing alternatives to the status quo.</li>
                <li>IT tools for running organizations. And customized solutions with programming when needed.</li>
                <li>Content creation. Audio, podcasts, videos, films, documentaries, interactive stories. Organic Marketing.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <br />
        <br />

      </div>
    </section>;
};
export default Features;