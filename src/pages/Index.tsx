
import { motion } from "framer-motion";
import Stars from "../components/Stars";
import Navbar from "../components/Navbar";
import Features from "../components/Features";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-portal-blue to-portal-purple">
      <Stars />
      <Navbar />
      
      <main className="relative pb-20 z-10">
        <section className="pt-32 px-6 min-h-screen flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-4xl font-semibold text-white leading-tight">
              Innovations in Socioeconomic technology
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white text-opacity-90 text-lg md:text-xl max-w-3xl mx-auto"
            >
              What does the world need? What would make a crucial difference and lead us towards common prosperity? 
              Those questions occupy my imagination. 
              And I am here to direct all my skills and capabilities towards innovations in our socioeconomic technologies, 
              enabling a thriving and balanced existence of all across spacetime.
            </motion.p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 w-full max-w-4xl mx-auto"
          >
            <div className="relative aspect-[16/9] bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 animate-float">
              <img
                src="/lovable-uploads/artazie.jpeg"
                alt="Portal Interface"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </section>

        <Features />
      </main>
    </div>
  );
};

export default Index;
