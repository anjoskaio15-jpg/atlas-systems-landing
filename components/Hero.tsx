import { HeroBanners } from "@/components/HeroBanners";

export function Hero() {
  return (
    <section className="relative px-6 pb-20 pt-28 sm:pt-32 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-atlas-radial" />
      <div className="absolute inset-x-0 top-20 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <HeroBanners />
    </section>
  );
}
