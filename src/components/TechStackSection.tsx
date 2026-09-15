import { motion } from "framer-motion";

interface StackCategory {
  title: string;
  items: string[];
}

const stack: StackCategory[] = [
  { title: "Languages", items: ["Python", "SQL", "JavaScript", "HTML/CSS"] },
  { title: "Platforms & Cloud", items: ["Snowflake", "AWS (basic)"] },
  { title: "AI & Data", items: ["CS50AI", "MCF AI Bootcamp", "Machine Learning fundamentals"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Lovable"] },
  {
    title: "Certifications",
    items: ["SnowPro Associate (Snowflake, Aug 2025)", "CompTIA Tech+ (Dec 2025)"],
  },
];

const TechStackSection = () => {
  return (
    <section id="techstack" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-foreground md:text-4xl"
        >
          Tech Stack
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground transition-colors hover:border-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
