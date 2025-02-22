import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Frontend": ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind"],
  "Backend": ["Node.js", "Express", "MongoDB", "REST APIs", "SQL"],
  "Cloud & DevOps": ["AWS", "Linux", "Git", "Docker"],
  "Other": ["Agile", "Problem Solving", "Team Leadership"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-custom-black">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-custom-black">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge 
                      key={skill} 
                      className="border-2 border-transparent bg-white text-custom-black hover:text-primary transition-colors"
                      style={{
                        borderImage: 'linear-gradient(90deg, #8744AD 0%, #0067E5 100%) 1',
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}