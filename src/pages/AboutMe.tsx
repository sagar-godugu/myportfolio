import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const techStack = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "TailwindCSS",
  "Shadcn UI",
  "TypeScript",
  "OpenAI API",
  "Git",
  "Vercel",
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-8 md:px-16 bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-balance">
          About Me
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-2xl border-muted bg-background/80 backdrop-blur-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <img
              src="/assests/profile.jpeg"
              alt="Sagar Godugu"
              className="w-32 h-32 rounded-full object-cover border border-gray-300 dark:border-gray-700 shadow-md"
            />

            <CardContent className="p-0 space-y-4">
              <p className="text-lg leading-relaxed text-balance">
                Hello! I’m <strong>Sagar Godugu</strong>, a passionate{" "}
                <strong>MERN Stack Developer</strong> with a growing interest in AI & machine intelligence.
                I love building scalable web apps with clean code, responsive UI, and intelligent features.
              </p>

              <Separator />

              <div>
                <p className="mb-2 text-sm font-semibold text-muted-foreground">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-gray-300 dark:border-gray-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
