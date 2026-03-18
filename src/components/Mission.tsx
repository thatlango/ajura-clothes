import { Heart, Handshake, Leaf } from "lucide-react";
import { FadeIn } from "./FadeIn";

const pillars = [
  {
    title: "Dignity & Purpose",
    icon: Heart,
    description: "Every piece reflects biblical values, honoring the dignity of the wearer.",
  },
  {
    title: "Ethical Production",
    icon: Handshake,
    description: "Honoring makers through fair wages and safe, dignified working conditions.",
  },
  {
    title: "Sustainable Design",
    icon: Leaf,
    description: "Reducing waste and stewarding creation through thoughtful material choices.",
  },
];

export function Mission() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-3">Our Mission</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-8">
              Where Faith Meets Craftsmanship
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ajura Clothes was born from a vision to create fashion that honors God and uplifts communities in East Africa. We believe clothing is more than fabric—it's an expression of identity, dignity, and purpose. Every stitch is guided by biblical principles of excellence, stewardship, and love for neighbor.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {pillars.map((pillar, idx) => (
            <FadeIn key={pillar.title} delay={idx * 0.2}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-secondary/5 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                  <pillar.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {pillar.title}
                </h4>
                <p className="text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
