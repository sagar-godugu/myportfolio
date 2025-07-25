// src/components/Home.tsx or src/pages/Home.tsx
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import AboutSection from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-balance"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-yellow-400">Sagar Godugu</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          MERN Stack Developer & AI Enthusiast — crafting modern, responsive web apps and intelligent user experiences.
        </motion.p>

        {/* Call-to-action buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 transition">
            <a href="/assets/resume.pdf" download>
              Download Resume
            </a>
          </Button>

          <Button variant="outline" asChild size="lg">
            <HashLink smooth to="/#contact">
              Hire Me
            </HashLink>
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 text-2xl pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="mailto:gsagar.ktkr@gmail.com" className="hover:text-yellow-400">
            <FaEnvelope />
          </a>
          <a href="https://github.com/sagar-godugu" target="_blank" rel="noopener" className="hover:text-yellow-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sagargodugu" target="_blank" rel="noopener" className="hover:text-yellow-400">
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
    </>
  );
};

export default Home;
