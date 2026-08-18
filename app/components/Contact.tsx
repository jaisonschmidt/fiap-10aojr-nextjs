import { Mail, Phone, ExternalLink, type LucideIcon } from "lucide-react";
import type { Contact as ContactType } from "@/data/resume";
import { Section } from "./Section";

type ContactProps = {
  contact: ContactType;
};

type ContactLink = {
  label: string;
  href: string;
  value: string;
  Icon: LucideIcon;
};

export function Contact({ contact }: ContactProps) {
  const links: ContactLink[] = [
    { label: "E-mail", href: `mailto:${contact.email}`, value: contact.email, Icon: Mail },
    contact.phone
      ? { label: "Telefone", href: `tel:${contact.phone}`, value: contact.phone, Icon: Phone }
      : null,
    contact.github
      ? { label: "GitHub", href: contact.github, value: contact.github, Icon: ExternalLink }
      : null,
    contact.linkedin
      ? { label: "LinkedIn", href: contact.linkedin, value: contact.linkedin, Icon: ExternalLink }
      : null,
  ].filter((link): link is ContactLink => link !== null);

  return (
    <Section title="Contato">
      <ul className="flex flex-col gap-2 text-sm">
        {links.map(({ label, href, value, Icon }) => (
          <li key={label} className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-zinc-500" aria-hidden="true" />
            <a
              href={href}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
