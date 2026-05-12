import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LandingSections } from "@/components/LandingSections";

export default function Home() {
  return (
    <main className="atlas-page-shell min-h-screen overflow-hidden text-white">
      <Header />
      <Hero />
      <LandingSections />
      <Footer />
    </main>
  );
}
