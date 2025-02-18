
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Stars from "../components/Stars";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-portal-blue to-portal-purple">
      <Stars />
      <Navbar />
      
      <main className="relative pt-32 px-6 pb-20 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              About Me
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-48 h-48">
                  <Avatar className="w-48 h-48">
                    <AvatarImage
                      src="/lovable-uploads/artazie.jpeg"
                      alt="Profile"
                      className="object-cover"
                      loading="eager"
                      width={192}
                      height={192}
                    />
                    <AvatarFallback>
                      <Skeleton className="w-48 h-48 rounded-full" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-white">
                    Innovation & Impact
                  </h2>
                  <p className="text-white text-opacity-90 text-lg">
                    As a passionate technologist and socioeconomic innovator, I'm dedicated to creating solutions that bridge technological advancement with social and economic progress.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Vision</h3>
                  <p className="text-white text-opacity-90">
                    I envision a world where technology serves as a catalyst for positive social change and economic empowerment, creating opportunities for everyone to thrive.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Mission</h3>
                  <p className="text-white text-opacity-90">
                    My mission is to develop innovative solutions that address real-world challenges, focusing on the intersection of social impact and economic sustainability.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
