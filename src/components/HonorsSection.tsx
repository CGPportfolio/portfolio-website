import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    name: "SnowPro Associate: Platform Certification",
    issuer: "Snowflake",
    skills: ["Snowflake", "Cloud Data"],
    link: "https://learn.snowflake.com/en/certifications/snowpro-platform/",
  },
  {
    name: "CompTIA Tech+ Certification",
    issuer: "CompTIA",
    skills: ["IT Fundamentals", "Device Management"],
    link: "https://www.comptia.org/certifications/tech",
  },
  {
    name: "CS50AI: Introduction to Artificial Intelligence with Python",
    issuer: "edX",
    skills: ["Python", "Artificial Intelligence"],
    link: "https://cs50.harvard.edu/ai/",
  },
  {
    name: "MCF AI Bootcamp Certificate of Completion",
    issuer: "Marc Cuban Foundation",
    skills: ["Artificial Intelligence"],
    link: "https://markcubanai.org/",
  },
  {
    name: "Device Configuration and Management",
    issuer: "Certiport — A Pearson VUE Business",
    credentialId: "2aYR-XM3D",
    skills: ["Device Configuration", "IT Management"],
    link: "https://certiport.pearsonvue.com/Certifications/ITSpecialist/Certification/Certify.aspx",
  },
  {
    name: "Python",
    issuer: "Certiport — A Pearson VUE Business",
    credentialId: "xahN-s4NA",
    skills: ["Python", "Programming"],
    link: "https://certiport.pearsonvue.com/Certifications/ITSpecialist/Certification/Certify.aspx",
  },
];

const honors = [
  {
    name: "Edwin A. Stevens Scholarship",
    issuer: "Stevens Institute of Technology",
    description: "Merit-based award recognizing students who demonstrate outstanding academic achievement.",
    link: "https://www.stevens.edu/admission-aid/tuition-financial-aid/stevens-scholarships",
  },
  {
    name: "Presidential Scholarship",
    issuer: "Stevens Institute of Technology",
    link: "https://www.stevens.edu/admission-aid/tuition-financial-aid/stevens-scholarships",
  },
];

const CertCard = ({ item, index }: { item: typeof certifications[0]; index: number }) => (
  <motion.a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group flex flex-col justify-between rounded-lg border border-border bg-card p-5 transition-all hover:glow-border"
  >
    <div>
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
        <ExternalLink size={14} className="mt-0.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="text-xs text-muted-foreground">{item.issuer}</p>
      {item.credentialId && (
        <p className="mt-1 text-xs text-muted-foreground">Credential ID: {item.credentialId}</p>
      )}
    </div>
    <div className="mt-3 flex flex-wrap gap-1.5">
      {item.skills.map((skill) => (
        <span key={skill} className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
          {skill}
        </span>
      ))}
    </div>
  </motion.a>
);

const HonorCard = ({ item, index }: { item: typeof honors[0]; index: number }) => (
  <motion.a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group flex flex-col justify-between rounded-lg border border-border border-l-2 border-l-secondary bg-card p-5 transition-all hover:glow-border"
  >
    <div>
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
        <ExternalLink size={14} className="mt-0.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="text-xs text-muted-foreground">{item.issuer}</p>
      {item.description && (
        <p className="mt-2 text-xs text-muted-foreground/80">{item.description}</p>
      )}
    </div>
  </motion.a>
);

const HonorsSection = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-foreground md:text-4xl"
        >
          Honors & Certifications
        </motion.h2>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((item, i) => (
            <CertCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Honors</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {honors.map((item, i) => (
            <HonorCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HonorsSection;
