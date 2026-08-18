import type { Experience as ExperienceType } from "@/data/resume";
import { Section } from "./Section";

type ExperienceProps = {
  experiences: ExperienceType[];
};

export function Experience({ experiences }: ExperienceProps) {
  return (
    <Section title="Experiência">
      <div className="flex flex-col gap-6">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.period}`} className="flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <h3 className="font-semibold">{item.role}</h3>
              <p className="text-sm text-zinc-600">
                {item.company} · {item.period}
              </p>
            </div>
            <p className="text-sm text-zinc-700">{item.description}</p>
            <ul className="list-disc pl-5 text-sm text-zinc-700">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
