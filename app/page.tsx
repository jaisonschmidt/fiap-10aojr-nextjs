import { resume, siteUrl } from "@/data/resume";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Education } from "@/app/components/Education";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";
import { PrintButton } from "@/app/components/PrintButton";

export default function Home() {
  const { profile, contact, experiences, education, skills, projects } = resume;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    email: contact.email,
    url: siteUrl,
    image: `${siteUrl}${profile.avatar}`,
    sameAs: [contact.github, contact.linkedin, contact.website].filter(Boolean),
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex justify-end">
        <PrintButton />
      </div>
      <Hero profile={profile} contact={contact} />
      <About profile={profile} />
      <Experience experiences={experiences} />
      <Education education={education} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <footer className="border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {profile.name}. Feito com Next.js.
      </footer>
    </main>
  );
}
