import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Stars from "../components/Stars";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "A machine learning platform that provides predictive analytics for business intelligence.",
    image: "/placeholder.svg",
    tags: ["React", "Python", "TensorFlow"]
  },
  {
    title: "E-commerce Solution",
    description: "A scalable e-commerce platform with real-time inventory management.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Node.js", "MongoDB"]
  },
  {
    title: "Mobile Health App",
    description: "A healthcare tracking application for monitoring patient wellness.",
    image: "/placeholder.svg",
    tags: ["React Native", "Firebase", "TypeScript"]
  },
  {
    title: "Smart City Dashboard",
    description: "Real-time monitoring system for urban infrastructure and services.",
    image: "/placeholder.svg",
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
                      <img
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
