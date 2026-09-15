import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  links: { label: string; href: string; icon: "github" | "external" }[];
}

const projects: Project[] = [
  {
    title: "Snowflake Data Projects",
    url: "https://waterqualityfl.com/data",
    description:
      "Hands-on data engineering projects built on Snowflake's cloud platform, including pipelines, queries, and dashboards. Presented at the Miami Snowflake User Group meetup in Doral, FL.",
    tags: ["Snowflake", "SQL", "Cloud Data", "SnowPro Associate"],
    links: [{ label: "GitHub", href: "https://github.com/CGPportfolio", icon: "github" }],
  },
  {
    title: "WaterQualityFL",
    url: "https://waterqualityfl.com",
    description:
      "A data platform tracking and visualizing water quality across Florida. Built to make environmental data accessible and actionable for communities.",
    tags: ["Python", "Data Engineering", "Snowflake", "AI"],
    links: [
      { label: "GitHub", href: "https://github.com/CGPportfolio", icon: "github" },
      { label: "Live Demo", href: "https://waterqualityfl.com", icon: "external" },
    ],
  },
  {
    title: "South Vibe Coding Club",
    url: "https://southvibecoding.com/",
    description:
      "Founded a coding club where high schoolers build real projects using AI-assisted vibe coding — natural language turned into websites and apps. Members have shipped a basketball stats tracker, car marketplace, accounting app, and a Naruto wiki.",
    tags: ["Vibe Coding", "AI", "Community", "Founder"],
    links: [{ label: "Club Website", href: "https://southvibecoding.com/", icon: "external" }],
  },
  {
    title: "AI Tools & Experiments",
    description:
      "Coursework and independent projects from CS50AI, the MCF AI Bootcamp, and Stevens coursework — spanning Python, machine learning fundamentals, and applied AI.",
    tags: ["Python", "AI", "CS50AI", "Machine Learning"],
    links: [{ label: "GitHub", href: "https://github.com/CGPportfolio", icon: "github" }],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Things I've built, presented, and shipped.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url || undefined}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noopener noreferrer" : undefined}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:glow-border-hover"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <ExternalLink size={14} className="mt-1 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.icon === "github" ? <Github size={14} /> : <ExternalLink size={14} />}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
