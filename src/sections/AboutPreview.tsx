import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/Portrait";
import { about } from "@/data/chamber";
import { fadeUp, staggerContainer } from "@/utils/motion";

/** Condensed About section on the home page: split layout with stats. */
export function AboutPreview() {
  return (
    <Container as="section" className="py-section">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Portrait */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-sm lg:max-w-none"
        >
          <Portrait />
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">
            About the Chamber
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-display-md">
            Considered counsel for consequential matters.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-prose text-base leading-relaxed text-muted sm:text-lg"
          >
            {about.intro}
          </motion.p>

          {/* Stats with thin dividers */}
          <motion.dl
            variants={fadeUp}
            className="mt-10 grid grid-cols-3 divide-x divide-line border-y border-line"
          >
            {about.stats.map((stat) => (
              <div key={stat.label} className="px-4 py-6 first:pl-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl text-ink sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-xs leading-snug text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={fadeUp} className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-charcoal transition-colors hover:text-gold"
            >
              More about the chamber
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}
