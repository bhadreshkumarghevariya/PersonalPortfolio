import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Engineer",
    company: "Company Name",
    period: "2021 - Present",
    achievements: [
      "Built scalable web applications using ReactJS, Node.js and MongoDB",
      "Developed smart systems for e-commerce platforms",
      "Led Agile sprints and collaborated with team members",
      "Integrated secure payment processing systems"
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
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="secondary">{exp.period}</Badge>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  {exp.achievements.map((achievement, i) => (
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
