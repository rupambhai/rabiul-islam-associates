import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** 404 page — calm and on-brand rather than apologetic. */
export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" noindex />
      <Container
        as="section"
        className="flex min-h-[70vh] flex-col items-center justify-center py-section text-center"
      >
        <p className="eyebrow mb-6">Error 404</p>
        <h1 className="text-display-lg">This page could not be found.</h1>
        <p className="mt-5 max-w-md text-muted">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button as="link" to="/">
            Return Home
          </Button>
          <Button as="link" to="/contact" variant="outline">
            Contact the Chamber
          </Button>
        </div>
      </Container>
    </>
  );
}
