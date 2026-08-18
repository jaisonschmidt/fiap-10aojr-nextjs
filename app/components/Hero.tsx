import Image from "next/image";
import { Mail, Globe, MapPin } from "lucide-react";
import type { Contact, Profile } from "@/data/resume";

type HeroProps = {
  profile: Profile;
  contact: Contact;
};

export function Hero({ profile, contact }: HeroProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-zinc-200 pb-8 sm:flex-row sm:items-center">
      <Image
        src={profile.avatar}
        alt={`Foto de ${profile.name}`}
        width={96}
        height={96}
        className="h-24 w-24 rounded-full object-cover"
        priority
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-xl text-zinc-600">{profile.role}</p>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-zinc-500">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {profile.location}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1.5 text-blue-600 hover:underline"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {contact.email}
          </a>
          {contact.website ? (
            <a
              href={contact.website}
              className="flex items-center gap-1.5 text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              {contact.website}
            </a>
          ) : null}
        </div>
      </div>
    </header>
  );
}
