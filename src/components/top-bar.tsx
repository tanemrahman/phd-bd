import Link from "next/link";
import { utilityNav, org } from "@/lib/site";
import { Icon } from "@/components/icons";

export function TopBar() {
  return (
    <div className="hidden border-b border-black/5 bg-paper-2/80 text-ink-soft md:block">
      <div className="rail flex h-9 items-center justify-between text-[0.78rem]">
        <div className="flex items-center gap-2">
          <Icon.mapPin className="h-3.5 w-3.5 text-brand-700" />
          <span>Dhaka, Bangladesh</span>
          <span className="mx-1 text-black/15">•</span>
          <a
            href={`mailto:${org.headOffice.email}`}
            className="link-underline hover:text-ink"
          >
            {org.headOffice.email}
          </a>
        </div>
        <div className="flex items-center gap-5">
          <nav className="flex items-center gap-5">
            {utilityNav.map((l) => (
              <Link key={l.label} href={l.href} className="link-underline hover:text-ink">
                {l.label}
              </Link>
            ))}
          </nav>
          <span className="text-black/15">|</span>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-brand-700"
          >
            <Icon.globe className="h-3.5 w-3.5" />
            EN
            <span className="text-black/30">/ বাংলা</span>
          </button>
        </div>
      </div>
    </div>
  );
}
