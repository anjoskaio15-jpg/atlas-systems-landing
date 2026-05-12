import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function CTAButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: CTAButtonProps) {
  const styles =
    variant === "primary"
      ? "border border-cyan-200/60 bg-cyan-300 text-slate-950 shadow-glow hover:-translate-y-0.5 hover:bg-cyan-200"
      : "border border-white/10 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/[0.08]";

  return (
    <a
      className={`atlas-focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 motion-reduce:transform-none ${styles} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
