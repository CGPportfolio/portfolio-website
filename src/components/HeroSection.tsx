import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, FileText, Linkedin } from "lucide-react";

const HeroSection = () => {
  const [peeking, setPeeking] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHoverStart = () => setPeeking(true);
  const handleHoverEnd = () => setPeeking(false);

  return (
    <motion.section
      className="relative overflow-hidden bg-background"
      animate={{ height: peeking ? "70vh" : "100vh" }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      {/* Content absolutely positioned at a fixed top offset so it doesn't move */}
      <div
        className="absolute inset-x-0 top-0 flex items-center justify-center px-6"
        style={{ height: "100vh" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-mono text-sm text-primary"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 cursor-pointer text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Charles Goncharov-Pitts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 font-mono text-sm text-muted-foreground md:text-base"
          >
            CS & AI Student · Stevens Institute of Technology · Class of 2030
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Building at the intersection of AI, data engineering, and human creativity.
            I believe coding is a language anyone can speak.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            >
              View My Work <ArrowDown size={16} />
            </motion.a>
            <a
              href="https://www.linkedin.com/in/charles-goncharov-pitts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/charleshappy07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="/CGPResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <FileText size={16} /> Resume
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
