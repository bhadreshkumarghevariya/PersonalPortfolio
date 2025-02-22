import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <Card>
          <CardContent className="p-6">
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href="mailto:bhadresh.dev@gmail.com">
                    <Mail className="h-4 w-4" />
                    bhadresh.dev@gmail.com
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href="tel:+12268085897">
                    <Phone className="h-4 w-4" />
                    +1 226-808-5897
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href="https://www.linkedin.com/in/bhadreshghevariya" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href="https://github.com/bhadreshkumarghevariya" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
