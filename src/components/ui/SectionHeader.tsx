import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { fadeUp } from "@/utils/motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Heading level for correct document outline (defaults to h2). */
  as?: "h1" | "h2" | "h3";
}

/**
 * Reusable section heading: optional eyebrow, title and description with a
 * single subtle fade-up reveal. Used at the top of every major section.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "max-w-prose",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Heading className="text-display-md text-balance">{title}</Heading>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
