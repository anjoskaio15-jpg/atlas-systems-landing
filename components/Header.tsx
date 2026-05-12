import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { WHATSAPP_URL } from "@/lib/constants";

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Contato", href: WHATSAPP_URL, external: true },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-atlas-ink/78 px-6 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between">
        <a
          href="#"
          aria-label="Atlas Systems - início"
          className="atlas-focus-ring flex items-center gap-3 rounded-xl"
        >
          <span className="flex h-10 items-center rounded-xl border border-white/10 bg-white/[0.04] px-2.5 shadow-glow sm:h-11 sm:px-3">
            <Image
              src="/brand/atlas-logo.png"
              alt="Atlas Systems"
              width={156}
              height={36}
              priority
              className="h-7 w-auto object-contain sm:h-8"
            />
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="atlas-focus-ring rounded-full text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <CTAButton
          href={WHATSAPP_URL}
          className="hidden md:inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar análise
        </CTAButton>
      </div>
    </header>
  );
}
