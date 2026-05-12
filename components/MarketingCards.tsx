import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

type CardShellProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

function CardShell({ children, className = "" }: CardShellProps) {
  return (
    <article className={`group atlas-card atlas-interactive-card rounded-3xl p-6 ${className}`}>
      {children}
    </article>
  );
}

export function ProblemCard({ title }: Readonly<{ title: string }>) {
  return (
    <CardShell>
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-200">
        <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>
    </CardShell>
  );
}

export function ServiceCard({
  icon: Icon,
  title,
  text,
}: Readonly<{
  icon: LucideIcon;
  title: string;
  text: string;
}>) {
  return (
    <CardShell>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10">
        <Icon className="h-5 w-5 text-cyan-200" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
      <p className="atlas-support-text mt-3 leading-7">{text}</p>
    </CardShell>
  );
}

export function ProjectCard({
  title,
  description,
  resources,
}: Readonly<{
  title: string;
  description: string;
  resources: string[];
}>) {
  return (
    <CardShell className="flex flex-col">
      <div className="mb-6 rounded-2xl border border-white/10 bg-atlas-deep/70 p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            Conceito
          </span>
          <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-cyan-200" aria-hidden="true" />
        </div>
        <div className="grid gap-2">
          <span className="h-3 w-2/3 rounded-full bg-white/20" />
          <span className="h-3 w-full rounded-full bg-white/10" />
          <span className="h-3 w-4/5 rounded-full bg-cyan-200/20" />
        </div>
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
    </CardShell>
  );
}

export function ProcessStep({
  index,
  title,
  text,
}: Readonly<{
  index: number;
  title: string;
  text: string;
}>) {
  return (
    <CardShell>
      <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-sm font-bold text-cyan-200">
        {index}
      </span>
      <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>
      <p className="atlas-support-text mt-3 text-sm leading-6">{text}</p>
    </CardShell>
  );
}

export function FeatureItem({ text }: Readonly<{ text: string }>) {
  return (
    <div className="atlas-interactive-card rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <Sparkles className="mb-4 h-5 w-5 text-cyan-200" aria-hidden="true" />
      <p className="leading-7 text-slate-200">{text}</p>
    </div>
  );
}
