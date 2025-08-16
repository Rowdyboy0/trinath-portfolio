"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowRight, Sparkles, Download, Shield, ChartLine, GraduationCap, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Tailwind utility: Add this gradient to your global CSS if needed
// .hero-gradient { background: radial-gradient(1200px 600px at 100% -10%, rgba(59,130,246,0.15), transparent), radial-gradient(1000px 600px at -10% 10%, rgba(236,72,153,0.15), transparent); }

const Section = ({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);

const Nav = () => (
  <div className="sticky top-0 z-50 backdrop-blur border-b bg-background/70">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="#home" className="font-semibold tracking-tight">Trinath <span className="text-primary">Konduri</span></a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#about" className="hover:text-primary transition">About</a>
        <a href="#skills" className="hover:text-primary transition">Skills</a>
        <a href="#projects" className="hover:text-primary transition">Projects</a>
        <a href="#education" className="hover:text-primary transition">Education</a>
        <a href="#certs" className="hover:text-primary transition">Certifications</a>
        <a href="#contact" className="hover:text-primary transition">Contact</a>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="sm">
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" /> Resume
          </a>
        </Button>
        <Button asChild size="sm">
          <a href="#contact">Hire Me <ArrowRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section id="home" className="hero-gradient pt-20 md:pt-28 pb-10 md:pb-16 border-b">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm mb-6">
          <Sparkles className="h-4 w-4" /> Open to Internships & Roles
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Cybersecurity‑minded <span className="text-primary">AI & Data</span> Engineer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          I design intelligent systems that are safe by default — combining <strong>AI</strong>, <strong>data analysis</strong>, and <strong>secure software</strong> to solve real‑world problems.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href="#projects">
              View Projects
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.linkedin.com/in/konduri-thrinath-1873a22a4" target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-4 w-4"/> LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/opshotkt" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4"/> GitHub
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
        <div className="aspect-square rounded-3xl border overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 grid place-items-center">
          <div className="text-center p-8">
            <Shield className="h-12 w-12 md:h-16 md:w-16 mb-4"/>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Focus</p>
            <h3 className="text-xl md:text-2xl font-semibold">Cybersecurity • AI • Data</h3>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SkillPill = ({ label }: { label: string }) => (
  <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full">{label}</Badge>
);

const Skills = () => (
  <Section id="skills" title="Technical Skills" subtitle="Tools I use to build reliable, secure systems.">
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Programming & Core</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <SkillPill label="Python"/>
          <SkillPill label="Java"/>
          <SkillPill label="Data Structures"/>
          <SkillPill label="Web Development"/>
          <SkillPill label="Data Analysis"/>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Libraries & Data</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <SkillPill label="NumPy"/>
          <SkillPill label="Pandas"/>
          <SkillPill label="Matplotlib"/>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const ProjectCard = ({ icon: Icon, title, tagline, bullets, chips, link }: { icon: any; title: string; tagline: string; bullets: string[]; chips: string[]; link?: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="h-10 w-10 rounded-xl grid place-items-center border">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <CardTitle className="leading-tight">{title}</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">{tagline}</p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c, i) => <Badge key={i} variant="outline">{c}</Badge>)}
        </div>
        {link && (
          <div className="mt-4">
            <Button asChild variant="ghost" size="sm">
              <a href={link} target="_blank" rel="noreferrer">View Project <ArrowRight className="ml-2 h-4 w-4"/></a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

const Projects = () => (
  <Section id="projects" title="Projects" subtitle="A selection of things I’ve built and shipped.">
    <div className="grid md:grid-cols-2 gap-6">
      <ProjectCard
        icon={Shield}
        title="CyberGPT"
        tagline="A chatbot that answers only cybersecurity questions"
        bullets={[
          "Processes and responds exclusively to security‑related queries with precise, scoped answers.",
          "Improves access to threat intelligence across pentesting, network security, vulnerabilities, and IR.",
        ]}
        chips={["LLMs", "Security", "RAG", "Chatbot"]}
      />
      <ProjectCard
        icon={ChartLine}
        title="TradePulse"
        tagline="Accurate signals, anytime, anywhere"
        bullets={[
          "Pinpoints market opportunities with a high‑signal strategy framework.",
          "Lets traders test and refine strategies to build an edge.",
        ]}
        chips={["Data", "Backtesting", "Dashboards"]}
      />
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" title="Education" subtitle="Strong foundations in AI, data and computation.">
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="h-10 w-10 rounded-xl grid place-items-center border"><GraduationCap className="h-5 w-5"/></div>
          <div>
            <CardTitle className="leading-tight">B.Tech — AI & Data Science</CardTitle>
            <p className="text-sm text-muted-foreground">Dhanalakshmi Srinivasan University, Tamil Nadu (2022–2026)</p>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="h-10 w-10 rounded-xl grid place-items-center border"><GraduationCap className="h-5 w-5"/></div>
          <div>
            <CardTitle className="leading-tight">M.P.C</CardTitle>
            <p className="text-sm text-muted-foreground">Andhra Pradesh Model School & College (2020)</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  </Section>
);

const Certifications = () => (
  <Section id="certs" title="Certifications & Workshops">
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="h-10 w-10 rounded-xl grid place-items-center border"><Award className="h-5 w-5"/></div>
          <div>
            <CardTitle className="leading-tight">Python Programming Workshop</CardTitle>
            <p className="text-sm text-muted-foreground">MTTF</p>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="h-10 w-10 rounded-xl grid place-items-center border"><Award className="h-5 w-5"/></div>
          <div>
            <CardTitle className="leading-tight">Data Analysis Using Python</CardTitle>
            <p className="text-sm text-muted-foreground">IBM Developer Skills Network</p>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="h-10 w-10 rounded-xl grid place-items-center border"><Award className="h-5 w-5"/></div>
          <div>
            <CardTitle className="leading-tight">Web3 & Blockchain Workshop</CardTitle>
            <p className="text-sm text-muted-foreground">BITSCRUNCH</p>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="h-10 w-10 rounded-xl grid place-items-center border"><Award className="h-5 w-5"/></div>
          <div>
            <CardTitle className="leading-tight">Hack‑o‑Verse 2024 Participant</CardTitle>
            <p className="text-sm text-muted-foreground">Certificate of Participation</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Let’s Work Together" subtitle="I’m available for internships and junior roles in AI/Data/Cybersecurity.">
    <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a href="mailto:kondurithrinath@gmail.com" className="underline">kondurithrinath@gmail.com</a></p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href="tel:+917993163365" className="underline">+91 7993163365</a></p>
          <div className="flex gap-2 pt-2">
            <Button asChild variant="secondary" size="sm"><a href="https://www.linkedin.com/in/konduri-thrinath-1873a22a4" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4"/>LinkedIn</a></Button>
            <Button asChild variant="secondary" size="sm"><a href="https://github.com/opshotkt" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4"/>GitHub</a></Button>
            <Button asChild variant="outline" size="sm"><a href="/resume.pdf" download><Download className="mr-2 h-4 w-4"/>Resume</a></Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>What I’m Looking For</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Roles where I can apply AI and data skills to build secure, reliable products; contribute to threat‑aware systems; and grow with a team that values craftsmanship, curiosity, and ownership.
        </CardContent>
      </Card>
    </div>
  </Section>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <main>
        <Section id="about" title="About Me" subtitle="Computer science student specialized in cybersecurity, responsible and detail‑oriented.">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Who I Am</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-7">
                I’m Trinath Konduri — an AI & Data Science undergrad with a strong interest in defensive design and trustworthy AI. I enjoy prototyping fast, validating with data, and shipping clean, maintainable code.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Built <strong>CyberGPT</strong> — a domain‑restricted chatbot for security queries.</li>
                  <li>Designed <strong>TradePulse</strong> — a trading intelligence platform with strategy testing.</li>
                  <li>Hands‑on with Python, Java, NumPy, Pandas, Matplotlib, and data tooling.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Trinath Konduri. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="mailto:kondurithrinath@gmail.com" className="underline flex items-center gap-2"><Mail className="h-4 w-4"/> Email</a>
            <a href="https://www.linkedin.com/in/konduri-thrinath-1873a22a4" target="_blank" rel="noreferrer" className="underline flex items-center gap-2"><Linkedin className="h-4 w-4"/> LinkedIn</a>
            <a href="https://github.com/opshotkt" target="_blank" rel="noreferrer" className="underline flex items-center gap-2"><Github className="h-4 w-4"/> GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
