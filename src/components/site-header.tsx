"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, type NavItem } from "@/lib/site";
import { Logo, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-paper/90 shadow-[0_8px_30px_-16px_rgba(11,31,37,0.4)] backdrop-blur-md"
          : "bg-paper",
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="rail flex h-24 items-center justify-between gap-4 py-3 sm:h-28">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <DesktopItem
              key={item.label}
              item={item}
              open={open === item.label}
              onOpen={() => setOpen(item.label)}
              active={pathname.startsWith(item.href) && item.href !== "/"}
            />
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            aria-label="Search the site"
            className="grid h-10 w-10 place-items-center rounded-full text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
          >
            <Icon.search className="h-5 w-5" />
          </button>
          <Button href="/get-involved#partners" variant="ghost" size="sm">
            Partner with us
          </Button>
          <Button href="/get-involved#donate" variant="secondary" size="sm">
            Donate
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-brand-50 lg:hidden"
        >
          <Icon.menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mega menu panel */}
      {open && (
        <MegaPanel item={nav.find((n) => n.label === open)!} />
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <MobileDrawer onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

function DesktopItem({
  item,
  open,
  onOpen,
  active,
}: {
  item: NavItem;
  open: boolean;
  onOpen: () => void;
  active: boolean;
}) {
  const hasMenu = !!item.columns;
  return (
    <div onMouseEnter={onOpen}>
      <Link
        href={item.href}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.95rem] font-semibold transition-colors",
          open || active
            ? "bg-brand-50 text-brand-800"
            : "text-ink hover:bg-brand-50 hover:text-brand-800",
        )}
        aria-expanded={hasMenu ? open : undefined}
      >
        {item.label}
        {hasMenu && (
          <Icon.chevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        )}
      </Link>
    </div>
  );
}

function MegaPanel({ item }: { item: NavItem }) {
  if (!item.columns) return null;
  return (
    <div className="absolute inset-x-0 top-full hidden border-t border-black/5 bg-paper shadow-[0_24px_50px_-24px_rgba(11,31,37,0.45)] lg:block">
      <div className="rail grid grid-cols-12 gap-8 py-8">
        <div className="col-span-8 grid grid-cols-3 gap-8">
          {item.columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
                {col.title}
              </p>
              <ul className="mt-4 space-y-1">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-800"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-300 transition-colors group-hover:bg-brand-600" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="col-span-4">
          {item.feature ? (
            <Link
              href={item.feature.href}
              className="group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl p-6 text-white mesh dotgrid"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-300">
                {item.label}
              </span>
              <h3 className="mt-2 text-2xl font-bold leading-tight">
                {item.feature.title}
              </h3>
              <p className="mt-2 text-sm text-white/75">{item.feature.text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300">
                {item.feature.cta}
                <Icon.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ) : (
            <div className="flex h-full flex-col justify-center rounded-2xl bg-paper-2 p-6">
              <p className="text-sm text-ink-soft">Explore {item.label.toLowerCase()}</p>
              <Link
                href={item.href}
                className="mt-2 inline-flex items-center gap-1.5 text-base font-bold text-brand-800"
              >
                View overview
                <Icon.arrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-paper shadow-2xl">
        <div className="flex h-24 items-center justify-between border-b border-black/5 px-5">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-brand-50"
          >
            <Icon.close className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-black/5">
              <div className="flex items-center">
                <Link
                  href={item.href}
                  className="flex-1 px-2 py-3.5 text-lg font-semibold text-ink"
                >
                  {item.label}
                </Link>
                {item.columns && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label}`}
                    onClick={() =>
                      setExpanded(expanded === item.label ? null : item.label)
                    }
                    className="grid h-10 w-10 place-items-center rounded-full text-ink-soft hover:bg-brand-50"
                  >
                    <Icon.chevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        expanded === item.label && "rotate-180",
                      )}
                    />
                  </button>
                )}
              </div>
              {item.columns && expanded === item.label && (
                <ul className="pb-3 pl-3">
                  {item.columns.flatMap((c) => c.links).map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="block rounded-lg px-3 py-2 text-[0.95rem] text-ink-soft hover:bg-brand-50 hover:text-brand-800"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
        <div className="flex gap-3 border-t border-black/5 p-4">
          <Button href="/get-involved#partners" variant="ghost" size="md" className="flex-1">
            Partner
          </Button>
          <Button href="/get-involved#donate" variant="secondary" size="md" className="flex-1">
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
}
