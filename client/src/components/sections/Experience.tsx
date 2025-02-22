import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with product catalog, shopping cart, and secure payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "https://github.com/bhadreshkumarghevariya",
    achievements: [
      "Implemented responsive UI using React and Tailwind CSS",
      "Built RESTful API endpoints with Node.js and Express",
      "Integrated Stripe payment gateway for secure transactions",
      "Implemented user authentication and authorization"
    ]
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Firebase", "Material-UI"],
    liveLink: "#",
    githubLink: "https://github.com/bhadreshkumarghevariya",
    achievements: [
      "Developed real-time data synchronization using Firebase",
      "Implemented drag-and-drop task organization",
      "Created team collaboration features",
      "Built responsive design for mobile and desktop"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Link className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}