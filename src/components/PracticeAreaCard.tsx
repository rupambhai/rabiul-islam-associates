import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { PracticeArea } from "@/data/practiceAreas";
import { fadeUp } from "@/utils/motion";

interface PracticeAreaCardProps {
  area: PracticeArea;
}

/**
 * Premium, restrained practice-area card. Hover lifts the accent and reveals
 * the corner arrow — no shadows or heavy motion. Links to the detail page.
 */
export function PracticeAreaCard({ area }: PracticeAreaCardProps) {
  const Icon = area.icon;

  return (
    <motion.div variants={fadeUp} className="h-full bg-ivory">
      <Link
        to={`/practice-areas/${area.slug}`}
        className="group relative flex h-full flex-col gap-5 p-8 transition-colors duration-300 hover:bg-surface lg:p-10"
      >
        <ArrowUpRight
          className="absolute right-6 top-6 h-5 w-5 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold group-hover:opacity-100"
          strokeWidth={1.5}
        />

        <Icon
          className="h-7 w-7 text-gold transition-transform duration-300 group-hover:scale-105"
          strokeWidth={1.25}
        />

        <h3 className="font-display text-xl text-ink lg:text-2xl">
          {area.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{area.excerpt}</p>

        {/* Underline accent that grows on hover. */}
        <span className="mt-auto block h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-full group-hover:bg-gold" />
      </Link>
    </motion.div>
  );
}
