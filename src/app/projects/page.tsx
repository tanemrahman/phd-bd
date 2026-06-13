import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectsExplorer } from "@/components/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Search and filter PHD's project portfolio by donor, sector, location, status, budget and year — a transparent, donor-ready directory.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Project directory"
        title="A transparent window into every project."
        intro="Filter PHD's active, completed and pipeline projects by donor, sector, location and status. Every figure is drawn from our programme management system."
        crumbs={[{ label: "Projects", href: "/projects" }]}
      />
      <section className="py-14 lg:py-16">
        <div className="rail">
          <ProjectsExplorer />
        </div>
      </section>
    </>
  );
}
