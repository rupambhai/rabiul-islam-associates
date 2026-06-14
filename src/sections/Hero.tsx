import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

// Local stagger tuned for the hero's first-paint entrance.
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Full-screen landing hero: minimal, typography-led, with two CTAs. */
export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center bg-ivory md:min-h-[calc(100svh-5rem)]">
      <Container className="relative py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p variants={item} className="eyebrow mb-6">
            Supreme Court Lawyer · {site.tagline}
          </motion.p>

          <motion.h1 variants={item} className="text-display-xl">
            Strategic Legal Counsel for Complex Matters.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            Focused legal representation in constitutional, corporate, civil and
            criminal matters before the courts of Bangladesh.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button as="link" to="/contact">
              Schedule Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Button>
            <Button as="link" to="/practice-areas" variant="outline">
              Practice Areas
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Hairline base rule grounding the hero. */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
    </section>
  );
}
