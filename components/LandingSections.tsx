import {
  Bot,
  CalendarDays,
  Gauge,
  Layout,
  PanelsTopLeft,
  Route,
  Workflow,
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import {
  FeatureItem,
  ProblemCard,
  ProcessStep,
  ProjectCard,
  ServiceCard,
} from "@/components/MarketingCards";
import { WHATSAPP_URL } from "@/lib/constants";

const problems = [
  "Agendamentos perdidos no WhatsApp",
  "Processos manuais e repetitivos",
  "Falta de presença digital profissional",
  "Clientes sem clareza sobre serviços e preços",
  "Atendimento desorganizado",
  "Baixa conversão de visitantes em contatos",
];

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    text: "Páginas profissionais para apresentar serviços, gerar confiança e transformar visitantes em contatos.",
  },
  {
    icon: CalendarDays,
    title: "Sistemas de Agendamento",
    text: "Fluxos inteligentes para clientes escolherem serviço, dia e horário com mais clareza.",
  },
  {
    icon: Bot,
    title: "Automações",
    text: "Automatize tarefas repetitivas, organize atendimentos e reduza falhas operacionais.",
  },
  {
    icon: PanelsTopLeft,
    title: "SaaS e Sistemas Sob Medida",
    text: "Construção de ferramentas digitais para processos específicos do seu negócio.",
  },
  {
    icon: Gauge,
    title: "Dashboards",
    text: "Painéis simples e objetivos para visualizar informações importantes da operação.",
  },
  {
    icon: Workflow,
    title: "Integrações",
    text: "Conexões com WhatsApp, formulários e ferramentas digitais para melhorar o fluxo de trabalho.",
  },
];

const projects = [
  {
    title: "Barbearia Premium",
    description:
      "Página de serviços e pré-agendamento para barbearias que querem organizar horários e transmitir mais profissionalismo.",
    resources: ["Serviços e preços", "Escolha de profissional", "CTA para WhatsApp", "Layout premium"],
  },
  {
    title: "Clínica de Estética",
    description:
      "Landing page para apresentar procedimentos, gerar confiança e conduzir clientes para uma avaliação.",
    resources: ["Procedimentos", "Benefícios", "Agendamento de avaliação", "Prova visual"],
  },
  {
    title: "Studio de Unhas",
    description:
      "Página para nail designers e esmalterias mostrarem serviços, valores e facilitarem novos agendamentos.",
    resources: ["Serviços", "Duração média", "Valores", "Chamada para manutenção"],
  },
];

const process = [
  {
    title: "Análise",
    text: "Entendemos o negócio, o público e o problema principal.",
  },
  {
    title: "Estratégia",
    text: "Definimos a solução ideal: página, sistema, automação ou fluxo completo.",
  },
  {
    title: "Design",
    text: "Criamos uma experiência visual profissional, clara e alinhada à marca.",
  },
  {
    title: "Desenvolvimento",
    text: "Construímos com código limpo, responsivo e preparado para evolução.",
  },
  {
    title: "Entrega",
    text: "Publicamos, revisamos e orientamos os próximos passos.",
  },
];

const reasons = [
  "Não criamos apenas telas bonitas; criamos ferramentas com objetivo.",
  "Pensamos em venda, operação, clareza e experiência do usuário.",
  "Construímos soluções simples de usar e fáceis de evoluir.",
  "Ajudamos negócios a sair do improviso digital.",
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center motion-safe:animate-[atlas-reveal_620ms_ease-out_both]">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="atlas-support-text mt-4 text-base leading-7">{description}</p>
      ) : null}
    </div>
  );
}

export function LandingSections() {
  return (
    <>
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Problemas"
            title="Seu negócio não precisa de mais improviso. Precisa de estrutura."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <ProblemCard key={problem} title={problem} />
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Soluções"
            title="Soluções digitais criadas para vender, organizar e automatizar."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Portfólio conceito"
            title="Projetos conceito para demonstrar possibilidades reais."
            description="Os exemplos abaixo são demonstrativos criados para mostrar formatos, fluxos e aplicações possíveis. Não representam clientes reais."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Processo"
            title="Do diagnóstico à entrega, com clareza em cada etapa."
          />
          <div className="grid gap-4 lg:grid-cols-5">
            {process.map((step, index) => (
              <ProcessStep key={step.title} index={index + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="motion-safe:animate-[atlas-reveal_620ms_ease-out_both]">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Diferencial
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Tecnologia com visão de negócio.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <FeatureItem key={reason} text={reason} />
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="atlas-card relative overflow-hidden rounded-[2rem] p-8 text-center motion-safe:animate-[atlas-reveal_680ms_ease-out_both] sm:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
            />
            <Route className="mx-auto mb-5 h-8 w-8 text-cyan-200" aria-hidden="true" />
            <h2 className="mx-auto max-w-3xl font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Quer transformar sua presença digital em uma estrutura de vendas e operação?
            </h2>
            <p className="atlas-support-text mx-auto mt-4 max-w-2xl leading-7">
              Solicite uma análise gratuita e descubra como a Atlas Systems pode criar uma
              solução para o seu negócio.
            </p>
            <div className="mt-8">
              <CTAButton
                href={WHATSAPP_URL}
                aria-label="Solicitar análise gratuita pelo WhatsApp da Atlas Systems"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar análise gratuita
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
