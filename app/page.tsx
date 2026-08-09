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
        <SectionSEO title="Sifat Bin Anwar — Full Stack Web Developer" />
        <Hero />
      </div>

      <div className="relative">
        <SectionSEO title="About — Sifat Bin Anwar" />
        <About />
      </div>

      <div className="relative">
        <SectionSEO title="Skills & Tech Stack — Sifat Bin Anwar" />
        <Skills />
      </div>

      <div className="relative">
        <SectionSEO title="Projects — Sifat Bin Anwar" />
        <Projects />
      </div>

      <div className="relative">
        <SectionSEO title="Experience — Sifat Bin Anwar" />
        <Experience />
      </div>

      <div className="relative">
        <SectionSEO title="Certificates — Sifat Bin Anwar" />
        <Certificates />
      </div>

      <div className="relative">
        <SectionSEO title="GitHub Activity — Sifat Bin Anwar" />
        <GithubStats />
      </div>

      <div className="relative">
        <SectionSEO title="Contact & Hire — Sifat Bin Anwar" />
        <Contact />
      </div>
    </>
  );
}
