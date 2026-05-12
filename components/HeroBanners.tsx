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
    title: "Estrutura digital para negócios que vendem, atendem e agendam.",
    description:
      "A Atlas Systems cria páginas, sistemas e automações para transformar processos manuais em uma operação mais clara, profissional e organizada.",
    support: "Menos improviso. Mais clareza no atendimento, na conversão e na rotina.",
    secondaryHref: "#solucoes",
    secondaryText: "Ver soluções",
  },
  {
    badge: "Jornada digital",
    title: "Do atendimento manual à operação organizada.",
    description:
      "Páginas, pré-agendamento, automações e dashboards em uma estrutura mais clara.",
    support: "Menos improviso. Mais processo, atendimento e controle.",
    secondaryHref: "#projetos",
    secondaryText: "Entender possibilidades",
  },
];

const dashboardItems = [
  { label: "Páginas", value: "Conversão", icon: Layers },
  { label: "Sistemas", value: "Fluxo claro", icon: Boxes },
  { label: "Automações", value: "Menos manual", icon: Workflow },
];

const journeySteps = [
  {
    title: "Cliente encontra",
    icon: MousePointerClick,
    details: ["Página", "Serviços", "WhatsApp"],
  },
  {
    title: "Cliente solicita",
    icon: CalendarCheck,
    details: ["Pré-agendamento", "Interesse", "Mensagem pronta"],
  },
  {
    title: "Negócio organiza",
    icon: MessageCircle,
    details: ["Atendimento", "Agenda", "Dados"],
  },
  {
    title: "Operação evolui",
    icon: BarChart3,
    details: ["Automações", "Dashboard", "Retorno"],
  },
];

function DashboardVisual() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-3 shadow-panel backdrop-blur sm:p-4">
      <div className="rounded-[1.15rem] border border-white/10 bg-atlas-deep/80 p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-4 sm:mb-6">
          <div>
            <p className="text-xs text-slate-400 sm:text-sm">Atlas Operação</p>
            <p className="font-heading text-lg font-semibold text-white sm:text-xl">
              Painel comercial
            </p>
          </div>
          <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            Ativo
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {dashboardItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 sm:p-4"
              >
                <Icon className="mb-3 h-4 w-4 text-cyan-200 sm:h-5 sm:w-5" aria-hidden="true" />
                <p className="text-[0.68rem] text-slate-400 sm:text-xs">{item.label}</p>
                <p className="mt-1 text-xs font-semibold text-white sm:mt-2 sm:text-sm">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:mt-5 sm:p-4">
          <div className="mb-3 flex items-center justify-between sm:mb-4">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
              Conversão
            </p>
            <BarChart3 className="h-4 w-4 text-cyan-200 sm:h-5 sm:w-5" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-12 items-end gap-1.5 sm:gap-2">
            {[26, 38, 32, 50, 42, 58, 48, 64, 54, 70, 60, 76].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className="rounded-t-md bg-gradient-to-t from-sky-500/35 to-cyan-200"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 hidden gap-3 sm:grid sm:grid-cols-2">
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
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-3 shadow-panel backdrop-blur sm:p-4">
      <div className="relative rounded-[1.15rem] border border-white/10 bg-atlas-deep/80 p-4 sm:p-5">
        <div
          aria-hidden="true"
          className="absolute left-8 top-16 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-cyan-300/70 via-cyan-300/25 to-transparent sm:block"
        />
        <div className="mb-4 sm:mb-5">
          <p className="text-xs text-slate-400 sm:text-sm">Mapa da jornada</p>
          <p className="font-heading text-lg font-semibold text-white sm:text-xl">
            Fluxo mais previsível
          </p>
        </div>

        <div className="grid gap-3">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4"
              >
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-200 sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-heading text-sm font-semibold text-white sm:text-base">
                        {step.title}
                      </p>
                      <span className="rounded-full bg-white/[0.055] px-2 py-0.5 text-[0.68rem] font-semibold text-slate-400 sm:px-2.5 sm:py-1 sm:text-xs">
                        {index + 1}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                      {step.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-white/10 bg-atlas-deep/70 px-2.5 py-1 text-[0.68rem] font-medium text-slate-300 sm:px-3 sm:py-1.5 sm:text-xs"
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
      <div className="atlas-card overflow-hidden rounded-[2rem] p-2.5 shadow-panel sm:rounded-[2.5rem] sm:p-4">
        <div
          className="relative touch-pan-y overflow-hidden rounded-[1.45rem] sm:rounded-[2rem]"
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
                className="atlas-card-inner relative min-w-full overflow-hidden px-4 py-6 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.42) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.42) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl sm:h-48 sm:w-48"
                />

                <div className="relative grid min-h-[600px] items-center gap-5 sm:min-h-[620px] sm:gap-8 lg:min-h-[520px] lg:grid-cols-[0.94fr_1.06fr]">
                  <div>
                    <p className="atlas-badge mb-4 max-w-full text-[0.65rem] sm:mb-5 sm:text-xs">
                      {banner.badge}
                    </p>
                    {index === 0 ? (
                      <h1 className="atlas-title-gradient font-heading text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                        {banner.title}
                      </h1>
                    ) : (
                      <h2 className="atlas-title-gradient font-heading text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                        {banner.title}
                      </h2>
                    )}
                    <p className="atlas-support-text mt-4 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
                      {banner.description}
                    </p>
                    <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-slate-300 sm:mt-4">
                      {banner.support}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
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

        <div className="mt-3 flex items-center justify-between gap-4 px-1 sm:mt-4">
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
