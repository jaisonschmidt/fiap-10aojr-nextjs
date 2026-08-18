import type { Education as EducationType } from "@/data/resume";
import { Section } from "./Section";

type EducationProps = {
  education: EducationType[];
};

export function Education({ education }: EducationProps) {
  return (
    <Section title="Formação">
      <div className="flex flex-col gap-4">
        {education.map((item) => (
          <article key={`${item.institution}-${item.period}`} className="flex flex-col gap-0.5">
            <h3 className="font-semibold">{item.degree}</h3>
            <p className="text-sm text-zinc-600">
              {item.institution} · {item.period}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
