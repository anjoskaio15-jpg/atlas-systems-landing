import {
  BarChart3,
  Bot,
  Boxes,
  CalendarCheck,
  Code2,
  Gauge,
  LayoutTemplate,
  Lightbulb,
  Link,
  MessageCircle,
  MessagesSquare,
  MousePointerClick,
  PenTool,
  PlugZap,
  Rocket,
  Route,
  Search,
  ShieldCheck,
  TrendingUp,
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
  { icon: MessageCircle, title: "Agendamentos perdidos no WhatsApp" },
  { icon: Workflow, title: "Processos manuais e repetitivos" },
  { icon: LayoutTemplate, title: "Falta de presença digital profissional" },
  { icon: Search, title: "Clientes sem clareza sobre serviços e preços" },
  { icon: MessagesSquare, title: "Atendimento desorganizado" },
  { icon: TrendingUp, title: "Baixa conversão de visitantes em contatos" },
];

const services = [
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    text: "Páginas estratégicas para apresentar ofertas, gerar confiança e transformar visitantes em conversas qualificadas.",
  },
  {
    icon: CalendarCheck,
    title: "Sistemas de Agendamento",
    text: "Fluxos digitais para clientes escolherem serviço, dia e horário com mais clareza antes do atendimento.",
  },
  {
    icon: Bot,
    title: "Automações",
    text: "Rotinas automatizadas para organizar atendimentos, reduzir retrabalho e manter respostas mais consistentes.",
  },
  {
    icon: Boxes,
    title: "SaaS e Sistemas Sob Medida",
    text: "Ferramentas digitais desenhadas para processos específicos do negócio, com interface simples e preparada para evolução.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    text: "Painéis objetivos para acompanhar informações essenciais da operação e tomar decisões com mais clareza.",
  },
  {
    icon: PlugZap,
    title: "Integrações",
    text: "Conexões com WhatsApp, formulários e ferramentas digitais para melhorar o fluxo de trabalho.",
  },
];

const projects = [
  {
    icon: LayoutTemplate,
    title: "Landing Page de Conversão",
    href: "/projetos/conversion-landing-page",
    description:
      "Uma página estratégica para apresentar uma oferta, gerar confiança e transformar visitantes em contatos qualificados.",
    resources: [
      "Proposta de valor clara",
      "Seções de confiança e diferenciação",
      "Chamada para WhatsApp",
      "Design responsivo",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Página de Serviços com Pré-agendamento",
    href: "/projetos/service-page-pre-booking",
    description:
      "Uma página para o cliente entender serviços, valores e próximos passos antes de iniciar uma conversa no WhatsApp.",
    resources: [
      "Lista de serviços",
      "Valores e duração",
      "Seleção de interesse",
      "Mensagem pré-preenchida para atendimento",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Sistema de Agendamento Inteligente",
    href: "/projetos/smart-booking-system",
    description:
      "Um fluxo digital para organizar horários, serviços e profissionais, reduzindo conversas repetitivas e erros manuais.",
    resources: [
      "Serviços por categoria",
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
      "Fluxos criados para responder, orientar, confirmar e recuperar clientes com mais velocidade e consistência.",
    resources: [
      "Mensagens automatizadas",
      "Confirmação de agendamento",
      "Lembretes",
      "Pós-atendimento",
    ],
  },
  {
    icon: Gauge,
    title: "Dashboard Operacional",
    href: "/projetos/operational-dashboard",
    description:
      "Um painel simples para acompanhar informações importantes do negócio e tomar decisões com mais clareza.",
    resources: [
      "Agendamentos",
      "Clientes",
      "Serviços mais procurados",
      "Indicadores essenciais",
    ],
  },
  {
    icon: Boxes,
    title: "Mini CRM para Clientes",
    href: "/projetos/mini-crm-customers",
    description:
      "Um sistema leve de gestão de clientes para organizar contatos, histórico e preferências, melhorando o relacionamento e o retorno.",
    resources: [
      "Cadastro de clientes",
      "Histórico de serviços",
      "Anotações importantes",
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

const reasons = [
  {
    icon: Route,
    text: "Não criamos apenas telas bonitas; criamos ferramentas com objetivo.",
  },
  {
    icon: TrendingUp,
    text: "Pensamos em venda, operação, clareza e experiência do usuário.",
  },
  {
    icon: Link,
    text: "Construímos soluções simples de usar e fáceis de evoluir.",
  },
  {
    icon: ShieldCheck,
    text: "Ajudamos negócios a sair do improviso digital com mais segurança e método.",
  },
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
          <div className="atlas-mobile-carousel md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <ProblemCard key={problem.title} {...problem} />
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
          <div className="atlas-mobile-carousel md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Modelos de solução"
            title="Soluções digitais para transformar atenção em operação"
            description="Modelos de soluções que a Atlas Systems pode desenvolver para negócios que querem vender, organizar e automatizar melhor. São exemplos de aplicação, não estudos de caso de clientes."
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
            eyebrow="Processo"
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Diferencial
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Tecnologia com visão de negócio.
            </h2>
          </div>
          <div className="atlas-mobile-carousel md:grid-cols-2">
            {reasons.map((reason) => (
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
