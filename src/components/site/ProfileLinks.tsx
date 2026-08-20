import { ExternalLink } from "lucide-react";
import { profileLinks } from "@/content/profile";

export function ProfileLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {profileLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-1 text-sm"
          >
            {link.label}
            <ExternalLink className="size-3" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
