import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/utils/motion";

/** Quiet, confident closing band inviting a consultation. */
export function CtaSection() {
  return (
    <Container as="section" className="py-section">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative overflow-hidden border border-line bg-charcoal px-8 py-16 text-center sm:px-16 sm:py-20"
      >
        {/* Subtle accent rule. */}
        <span className="mx-auto mb-8 block h-px w-12 bg-gold" />
        <h2 className="mx-auto max-w-2xl font-display text-3xl text-ivory sm:text-4xl">
          Discuss your matter in confidence.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/70">
          Arrange an initial consultation to understand your position and the
          options available to you.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            as="link"
            to="/contact"
            className="border-ivory bg-ivory text-charcoal hover:bg-ivory/90"
          >
            Schedule Consultation
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Button>
          <Button
            as="link"
            to="/practice-areas"
            variant="outline"
            className="border-ivory/30 text-ivory hover:border-gold hover:text-gold"
          >
            Explore Practice Areas
          </Button>
        </div>
      </motion.div>
    </Container>
  );
}
