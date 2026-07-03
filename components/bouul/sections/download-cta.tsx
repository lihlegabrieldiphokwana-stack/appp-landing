import { Container, Button } from "../ui/primitives";

export function DownloadCTA() {
  return (
    <section className="border-t border-bouul-border bg-bouul-bg">
      <Container className="py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-bouul-text md:text-6xl">Your city&apos;s marketplace, in your pocket.</h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-bouul-text-secondary">Download Bouul and find trusted local services today.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/download" variant="primary">Download for iOS</Button>
          <Button href="/download" variant="secondary">Download for Android</Button>
        </div>
      </Container>
    </section>
  );
}
