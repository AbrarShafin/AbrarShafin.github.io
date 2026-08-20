import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Mail } from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";
import { SiteNav } from "@/components/site/SiteNav";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ProfileLinks } from "@/components/site/ProfileLinks";
import {
  aboutText,
  contactText,
  education,
  experience,
  leadership,
  profile,
  publications,
  researchInterests,
  skills,
  thesis,
} from "@/content/profile";

const title = "Kazi Abrar Shafin — ML Researcher in Semiconductor Device Optimization";
const description =
  "Personal research site of Kazi Abrar Shafin, an Electrical and Electronic Engineering graduate applying machine learning and explainable AI to photovoltaic device optimization.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Machine Learning Researcher",
          email: `mailto:${profile.email}`,
          alumniOf: "University of Rajshahi",
          url: "/",
        }),
      },
    ],
  }),
});

const btnSolid =
  "inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-sm border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

function Index() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <main className="mx-auto max-w-3xl px-5 pb-4 sm:px-6">
        {/* HOME */}
        <section id="home" className="scroll-mt-24 py-14 sm:py-20">
          <Reveal>
            <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {profile.name}
                </h1>
                <p className="mt-2 text-base text-accent sm:text-lg">{profile.identity}</p>
                <p className="mt-5 leading-relaxed text-muted-foreground">{profile.intro}</p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={profile.cvUrl} className={btnSolid}>
                    Resume
                  </a>
                  <a href="#contact" className={btnOutline}>
                    Contact Me
                  </a>
                </div>

                <div className="mt-7">
                  <ProfileLinks />
                </div>
              </div>

              <img
                src={profileAsset.url}
                alt="Profile photo of Kazi Abrar Shafin"
                className="size-32 shrink-0 rounded-full border border-border object-cover sm:size-40"
                width={160}
                height={160}
              />
            </div>
          </Reveal>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About">
          <p className="prose-measure leading-relaxed text-muted-foreground">{aboutText}</p>
        </Section>

        {/* RESEARCH INTERESTS + EXPERIENCE */}
        <Section id="research" title="Research Interests">
          <p className="prose-measure leading-relaxed text-muted-foreground">
            {researchInterests}
          </p>
        </Section>

        <Section id="experience" title="Research Experience">
          <div className="space-y-8">
            {experience.map((entry) => (
              <article
                key={entry.title}
                className="border-l-2 border-accent/40 pl-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-serif text-lg font-semibold">{entry.title}</h3>
                  <span className="text-sm text-muted-foreground">{entry.dates}</span>
                </div>
                <p className="mt-1 text-sm text-foreground/80">{entry.institution}</p>
                {entry.note && (
                  <p className="mt-1 text-sm italic text-muted-foreground">{entry.note}</p>
                )}
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-accent/60">
                  {entry.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {entry.links && (
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                    {entry.links.map((l) => (
                      <a key={l.label} href={l.href} className="link-accent text-sm">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        {/* PUBLICATIONS */}
        <Section
          id="publications"
          title="Publications"
          action={
            <a
              href="https://scholar.google.com/citations?user=8JMeH_0AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent inline-flex items-center gap-1 text-sm"
            >
              Google Scholar
              <ExternalLink className="size-3" aria-hidden />
            </a>
          }
        >
          <ol className="space-y-7">
            {publications.map((pub) => (
              <li key={pub.title} className="prose-measure">
                <p className="font-serif text-base font-semibold leading-snug">{pub.title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {pub.authors.map((a, i) => (
                    <span key={a}>
                      {a === pub.boldAuthor ? (
                        <strong className="font-semibold text-foreground">{a}</strong>
                      ) : (
                        a
                      )}
                      {i < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="mt-1 text-sm italic text-muted-foreground">{pub.venue}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="rounded-sm border border-accent/40 px-2 py-0.5 text-xs uppercase tracking-wide text-accent">
                    {pub.status}
                  </span>
                  {pub.links?.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent inline-flex items-center gap-1 text-sm"
                    >
                      {l.label}
                      <ExternalLink className="size-3" aria-hidden />
                    </a>
                  ))}
                </div>
                {pub.note && (
                  <p className="mt-2 text-xs italic text-muted-foreground">{pub.note}</p>
                )}
              </li>
            ))}
          </ol>
        </Section>

        {/* THESIS */}
        <Section id="thesis" title="Thesis">
          <div className="prose-measure">
            <h3 className="font-serif text-lg font-semibold leading-snug">{thesis.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{thesis.subtitle}</p>
            <blockquote className="mt-5 border-l-2 border-accent/40 bg-surface px-5 py-4 text-sm leading-relaxed text-muted-foreground">
              {thesis.abstract}
            </blockquote>
            <p className="mt-3 text-xs italic text-muted-foreground">{thesis.note}</p>
            <div className="mt-5">
              <a href={thesis.pdfUrl} className={btnOutline}>
                Thesis PDF
              </a>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <dl className="grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category}>
                <dt className="font-serif text-sm font-semibold">{group.category}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education">
          <div className="space-y-7">
            {education.map((e) => (
              <article key={e.institution}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-serif text-base font-semibold">{e.institution}</h3>
                  <span className="text-sm text-muted-foreground">{e.dates}</span>
                </div>
                <p className="mt-1 text-sm text-foreground/80">{e.degree}</p>
                <ul className="mt-1.5 space-y-0.5 text-sm text-muted-foreground">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* LEADERSHIP */}
        <Section id="leadership" title="Leadership & Involvement">
          <ul className="prose-measure list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-accent/60">
            {leadership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <p className="prose-measure leading-relaxed text-muted-foreground">{contactText}</p>
          <p className="mt-4">
            <a
              href={`mailto:${profile.email}`}
              className="link-accent inline-flex items-center gap-2 text-sm"
            >
              <Mail className="size-4" aria-hidden />
              {profile.email}
            </a>
          </p>
          <div className="mt-5">
            <ProfileLinks />
          </div>
        </Section>
      </main>

      <footer className="border-t border-rule">
        <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-muted-foreground sm:px-6">
          © 2026 Kazi Abrar Shafin
        </div>
      </footer>
    </div>
  );
}
