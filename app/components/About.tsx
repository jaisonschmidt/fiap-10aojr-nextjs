import type { Profile } from "@/data/resume";
import { Section } from "./Section";

type AboutProps = {
  profile: Profile;
};

export function About({ profile }: AboutProps) {
  return (
    <Section title="Sobre">
      <p className="text-zinc-700">{profile.summary}</p>
    </Section>
  );
}
