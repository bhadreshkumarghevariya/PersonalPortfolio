import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, 
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, 
  SiAmazon, SiLinux, SiGit, SiDocker
} from "react-icons/si";

const skills = {
  "Frontend": [
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Tailwind", icon: SiTailwindcss }
  ],
  "Backend": [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb }
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: SiAmazon },
    { name: "Linux", icon: SiLinux },
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker }
  ],
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
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    typeof skill === 'string' ? (
                      <Badge 
                        key={skill}
                        className="border-2 border-transparent bg-white text-custom-black hover:text-primary hover:scale-105 transition-all"
                        style={{
                          borderImage: 'linear-gradient(90deg, #8744AD 0%, #0067E5 100%) 1',
                        }}
                      >
                        {skill}
                      </Badge>
                    ) : (
                      <div 
                        key={skill.name}
                        className="flex items-center gap-2 p-2 rounded-md hover:text-primary hover:scale-105 transition-all cursor-pointer"
                        title={skill.name}
                      >
                        <skill.icon className="w-6 h-6" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    )
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