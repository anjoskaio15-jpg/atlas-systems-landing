import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-atlas-deep/50 px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 text-sm text-atlas-soft md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Image
            src="/brand/atlas-logo.png"
            alt="Atlas Systems"
            width={176}
            height={42}
            className="h-9 w-auto object-contain"
          />
          <p className="mt-3 max-w-md leading-7">
            SaaS, sistemas, automações e landing pages para negócios modernos.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://www.instagram.com/atlassystems.br"
            aria-label="Abrir Instagram da Atlas Systems"
            className="atlas-focus-ring inline-flex items-center gap-2 rounded-full text-slate-300 transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            @atlassystems.br
          </a>
          <a
            href={WHATSAPP_URL}
            aria-label="Abrir WhatsApp da Atlas Systems"
            className="atlas-focus-ring inline-flex items-center gap-2 rounded-full text-slate-300 transition hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp/Contato
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-xs text-slate-500">
        © 2026 Atlas Systems. Todos os direitos reservados.
      </div>
    </footer>
  );
}
