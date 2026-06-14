import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyChoose } from "@/data/chamber";
import { fadeUp, staggerContainer } from "@/utils/motion";

/**
 * "Why choose this chamber" — value propositions on a subtly raised surface
 * panel, with elegant iconography and a single fade-up reveal per item.
 */
export function WhyChooseSection() {
  return (
    <section className="border-y border-line bg-surface">
      <Container className="py-section">
        <SectionHeader
          eyebrow="Why This Chamber"
          title="A practice defined by rigour and discretion."
          description="The principles that shape every engagement, from first consultation to final judgment."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChoose.map((value) => {
            const Icon = value.icon;
            return (
              <motion.li
                key={value.title}
                variants={fadeUp}
                className="border-t border-line pt-6"
              >
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
                <h3 className="mt-5 font-display text-xl text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>
  );
}
