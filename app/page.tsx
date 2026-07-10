import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { HomeLab } from "@/components/sections/HomeLab";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { WriteupsTeaser } from "@/components/sections/WriteupsTeaser";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <HomeLab />
      <Experience />
      <Projects />
      <WriteupsTeaser />
      <Education />
      <Contact />
    </>
  );
}
