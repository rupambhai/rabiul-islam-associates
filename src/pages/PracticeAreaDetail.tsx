import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/sections/CtaSection";
import { getPracticeArea, practiceAreas } from "@/data/practiceAreas";
import { site } from "@/data/site";
import { fadeUp, staggerContainer } from "@/utils/motion";
import NotFound from "@/pages/NotFound";

export default function PracticeAreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getPracticeArea(slug) : undefined;

  if (!area) return <NotFound />;

  const Icon = area.icon;
  // Up to three other areas for cross-navigation.
  const related = practiceAreas.filter((a) => a.slug !== area.slug).slice(0, 3);

  // Service schema scoped to this practice area.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: area.title,
    description: area.summary,
    provider: { "@type": "LegalService", name: site.name, url: site.url },
    areaServed: "Bangladesh",
    url: `${site.url}/practice-areas/${area.slug}`,
  };

  return (
    <>
      <Seo
        title={area.title}
        path={`/practice-areas/${area.slug}`}
        description={area.summary}
        jsonLd={jsonLd}
      />

      {/* Header band */}
      <section className="border-b border-line bg-surface">
        <Container className="py-section">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              All Practice Areas
            </Link>
          </nav>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-prose"
          >
            <motion.div variants={fadeUp}>
              <Icon className="h-9 w-9 text-gold" strokeWidth={1.25} />
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-6 text-display-md">
              {area.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg leading-relaxed text-muted"
            >
              {area.summary}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Body */}
      <Container as="section" className="py-section">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-5"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-2xl text-ink"
            >
              Overview
            </motion.h2>
            {area.overview.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fadeUp}
                className="text-base leading-relaxed text-charcoal/90"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="border border-line bg-surface p-8">
              <h2 className="eyebrow mb-5">Representative Scope</h2>
              <ul className="space-y-3">
                {area.scope.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-charcoal">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      strokeWidth={1.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button as="link" to="/contact" size="sm" className="mt-8 w-full">
                Discuss This Matter
              </Button>
            </div>
          </motion.aside>
        </div>

        {/* Related areas */}
        <div className="mt-20 border-t border-line pt-12">
          <h2 className="eyebrow mb-8">Related Practice Areas</h2>
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-3">
            {related.map((item) => {
              const RelatedIcon = item.icon;
              return (
                <li key={item.slug} className="bg-ivory">
                  <Link
                    to={`/practice-areas/${item.slug}`}
                    className="group flex h-full items-start justify-between gap-4 p-6 transition-colors hover:bg-surface"
                  >
                    <span className="flex flex-col gap-3">
                      <RelatedIcon
                        className="h-5 w-5 text-gold"
                        strokeWidth={1.5}
                      />
                      <span className="font-display text-lg text-ink">
                        {item.title}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-gold"
                      strokeWidth={1.5}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <CtaSection />
    </>
  );
}
