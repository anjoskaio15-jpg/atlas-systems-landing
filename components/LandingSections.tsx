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
  {
    icon: MessageCircle,
    title: "Agendamentos se perdem no WhatsApp",
    text: "Mensagens chegam fora de ordem, horários ficam soltos e oportunidades desaparecem no meio da conversa.",
  },
  {
    icon: Workflow,
    title: "Rotinas manuais consomem tempo",
    text: "Quando tudo depende de copiar, responder e conferir manualmente, a operação fica lenta e vulnerável a falhas.",
  },
  {
    icon: LayoutTemplate,
    title: "A presença digital não transmite confiança",
    text: "Sem uma página clara, o cliente demora a entender serviços, valores, diferenciais e próximos passos.",
  },
  {
    icon: Search,
    title: "Informação importante fica espalhada",
    text: "Serviços, preços, disponibilidade e orientações acabam dispersos entre conversas, posts e memória da equipe.",
  },
  {
    icon: MessagesSquare,
    title: "O atendimento fica difícil de padronizar",
    text: "Cada resposta sai de um jeito, confirmações falham e o cliente sente falta de clareza no processo.",
  },
  {
    icon: TrendingUp,
    title: "Visitantes não viram contatos qualificados",
    text: "Sem uma jornada bem pensada, o interesse inicial não se transforma em conversa, agendamento ou venda.",
  },
];

const services = [
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    text: "Páginas estratégicas para apresentar ofertas, responder dúvidas essenciais e transformar visitantes em conversas qualificadas.",
  },
  {
    icon: CalendarCheck,
    title: "Sistemas de Agendamento",
    text: "Fluxos digitais para o cliente escolher serviço, dia e horário com menos fricção antes do atendimento.",
  },
  {
    icon: Bot,
    title: "Automações",
    text: "Rotinas automatizadas para confirmar, orientar, lembrar e organizar etapas repetitivas com mais consistência.",
  },
  {
    icon: Boxes,
    title: "SaaS e Sistemas Sob Medida",
    text: "Ferramentas digitais para processos específicos do negócio, com interface simples e base preparada para evolução.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    text: "Painéis objetivos para acompanhar a operação, enxergar padrões e tomar decisões com mais contexto.",
  },
  {
    icon: PlugZap,
    title: "Integrações",
    text: "Conexões entre WhatsApp, formulários e ferramentas digitais para reduzir ruído e melhorar o fluxo de trabalho.",
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

export function LandingSections() {
  return (
    <>
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Quando o digital não acompanha a operação, o negócio perde tempo, clareza e oportunidades."
            description="O problema não é só atender. É atender sem estrutura, sem fluxo claro e sem uma experiência que conduza o cliente até a ação."
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
            title="Soluções criadas para organizar atendimento, automatizar rotinas e vender melhor."
            description="Quando o processo fica claro, o atendimento melhora, a equipe ganha tempo e o cliente entende exatamente o próximo passo."
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
            title="Aplicações que conectam presença digital, atendimento e operação."
            description="Estruturas digitais que podem ser adaptadas ao seu negócio para unir clareza, automação e experiência. São modelos de aplicação, não estudos de caso de clientes."
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
