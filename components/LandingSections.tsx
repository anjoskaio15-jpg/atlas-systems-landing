import {
  BarChart3,
  Bot,
  Boxes,
  CalendarCheck,
  Code2,
  Gauge,
  LayoutTemplate,
  Lightbulb,
  MessageCircle,
  MessagesSquare,
  MousePointerClick,
  PenTool,
  PlugZap,
  Rocket,
  Route,
  Search,
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
  {
    icon: MessageCircle,
    title: "O WhatsApp vira gargalo",
    text: "Mensagens se acumulam, perguntas se repetem e o atendimento depende de tempo livre para responder tudo manualmente.",
  },
  {
    icon: MousePointerClick,
    title: "O cliente interessado não sabe o próximo passo",
    text: "Ele vê o perfil, gosta do serviço, mas não encontra uma página clara com valores, detalhes, horários ou uma chamada objetiva para agir.",
  },
  {
    icon: CalendarCheck,
    title: "A agenda depende de memória e conversa",
    text: "Horários, serviços, profissionais e confirmações ficam espalhados em mensagens, aumentando o risco de falhas e desencontros.",
  },
  {
    icon: LayoutTemplate,
    title: "Serviços bons parecem menos profissionais",
    text: "Quando a apresentação digital não acompanha a qualidade do serviço, o negócio perde autoridade antes mesmo da primeira conversa.",
  },
  {
    icon: Workflow,
    title: "A operação cresce, mas o processo continua manual",
    text: "O que funcionava com poucos clientes começa a gerar atraso, ruído e perda de controle quando a demanda aumenta.",
  },
  {
    icon: Search,
    title: "Dados importantes somem no atendimento",
    text: "Preferências, histórico, retornos e oportunidades ficam perdidos em conversas, sem uma estrutura simples para acompanhar.",
  },
];

const services = [
  {
    icon: MousePointerClick,
    title: "Páginas que explicam antes de vender",
    text: "Apresente serviços, diferenciais, valores, localização e chamada para contato em uma estrutura clara e profissional.",
  },
  {
    icon: CalendarCheck,
    title: "Pré-agendamento mais organizado",
    text: "Permita que o cliente indique serviço, interesse, data ou horário antes da conversa começar no WhatsApp.",
  },
  {
    icon: Bot,
    title: "Automações para reduzir repetição",
    text: "Padronize mensagens, confirmações, lembretes e retornos para economizar tempo e diminuir falhas manuais.",
  },
  {
    icon: Boxes,
    title: "Sistemas para estruturar a rotina",
    text: "Crie fluxos digitais para controlar serviços, horários, clientes, solicitações e informações importantes.",
  },
  {
    icon: BarChart3,
    title: "Dashboards para enxergar o negócio",
    text: "Organize indicadores essenciais para acompanhar atendimentos, interesses, serviços procurados e oportunidades.",
  },
  {
    icon: PlugZap,
    title: "Integrações para conectar canais",
    text: "Conecte páginas, formulários, WhatsApp e ferramentas digitais para evitar que informações fiquem espalhadas.",
  },
];

const projects = [
  {
    icon: LayoutTemplate,
    title: "Landing Page de Conversão",
    href: "/projetos/conversion-landing-page",
    description:
      "Uma página estratégica para apresentar uma oferta, gerar confiança e direcionar o visitante para uma ação clara.",
    resources: [
      "Proposta objetiva",
      "Prova e diferenciais",
      "CTA para WhatsApp",
      "Design responsivo",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Página de Serviços com Pré-agendamento",
    href: "/projetos/service-page-pre-booking",
    description:
      "Uma estrutura onde o cliente entende serviços, valores, duração e próximos passos antes de iniciar o atendimento.",
    resources: [
      "Serviços organizados",
      "Valores e duração",
      "Seleção de interesse",
      "Mensagem pronta",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Sistema de Agendamento Inteligente",
    href: "/projetos/smart-booking-system",
    description:
      "Um fluxo para organizar serviços, horários e profissionais com mais clareza, reduzindo conversas repetitivas.",
    resources: [
      "Categorias de serviços",
      "Horários disponíveis",
      "Dados do cliente",
      "Confirmação organizada",
    ],
  },
  {
    icon: MessagesSquare,
    title: "Automação de Atendimento",
    href: "/projetos/customer-service-automation",
    description:
      "Fluxos para orientar, confirmar, lembrar e recuperar clientes com mais agilidade e padronização.",
    resources: [
      "Confirmações",
      "Lembretes",
      "Pós-atendimento",
      "Recuperação de interesse",
    ],
  },
  {
    icon: Gauge,
    title: "Dashboard Operacional",
    href: "/projetos/operational-dashboard",
    description:
      "Um painel simples para acompanhar informações importantes e tomar decisões com mais clareza.",
    resources: [
      "Atendimentos",
      "Clientes",
      "Serviços procurados",
      "Indicadores essenciais",
    ],
  },
  {
    icon: Boxes,
    title: "Mini CRM para Clientes",
    href: "/projetos/mini-crm-customers",
    description:
      "Uma base leve para organizar contatos, histórico, preferências e oportunidades de retorno.",
    resources: [
      "Cadastro de clientes",
      "Histórico",
      "Observações",
      "Ações de retorno",
    ],
  },
];

const process = [
  {
    icon: Search,
    title: "Análise",
    text: "Entendemos o negócio, o público e o problema principal.",
  },
  {
    icon: Lightbulb,
    title: "Estratégia",
    text: "Definimos a solução ideal: página, sistema, automação ou fluxo completo.",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "Criamos uma experiência visual profissional, clara e alinhada à marca.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    text: "Construímos com código limpo, responsivo e preparado para evolução.",
  },
  {
    icon: Rocket,
    title: "Entrega",
    text: "Publicamos, revisamos e orientamos os próximos passos.",
  },
];

const trustPoints = [
  {
    icon: Search,
    title: "Clareza antes de código",
    text: "Antes de desenvolver, entendemos o problema, o público, o fluxo de atendimento e o objetivo comercial.",
  },
  {
    icon: PenTool,
    title: "Design com função",
    text: "A interface precisa ser bonita, mas também precisa guiar o visitante para a próxima ação.",
  },
  {
    icon: Workflow,
    title: "Estrutura simples de usar",
    text: "Soluções pensadas para o negócio operar melhor sem depender de processos complicados.",
  },
  {
    icon: Rocket,
    title: "Base preparada para crescer",
    text: "O projeto nasce enxuto, mas com organização suficiente para evoluir conforme a demanda aumenta.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center motion-safe:animate-[atlas-reveal_620ms_ease-out_both]">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="atlas-support-text mt-4 text-base leading-7">{description}</p>
      ) : null}
    </div>
  );
}

function ContextCTA({
  title,
  buttonLabel,
}: {
  title: string;
  buttonLabel: string;
}) {
  return (
    <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:flex-row sm:items-center">
      <p className="font-heading text-lg font-semibold text-white">{title}</p>
      <CTAButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        {buttonLabel}
      </CTAButton>
    </div>
  );
}

export function LandingSections() {
  return (
    <>
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="O problema raramente é falta de cliente. É falta de estrutura para converter e organizar."
            description="Muitos negócios até recebem atenção no Instagram e no WhatsApp, mas perdem oportunidades porque o caminho entre interesse, atendimento e agendamento ainda depende de improviso."
          />
          <div className="atlas-mobile-carousel md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <ProblemCard key={problem.title} {...problem} />
            ))}
          </div>
          <ContextCTA
            title="Identificou isso no seu negócio?"
            buttonLabel="Solicitar análise gratuita"
          />
        </div>
      </section>

      <section id="solucoes" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Quando o processo fica claro, o atendimento melhora e a operação evolui."
            description="A Atlas Systems cria estruturas digitais que ajudam o cliente a entender, escolher, solicitar e avançar com menos atrito — enquanto o negócio ganha mais organização para atender melhor."
          />
          <div className="atlas-mobile-carousel md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <ContextCTA
            title="Veja qual estrutura faz sentido para sua operação."
            buttonLabel="Conversar sobre meu projeto"
          />
        </div>
      </section>

      <section id="projetos" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Aplicações digitais que conectam interesse, atendimento e operação."
            description="Estruturas que podem ser adaptadas para salões, barbearias, clínicas de estética, prestadores de serviço e negócios que dependem de atendimento, agenda e relacionamento."
          />
          <div className="atlas-mobile-carousel md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Do diagnóstico à entrega, com clareza em cada etapa."
          />
          <div className="atlas-mobile-carousel md:grid-cols-3 lg:grid-cols-5">
            {process.map((step, index) => (
              <ProcessStep key={step.title} index={index + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="motion-safe:animate-[atlas-reveal_620ms_ease-out_both]">
            <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Construído para ser claro, útil e preparado para evoluir.
            </h2>
            <p className="atlas-support-text mt-4 text-base leading-7">
              Cada projeto é pensado para resolver um problema real de operação, não apenas para
              parecer bonito. A prioridade é criar uma estrutura simples de usar, fácil de
              entender e pronta para crescer com o negócio.
            </p>
          </div>
          <div className="atlas-mobile-carousel md:grid-cols-2">
            {trustPoints.map((reason) => (
              <FeatureItem key={reason.text} {...reason} />
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
              Quer transformar atendimento manual em uma estrutura digital mais profissional?
            </h2>
            <p className="atlas-support-text mx-auto mt-4 max-w-2xl leading-7">
              Solicite uma análise gratuita e descubra quais páginas, sistemas ou automações
              fazem mais sentido para o seu negócio agora.
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
