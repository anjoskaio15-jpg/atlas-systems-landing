import { BarChart3, CalendarCheck, Workflow } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { SectionTitle } from "@/components/SectionTitle";
import { WHATSAPP_URL } from "@/lib/constants";

const metrics = [
  { label: "Agendamentos", value: "SaaS" },
  { label: "Landing pages", value: "Alta conversão" },
  { label: "Rotinas", value: "Automação" },
];

const flows = [
  {
    icon: CalendarCheck,
    text: "Fluxo de agendamento pronto para escala",
    tone: "text-cyan-200",
  },
  {
    icon: Workflow,
    text: "Automações para reduzir tarefas repetitivas",
    tone: "text-sky-300",
  },
  {
    icon: BarChart3,
    text: "Indicadores claros para decisão comercial",
    tone: "text-cyan-200",
  },
];

export function Hero() {
  return (
    <section className="relative px-6 pb-20 pt-32 sm:pt-36 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-atlas-radial" />
      <div className="absolute inset-x-0 top-20 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="atlas-badge mb-5 max-w-full">
            SaaS • Sistemas • Automações • Landing Pages
          </p>

          <SectionTitle
            eyebrow="@atlassystems.br"
            title="Sistemas, páginas e automações para negócios venderem mais e operarem melhor."
            description="A Atlas Systems cria estrutura digital para empresas que querem transformar processos manuais em soluções profissionais, inteligentes e escaláveis."
          />

          <p className="mt-5 text-sm font-medium text-slate-300">
            Projetos pensados para clareza, conversão e operação.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-atlas-soft">
            Ideal para salões, barbearias, clínicas de estética e negócios que dependem de
            atendimento, agendamento e WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Solicitar análise gratuita
            </CTAButton>
            <CTAButton href="#solucoes" variant="secondary">
              Ver soluções
            </CTAButton>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-300/14 via-sky-500/6 to-transparent blur-2xl"
          />
          <div className="atlas-card rounded-[2rem] p-3 sm:p-4">
            <div className="atlas-card-inner overflow-hidden rounded-[1.55rem]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-sm text-slate-400">Atlas OS</p>
                  <p className="font-heading text-xl font-semibold text-white">
                    Operação conectada
                  </p>
                </div>
                <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  Online
                </span>
              </div>

              <div className="relative p-5">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.42) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.42) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <div className="relative grid gap-3 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                    >
                      <p className="text-xs text-slate-400">{metric.label}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-5 grid gap-3">
                  {flows.map((flow) => {
                    const Icon = flow.icon;

                    return (
                      <div
                        key={flow.text}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045]">
                          <Icon className={`h-5 w-5 ${flow.tone}`} aria-hidden="true" />
                        </span>
                        <span className="text-sm leading-6 text-slate-200">{flow.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="relative mt-5 rounded-2xl border border-white/10 bg-atlas-deep/70 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                      Pipeline digital
                    </p>
                    <p className="text-xs font-semibold text-cyan-200">Menos manual</p>
                  </div>
                  <div className="grid grid-cols-12 items-end gap-2">
                    {[38, 54, 46, 68, 58, 76, 64, 82, 72, 88, 78, 94].map(
                      (height, index) => (
                        <span
                          key={`${height}-${index}`}
                          className="rounded-t-md bg-gradient-to-t from-sky-500/35 to-cyan-200"
                          style={{ height: `${height}px` }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
