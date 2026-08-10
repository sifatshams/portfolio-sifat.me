import { SectionSEO } from "@/components/section-seo";
import { About } from "@/components/sections/about";
import { Certificates } from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { GithubStats } from "@/components/sections/github-stats";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <div className="relative">
        <SectionSEO title="Sifat Bin Anwar | Full Stack Developer" />
        <Hero />
      </div>

      <div className="relative">
        <SectionSEO title="About Me | Background & Philosophy" />
        <About />
      </div>

      <div className="relative">
        <SectionSEO title="Tech Stack | Core Skills & Expertise" />
        <Skills />
      </div>

      <div className="relative">
        <SectionSEO title="Featured Works | Selected Projects" />
        <Projects />
      </div>

      <div className="relative">
        <SectionSEO title="Career & Work Experience" />
        <Experience />
      </div>

      <div className="relative">
        <SectionSEO title="Certifications & Accomplishments" />
        <Certificates />
      </div>

      <div className="relative">
        <SectionSEO title="Open Source & GitHub Analytics" />
        <GithubStats />
      </div>

      <div className="relative">
        <SectionSEO title="Get In Touch — Let's Build Together" />
        <Contact />
      </div>
    </>
  );
}
