import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Web Development - Post Graduation Certificate",
    school: "Conestoga College",
    field: "Information Technology",
    period: "May 2022 - September 2023"
  },
  {
    degree: "Bachelor of Science",
    school: "Uka Tarsadia University",
    field: "Information Technology",
    period: "June 2018 - May 2021"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <p className="text-muted-foreground">{edu.field}</p>
                  </div>
                  <Badge variant="secondary">{edu.period}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
