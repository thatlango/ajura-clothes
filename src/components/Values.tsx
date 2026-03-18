import { BookOpen, Scale, Globe, Anchor } from "lucide-react";
import { FadeIn } from "./FadeIn";

const values = [
  {
    title: "Faith-Rooted Design",
    description: "Every collection is designed with biblical principles as the foundation—beauty, modesty, and excellence in every detail.",
    icon: BookOpen,
  },
  {
    title: "Ethical Craftsmanship",
    description: "We partner with skilled artisans, ensuring fair wages, safe conditions, and dignity in the workplace.",
    icon: Scale,
  },
  {
    title: "Environmental Stewardship",
    description: "From sustainable materials to minimal waste production, we honor creation by caring for the Earth.",
    icon: Globe,
  },
  {
    title: "Timeless Quality",
    description: "Our garments are built to last beyond trends—investment pieces that serve you for years to come.",
    icon: Anchor,
  },
];

export function Values() {
  return (
    <section id="values" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-3">What We Stand For</h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-foreground">Our Core Values</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {values.map((value, idx) => (
            <FadeIn key={value.title} delay={idx * 0.15}>
              <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 h-full flex gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <value.icon size={28} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
