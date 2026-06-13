import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PHD — head office and regional offices, enquiry form, and social channels.",
};

const offices = [
  { city: "Dhaka — Head Office", addr: "House 42, Road 11, Banani, Dhaka 1213", phone: "+880 2 1234 5678" },
  { city: "Khulna — Coastal Office", addr: "KDA Avenue, Khulna 9100", phone: "+880 41 234 567" },
  { city: "Sylhet — Haor Office", addr: "Zindabazar, Sylhet 3100", phone: "+880 821 234 56" },
  { city: "Rangpur — Char Office", addr: "Station Road, Rangpur 5400", phone: "+880 521 234 5" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's talk."
        intro="Whether you're a donor, partner, journalist, job-seeker or community member — we'd like to hear from you."
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-16 lg:py-20">
        <div className="rail grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: details + map */}
          <div>
            <SectionHeading kicker="Head office" title="Dhaka, Bangladesh" />
            <div className="mt-6 space-y-3 text-ink-soft">
              <p className="flex items-start gap-3">
                <Icon.mapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                {org.headOffice.line1}, {org.headOffice.line2}
              </p>
              <p className="flex items-center gap-3">
                <Icon.phone className="h-5 w-5 shrink-0 text-brand-700" />
                {org.headOffice.phone}
              </p>
              <p className="flex items-center gap-3">
                <Icon.mail className="h-5 w-5 shrink-0 text-brand-700" />
                <a href={`mailto:${org.headOffice.email}`} className="link-underline">{org.headOffice.email}</a>
              </p>
            </div>

            {/* Stylised map */}
            <div className="duotone relative mt-6 grid h-56 place-items-center overflow-hidden rounded-2xl">
              <div className="dotgrid absolute inset-0 opacity-40" />
              <div className="relative text-center text-white">
                <Icon.mapPin className="mx-auto h-9 w-9" />
                <p className="mt-1 text-sm font-semibold">Banani, Dhaka</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {offices.map((o) => (
                <div key={o.city} className="rounded-2xl border border-black/5 bg-white p-5 card-shadow">
                  <p className="font-display font-bold text-ink">{o.city}</p>
                  <p className="mt-1 text-sm text-ink-soft">{o.addr}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-700">{o.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            <SectionHeading kicker="Send a message" title="How can we help?" />
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
