import { BookOpen, Scale, Globe, Anchor, Star, Shield } from "lucide-react";
import { FadeIn } from "./FadeIn";

const values = [
  {
    title: "Faith-Driven",
    description: "Rooted in biblical values that guide every decision — from design to the dignity we extend to every person in our supply chain.",
    icon: BookOpen,
  },
  {
    title: "Dignity",
    description: "Every garment reflects the worth of those who make it and those who wear it. Dignity is not optional — it's foundational.",
    icon: Star,
  },
  {
    title: "Modesty",
    description: "Style that honors the body without compromise. We believe modesty is a strength, not a limitation.",
    icon: Shield,
  },
  {
    title: "Excellence",
    description: "Craftsmanship worthy of the Creator we serve. We don't cut corners because our work is an act of worship.",
    icon: Anchor,
  },
  {
    title: "Stewardship",
    description: "Caring for resources, people, and creation. Every order we fulfill is an opportunity to honor what God has entrusted to us.",
    icon: Scale,
  },
  {
    title: "Sustainability",
    description: "Ethical production as moral imperative, not marketing trend. AjuraFit reduces waste by 30% — because honoring creation matters.",
    icon: Globe,
  },
];

export function Values() {
  return (
    <section id="values" className="py-24 sm:py-32" style={{ background: "#FDFDFD" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#09611E" }}>
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground">Our Core Values</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Six convictions that shape every stitch, every partnership, and every decision we make.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, idx) => (
            <FadeIn key={value.title} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border hover:border-green-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 h-full flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(9,97,30,0.08)", color: "#09611E" }}>
                    <value.icon size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
