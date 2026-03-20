import { Heart, Handshake, Leaf } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Link } from "wouter";

const pillars = [
  {
    title: "Faith-Driven",
    icon: Heart,
    description: "Biblical values guide every decision — from design to production to how we treat every person in our supply chain.",
  },
  {
    title: "Ethical Production",
    icon: Handshake,
    description: "Fair wages, dignified work, and transparent supply chains. Honoring makers and wearers equally.",
  },
  {
    title: "Sustainable by Conviction",
    icon: Leaf,
    description: "AjuraFit reduces fabric waste by 30% through precision measurement — not a marketing trend, but a moral imperative.",
  },
];

export function Mission() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#09611E" }}>
              Why We Exist
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-8">
              Fashion Should{" "}
              <span className="italic" style={{ color: "#09611E" }}>Mean More</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              People are asking deeper questions: Who made my clothes? How were they made? Do they reflect my values?
              Ajura Clothes was born from those very questions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200 hover:opacity-75"
              style={{ color: "#09611E" }}
            >
              Read Our Full Story <span>→</span>
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {pillars.map((pillar, idx) => (
            <FadeIn key={pillar.title} delay={idx * 0.15}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: "rgba(9,97,30,0.08)", color: "#09611E" }}>
                  <pillar.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">{pillar.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
