import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "../components/Navbar";
import Stars from "../components/Stars";
import CachedImage from "@/components/CachedImage";

const engagements = [
  {
    name: "Innovation Hub",
    image: "/placeholder.svg",
    role: "Project Lead",
    description: "Leading a collaborative initiative focused on sustainable technology solutions and community engagement.",
    period: "2023 - Present"
  },
  {
    name: "Tech for Good",
    image: "/placeholder.svg",
    role: "Advisory Board Member",
    description: "Contributing to strategic decisions and program development for social impact technology projects.",
    period: "2022 - Present"
  },
  {
    name: "Digital Inclusion Initiative",
    image: "/placeholder.svg",
    role: "Program Coordinator",
    description: "Coordinating programs to bridge the digital divide and provide tech education to underserved communities.",
    period: "2023 - Present"
  },
  {
    name: "Sustainability Network",
    image: "/placeholder.svg",
    role: "Active Member",
    description: "Participating in collaborative projects focused on environmental sustainability and social responsibility.",
    period: "2022 - Present"
  }
];

const recommendations = [
  {
    name: "Green Future Alliance",
    image: "/placeholder.svg",
    mission: "Dedicated to environmental conservation and sustainable development practices.",
    alignment: "Shares our commitment to creating a sustainable future through innovative solutions."
  },
  {
    name: "Tech Education Foundation",
    image: "/placeholder.svg",
    mission: "Providing accessible technology education to underserved communities.",
    alignment: "Aligns with our vision of inclusive digital literacy and technological empowerment."
  },
  {
    name: "Social Innovation Lab",
    image: "/placeholder.svg",
    mission: "Fostering social innovation through technology and community collaboration.",
    alignment: "Reflects our dedication to using technology for positive social impact."
  },
  {
    name: "Digital Rights Initiative",
    image: "/placeholder.svg",
    mission: "Advocating for digital rights and ethical technology practices.",
    alignment: "Supports our commitment to responsible and ethical technology development."
  }
];

export default function Engagement() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-portal-blue to-portal-purple">
      <Stars />
      <Navbar />
      
      <main className="relative pt-32 px-6 pb-20 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Engagements Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Engagement</h1>
            <p className="text-white text-opacity-90 text-lg text-center mb-8">
          Showcasing the projects, initiatives, and associations where I actively participate and contribute.
        </p>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {engagements.map((engagement, index) => (
            <Card key={index} className="overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg border-0">
              <div className="aspect-video">
                <CachedImage
                  src={engagement.image}
                  alt={engagement.name}
                  className="object-cover w-full h-full"
                  wrapperClassName="h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{engagement.name}</h3>
                <p className="text-sm text-white text-opacity-70 mb-2">{engagement.role}</p>
                <p className="text-sm text-white text-opacity-90 mb-4">{engagement.description}</p>
                <p className="text-sm text-white text-opacity-70">{engagement.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
          </motion.section>

          <Separator className="my-12 bg-white opacity-20" />

          {/* Recommendations Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Recommendation Organizations</h2>
            <p className="text-white text-opacity-90 text-lg text-center mb-8">
          Organizations that align with my values and whose missions I support.
        </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((org, index) => (
            <Card key={index} className="overflow-hidden bg-white bg-opacity-10 backdrop-blur-lg border-0">
              <div className="aspect-video">
                <CachedImage
                  src={org.image}
                  alt={org.name}
                  className="object-cover w-full h-full"
                  wrapperClassName="h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{org.name}</h3>
                <p className="text-sm text-white text-opacity-90 mb-4">{org.mission}</p>
                <p className="text-sm text-white text-opacity-70">{org.alignment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
