import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Bhadresh Ghevariya
          </h1>
          <p className="text-xl sm:text-2xl text-custom-black mb-8">
            Software Engineer | Full Stack Developer
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-12 text-muted-foreground">
            Specializing in building scalable web applications with React, Node.js, and modern technologies
          </p>
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <a href="#contact">
              Get in Touch
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}