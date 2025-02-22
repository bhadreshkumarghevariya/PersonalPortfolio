import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg">
                I'm a passionate Software Engineer with expertise in building scalable, user-friendly web applications. My focus is on creating efficient solutions that drive business value while maintaining high code quality and user satisfaction.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Built scalable web applications using ReactJS, Node.js and MongoDB</li>
                <li>Developed smart systems for e-commerce platforms ensuring component compatibility</li>
                <li>Led Agile sprints and collaborated effectively with team members</li>
                <li>Integrated secure payment processing systems enhancing platform reliability</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
