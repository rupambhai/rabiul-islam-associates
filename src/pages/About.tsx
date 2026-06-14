import { motion } from "framer-motion";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { CtaSection } from "@/sections/CtaSection";
import { about } from "@/data/chamber";
import { site } from "@/data/site";
import { fadeUp, staggerContainer } from "@/utils/motion";

export default function About() {
  return (
    <>
      <Seo
        title="About the Chamber"
        path="/about"
        description="An introduction to the chamber, its legal philosophy, credentials and Supreme Court practice in Bangladesh."
      />

      {/* Intro / split layout */}
      <Container as="section" className="py-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-prose"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">
            About
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-display-lg">
            A chamber built on rigour and discretion.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-muted"
          >
            {about.intro}
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-sm lg:sticky lg:top-28 lg:max-w-none lg:self-start"
          >
            <PortraitPlaceholder />
            <p className="mt-4 font-display text-lg text-ink">{site.advocate}</p>
            <p className="text-sm text-muted">{site.tagline}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12"
          >
            {/* Biography */}
            <motion.div variants={fadeUp}>
              <h2 className="border-b border-line pb-3 font-display text-2xl text-ink">
                Biography
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/90">
                {about.biography.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div variants={fadeUp}>
              <h2 className="border-b border-line pb-3 font-display text-2xl text-ink">
                Legal Philosophy
              </h2>
              <p className="mt-5 text-base leading-relaxed text-charcoal/90">
                {about.philosophy}
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div variants={fadeUp}>
              <h2 className="border-b border-line pb-3 font-display text-2xl text-ink">
                Credentials
              </h2>
              <dl className="mt-5 divide-y divide-line">
                {about.credentials.map((credential) => (
                  <div
                    key={credential.label}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <dt className="text-sm text-charcoal">{credential.label}</dt>
                    <dd className="text-sm text-muted">{credential.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Mission */}
            <motion.div variants={fadeUp} className="border-l-2 border-gold pl-6">
              <h2 className="eyebrow mb-3">Chamber Mission</h2>
              <p className="font-display text-xl italic leading-relaxed text-ink">
                {about.mission}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <CtaSection />
    </>
  );
}
