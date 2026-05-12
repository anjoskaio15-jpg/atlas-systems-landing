"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Boxes,
  CalendarCheck,
  CheckCircle2,
  Layers,
  MessageCircle,
  MousePointerClick,
  PlugZap,
  Workflow,
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { WHATSAPP_URL } from "@/lib/constants";

const AUTO_ROTATE_MS = 5000;

const banners = [
  {
    badge: "SaaS • Sistemas • Automações • Landing Pages",
    title: "Sistemas, páginas e automações para negócios venderem mais e operarem melhor.",
    description:
      "A Atlas Systems cria estrutura digital para empresas que querem transformar processos manuais em soluções profissionais, inteligentes e escaláveis.",
    support: "Projetos pensados para clareza, conversão e operação.",
    niche:
      "Ideal para salões, barbearias, clínicas de estética e negócios que dependem de atendimento, agendamento e WhatsApp.",
    secondaryHref: "#solucoes",
    secondaryText: "Ver soluções",
  },
  {
    badge: "Jornada operacional",
    title: "Do atendimento manual a uma operação digital organizada.",
    description:
      "Conecte páginas, pré-agendamento, WhatsApp, automações e indicadores em uma estrutura mais clara para o seu negócio.",
    support:
      "Uma jornada digital pensada para reduzir improviso, organizar informações e facilitar decisões.",
    niche:
      "O caminho fica mais previsível quando cada etapa conduz o cliente e orienta a operação.",
    secondaryHref: "#projetos",
    secondaryText: "Entender possibilidades",
  },
];

const dashboardItems = [
  { label: "Páginas", value: "Conversão", icon: Layers },
  { label: "Sistemas", value: "Processo claro", icon: Boxes },
  { label: "Automações", value: "Menos retrabalho", icon: Workflow },
];

const journeySteps = [
  {
    title: "Cliente encontra",
    icon: MousePointerClick,
    details: ["Página profissional", "Serviços claros", "CTA para WhatsApp"],
  },
  {
    title: "Cliente solicita",
    icon: CalendarCheck,
    details: ["Pré-agendamento", "Interesse do serviço", "Mensagem pronta"],
  },
  {
    title: "Negócio organiza",
    icon: MessageCircle,
    details: ["Atendimento padronizado", "Agenda estruturada", "Dados centralizados"],
  },
  {
    title: "Evolução contínua",
    icon: BarChart3,
    details: ["Automações", "Dashboard", "Retorno de clientes"],
  },
];

function DashboardVisual() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-4 shadow-panel backdrop-blur">
      <div className="rounded-[1.35rem] border border-white/10 bg-atlas-deep/80 p-5">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Atlas Operação</p>
            <p className="font-heading text-xl font-semibold text-white">Painel comercial</p>
          </div>
          <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            Menos manual
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {dashboardItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
              >
                <Icon className="mb-4 h-5 w-5 text-cyan-200" aria-hidden="true" />
                <p className="text-xs text-slate-400">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
              Estrutura de conversão
            </p>
            <BarChart3 className="h-5 w-5 text-cyan-200" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-12 items-end gap-2">
            {[42, 58, 48, 72, 62, 80, 70, 86, 76, 92, 82, 96].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className="rounded-t-md bg-gradient-to-t from-sky-500/35 to-cyan-200"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {["Oferta clara", "CTA visível", "Fluxo orientado", "Base escalável"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JourneyVisual() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-4 shadow-panel backdrop-blur">
      <div className="relative rounded-[1.35rem] border border-white/10 bg-atlas-deep/80 p-5">
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-10 top-20 hidden w-px bg-gradient-to-b from-cyan-300/70 via-cyan-300/25 to-transparent lg:block"
        />
        <div className="mb-6">
          <p className="text-sm text-slate-400">Mapa da jornada</p>
          <p className="font-heading text-xl font-semibold text-white">
            Da descoberta ao retorno
          </p>
        </div>

        <div className="grid gap-4">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-heading text-base font-semibold text-white">
                        {step.title}
                      </p>
                      <span className="rounded-full bg-white/[0.055] px-2.5 py-1 text-xs font-semibold text-slate-400">
                        Etapa {index + 1}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-white/10 bg-atlas-deep/70 px-3 py-1.5 text-xs font-medium text-slate-300"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function HeroBanners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const interactionTimer = useRef<number | null>(null);

  const goTo = (index: number) => {
    setActiveIndex((index + banners.length) % banners.length);
  };

  const markInteraction = () => {
    setIsInteracting(true);

    if (interactionTimer.current) {
      window.clearTimeout(interactionTimer.current);
    }

    interactionTimer.current = window.setTimeout(() => {
      setIsInteracting(false);
    }, 3500);
  };

  const next = () => {
    markInteraction();
    goTo(activeIndex + 1);
  };

  const previous = () => {
    markInteraction();
    goTo(activeIndex - 1);
  };

  useEffect(() => {
    if (isInteracting) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(interval);
  }, [isInteracting]);

  useEffect(() => {
    return () => {
      if (interactionTimer.current) {
        window.clearTimeout(interactionTimer.current);
      }
    };
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
    markInteraction();
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) {
      return;
    }

    const distance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(distance) < 42) {
      return;
    }

    goTo(distance < 0 ? activeIndex + 1 : activeIndex - 1);
  };

  return (
    <div className="relative mx-auto max-w-6xl">
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/16 via-sky-500/8 to-transparent blur-2xl"
      />
      <div className="atlas-card overflow-hidden rounded-[2rem] p-3 shadow-panel sm:rounded-[2.5rem] sm:p-4">
        <div
          className="relative touch-pan-y overflow-hidden rounded-[1.55rem] sm:rounded-[2rem]"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStartX.current = null;
          }}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {banners.map((banner, index) => (
              <article
                key={banner.title}
                className="atlas-card-inner relative min-w-full overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.075]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.42) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.42) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl"
                />

                <div className="relative grid min-h-[760px] items-center gap-9 lg:min-h-[620px] lg:grid-cols-[1.02fr_0.98fr]">
                  <div>
                    <p className="atlas-badge mb-5 max-w-full">{banner.badge}</p>
                    {index === 0 ? (
                      <h1 className="atlas-title-gradient font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                        {banner.title}
                      </h1>
                    ) : (
                      <h2 className="atlas-title-gradient font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                        {banner.title}
                      </h2>
                    )}
                    <p className="atlas-support-text mt-5 max-w-2xl text-base leading-8 sm:text-lg">
                      {banner.description}
                    </p>
                    <p className="mt-5 text-sm font-medium text-slate-300">{banner.support}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-atlas-soft">
                      {banner.niche}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <CTAButton
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solicitar análise gratuita
                      </CTAButton>
                      <CTAButton href={banner.secondaryHref} variant="secondary">
                        {banner.secondaryText}
                      </CTAButton>
                    </div>
                  </div>

                  <div className="relative">
                    {index === 0 ? <DashboardVisual /> : <JourneyVisual />}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 px-1">
          <div className="flex items-center gap-2">
            {banners.map((banner, index) => (
              <button
                key={banner.badge}
                type="button"
                aria-label={`Mostrar banner ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-cyan-300" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => {
                  markInteraction();
                  goTo(index);
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Banner anterior"
              className="atlas-focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-cyan-200/50 hover:bg-white/[0.08]"
              onClick={previous}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Próximo banner"
              className="atlas-focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-cyan-200/50 hover:bg-white/[0.08]"
              onClick={next}
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
