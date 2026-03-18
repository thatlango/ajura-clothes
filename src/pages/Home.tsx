import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { AjuraFit } from "@/components/AjuraFit";
import { Values } from "@/components/Values";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <AjuraFit />
        <Values />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
