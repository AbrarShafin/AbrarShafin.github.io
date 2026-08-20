import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  action,
  children,
}: {
  id: string;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-rule py-14 sm:py-16">
      <Reveal>
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {action}
        </div>
        {children}
      </Reveal>
    </section>
  );
}
