import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { projects } from "@/constants";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-8 md:px-16 bg-gray-50 dark:bg-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white text-balance">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                className="hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
                tabIndex={0}
                aria-label={`Project: ${project.title}`}
              >
                <CardContent className="space-y-4">
                  <CardTitle className="text-lg">{project.title}</CardTitle>

                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-gray-300 dark:border-gray-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex pt-4">
                    {/* <Button
                      asChild
                      size="sm"
                      variant="default"
                      className="flex-1"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        Live Demo
                      </a>
                    </Button> */}

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code of ${project.title}`}
                      >
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
