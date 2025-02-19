import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Stars from "../components/Stars";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CachedImage from "@/components/CachedImage";

const projects = [
  {
    title: "Sthlm AI",
    description: "I've been participating in Sthlm AI's workshops and hackathons to learn more about AI. The home to startups like Lovable.dev",
    image: "/lovable-uploads/sthlm ai.jpeg",
    tags: ["React", "Python", "TensorFlow"]
  },
  {
    title: "Klimato",
    description: "I helped klimato in the early stages with the development of their web app.",
    image: "/lovable-uploads/klimato.png",
    tags: ["Next.js", "Node.js", "MongoDB"]
  },
  {
    title: "&frankly",
    description: "Andfrankly is an app to keep track of the pulse of a workplace and its wellbeing. How is the organization really doing? I was involved in the development of &frankly's web app.",
    image: "/lovable-uploads/&frankly.webp",
    tags: ["React Native", "Firebase", "TypeScript"]
  },
  {
    title: "Delningssystem",
    description: "Real-time monitoring system for urban infrastructure and services.",
    image: "/lovable-uploads/delningssystem.png",
    tags: ["Vue.js", "GraphQL", "D3.js"]
  },
  {
    title: "Filmskapande",
    description: "Real-time monitoring system for urban infrastructure and services.",
    image: "/lovable-uploads/filmskapande.png",
    tags: ["Vue.js", "GraphQL", "D3.js"]
  },
  {
    title: "Kooperativa",
    description: "Real-time monitoring system for urban infrastructure and services.",
    image: "/lovable-uploads/kooperativa.png",
    tags: ["Vue.js", "GraphQL", "D3.js"]
  },
  {
    title: "Röda Oasen",
    description: "Real-time monitoring system for urban infrastructure and services.",
    image: "/lovable-uploads/oasen.png",
    tags: ["Vue.js", "GraphQL", "D3.js"]
  },
  {
    title: "Teater K",
    description: "Real-time monitoring system for urban infrastructure and services.",
    image: "/lovable-uploads/teaterk.png",
    tags: ["Vue.js", "GraphQL", "D3.js"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-portal-blue to-portal-purple">
      <Stars />
      <Navbar />
      
      <main className="relative pt-32 px-6 pb-20 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              My Portfolio
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <Card className="bg-white bg-opacity-10 backdrop-blur-lg border-none text-white hover:bg-opacity-20 transition-all">
                    <CardHeader>
                      <CachedImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                      />
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="text-white text-opacity-80">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
