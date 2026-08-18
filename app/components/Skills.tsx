import type { Skill } from "@/data/resume";
import { Section } from "./Section";

type SkillsProps = {
  skills: Skill[];
};

export function Skills({ skills }: SkillsProps) {
  return (
    <Section title="Habilidades">
      <div className="flex flex-col gap-4">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
