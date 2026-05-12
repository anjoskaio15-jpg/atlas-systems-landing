import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type CardShellProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

function CardShell({ children, className = "" }: CardShellProps) {
  return (
    <article
      className={`group atlas-card atlas-interactive-card min-w-[82%] snap-start rounded-3xl p-6 sm:min-w-[22rem] md:min-w-0 ${className}`}
    >
      {children}
    </article>
  );
}

function IconFrame({ icon: Icon }: Readonly<{ icon: LucideIcon }>) {
  return (
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10">
      <Icon className="h-5 w-5 text-cyan-200" aria-hidden="true" />
    </div>
  );
}

export function ProblemCard({
  icon,
  title,
}: Readonly<{
  icon: LucideIcon;
  title: string;
}>) {
  return (
    <CardShell>
      <IconFrame icon={icon} />
      <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>
    </CardShell>
  );
}

export function ServiceCard({
  icon,
  title,
  text,
}: Readonly<{
  icon: LucideIcon;
  title: string;
  text: string;
}>) {
  return (
    <CardShell>
      <IconFrame icon={icon} />
      <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
      <p className="atlas-support-text mt-3 leading-7">{text}</p>
    </CardShell>
  );
}

export function ProjectCard({
  icon,
  title,
  description,
  resources,
  href,
}: Readonly<{
  icon: LucideIcon;
  title: string;
  description: string;
  resources: string[];
  href: string;
}>) {
  return (
    <CardShell className="relative flex flex-col overflow-hidden border-cyan-200/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025]">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
      />
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-3">
          {(() => {
            const Icon = icon;
            return <Icon className="h-6 w-6 text-cyan-200" aria-hidden="true" />;
          })()}
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
          Modelo de solução
        </span>
      </div>
      <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
      <p className="atlas-support-text mt-3 leading-7">{description}</p>
      <ul className="mt-6 grid gap-3">
        {resources.map((resource) => (
          <li key={resource} className="flex items-center gap-3 text-sm text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            {resource}
          </li>
        ))}
      </ul>
      <a
        href={href}
        className="atlas-focus-ring mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/[0.08] motion-reduce:transform-none"
      >
        Explorar solução
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </CardShell>
  );
}

export function ProcessStep({
  icon,
  index,
  title,
  text,
}: Readonly<{
  icon: LucideIcon;
  index: number;
  title: string;
  text: string;
}>) {
  return (
    <CardShell className="min-w-[76%] sm:min-w-[18rem]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-sm font-bold text-cyan-200">
          {index}
        </span>
        {(() => {
          const Icon = icon;
          return <Icon className="h-5 w-5 text-slate-400" aria-hidden="true" />;
        })()}
      </div>
      <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>
      <p className="atlas-support-text mt-3 text-sm leading-6">{text}</p>
    </CardShell>
  );
}

export function FeatureItem({
  icon,
  text,
}: Readonly<{
  icon: LucideIcon;
  text: string;
}>) {
  const Icon = icon;

  return (
    <div className="atlas-interactive-card min-w-[82%] snap-start rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:min-w-[20rem] md:min-w-0">
      <Icon className="mb-4 h-5 w-5 text-cyan-200" aria-hidden="true" />
      <p className="leading-7 text-slate-200">{text}</p>
    </div>
  );
}
