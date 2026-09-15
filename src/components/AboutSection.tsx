import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="section-padding relative z-10">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-3xl font-bold text-foreground md:text-4xl"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            <p>
              I'm a Computer Science and AI student at Stevens Institute of Technology, Class of 2030.
              Growing up, I moved between languages: English and Russian. Each one was a bridge into
              a different part of my family. Coding became another language, but one I wanted to make
              welcoming for everyone.
            </p>
            <p>
              That mission led me to found the South Vibe Coding Club, where students build real
              projects using vibe coding, a development approach that uses AI to generate code from
              natural language. The banner at our first showcase said it best:{" "}
              <span className="text-gradient font-semibold">"Create with your words."</span>
            </p>
            <p>
              My technical interests live at the intersection of AI and data engineering. I'm a
              certified SnowPro Associate, have spoken at the Miami Snowflake User Group, and I'm
              currently building WaterQualityFL, a data platform making environmental data accessible
              to Florida communities.
            </p>
            <p>
              I started coding in second grade with Code.org, where a yellow digital bee followed my
              commands. That curiosity never left.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
