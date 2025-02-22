import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ProSystemz - Custom PC Builder E-commerce Platform",
    description: "A full-stack e-commerce platform offering a user-friendly experience for custom PC assembly with intelligent compatibility checking.",
    period: "May 2023 - Sep 2023",
    organization: "Conestoga College",
    technologies: ["React.js", "Node.js", "MongoDB", "GraphQL", "Stripe"],
    githubLink: "https://github.com/bhadreshkumarghevariya",
    achievements: [
      "Developed a full-stack e-commerce platform using ReactJS, Node.js and MongoDB for custom PC assembly",
      "Implemented an intelligent compatibility check system to ensure hardware compatibility",
      "Employed Agile methodology and Trello for project management",
      "Integrated Stripe for secure payment processing",
      "Optimized performance with lazy loading and GraphQL",
      "Gained experience in cloud deployment processes"
    ]
  },
  {
    title: "SCMS - Supply Chain Management Software",
    description: "A comprehensive supply chain management solution with automated processes and efficient inventory management.",
    period: "Jan 2021 - Jun 2021",
    organization: "Uka Tarsadia University",
    technologies: ["PHP", "JSX", "MySQL", "Bootstrap", "CSS"],
    githubLink: "https://github.com/bhadreshkumarghevariya",
    achievements: [
      "Developed SCMS using PHP, JSX and MySQL",
      "Implemented a responsive user interface with Bootstrap and CSS",
      "Collaborated with team members using GitHub for efficient project management",
      "Optimized database queries for inventory and supplier data management",
      "Automated key supply chain processes including notifications and report generation",
      "Enhanced operational efficiency through intelligent design and functionality"
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
                    <p className="text-muted-foreground mt-1">{project.organization}</p>
                    <p className="text-muted-foreground">{project.period}</p>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
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
                    <li key={i} className="text-muted-foreground">
                      {achievement}
                    </li>
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