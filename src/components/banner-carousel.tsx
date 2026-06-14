"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Badge, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/cn";

export type Banner = {
  src: string;
  alt: string;
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

const AUTOPLAY_MS = 6000;

export function BannerCarousel({ banners }: { banners: Banner[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = banners.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  // Autoplay — pauses on hover/focus and respects reduced motion.
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (paused || count <= 1) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, count]);

  return (
    <section
      className="relative isolate overflow-hidden text-white"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-[clamp(26rem,52vw,40rem)]">
        {banners.map((b, i) => (
          <div
            key={b.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              i === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={i !== index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            <Image
              src={b.src}
              alt={b.alt}
              fill
              loading={i === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
            {/* readability scrim */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/45 to-transparent"
              aria-hidden
            />

            <div className="rail relative flex h-full flex-col justify-center">
              <div className="max-w-xl">
                <Badge tone="accent" className="bg-white/10 text-accent-300 ring-white/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-300" />
                  {b.eyebrow}
                </Badge>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
                  {b.title}
                </h1>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
                  {b.text}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={b.primary.href} variant="secondary" size="lg" withArrow>
                    {b.primary.label}
                  </Button>
                  {b.secondary && (
                    <Button href={b.secondary.href} variant="outline-white" size="lg">
                      {b.secondary.label}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:grid"
          >
            <Icon.arrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:grid"
          >
            <Icon.arrowRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5">
            {banners.map((b, i) => (
              <button
                key={b.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-accent-400" : "w-2.5 bg-white/50 hover:bg-white/80",
                )}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
