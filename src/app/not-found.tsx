import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center mesh dotgrid px-6 py-24 text-center text-white">
      <div>
        <p className="font-display text-7xl font-extrabold text-accent-300">404</p>
        <h1 className="mt-4 text-3xl font-bold">We couldn&apos;t find that page</h1>
        <p className="mx-auto mt-3 max-w-md text-white/75">
          The page may have moved. Let&apos;s get you back to solid ground.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="secondary" withArrow>Back to home</Button>
          <Button href="/what-we-do" variant="outline-white">Explore our work</Button>
        </div>
      </div>
    </section>
  );
}
