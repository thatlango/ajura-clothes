import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { BookOpen, Star, Shield, Anchor, Scale, Globe } from "lucide-react";

const coreValues = [
  {
    icon: BookOpen,
    title: "Faith-Driven",
    desc: "Rooted in biblical values that guide every decision we make — from design to the dignity we extend to every person in our supply chain.",
  },
  {
    icon: Star,
    title: "Dignity",
    desc: "Every garment reflects the worth of those who make and wear it. Dignity is not optional — it's foundational.",
  },
  {
    icon: Shield,
    title: "Modesty",
    desc: "Style that honors the body without compromise. We believe modesty is a strength, not a limitation.",
  },
  {
    icon: Anchor,
    title: "Excellence",
    desc: "Craftsmanship worthy of the Creator we serve. We don't cut corners because our work is an act of worship.",
  },
  {
    icon: Scale,
    title: "Stewardship",
    desc: "Caring for resources, people, and creation. Every order is an opportunity to honor what God has entrusted to us.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    desc: "Ethical production as moral imperative, not marketing trend. Every accurate first-time order prevents unnecessary remake waste.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "#09611E" }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #0FA958 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4A725E 0%, transparent 50%)"
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-white/60 mb-4">
              Our Story
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              AJURA CLOTHES —
              <br />
              <span className="italic font-light text-3xl sm:text-4xl md:text-5xl" style={{ color: "#0FA958" }}>Creative Bold African</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              There's a growing feeling that fashion should mean more than just what we wear.
              People are asking deeper questions. Ajura Clothes was born from those very questions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 1: Our Foundation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#09611E" }}>
                  Our Foundation
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  Crafted with Conviction
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                  We believe clothing should reflect dignity, purpose, and faith. In a world of fast fashion
                  and waste, we felt called to do things differently — to create garments that honor God,
                  respect the people who make them, and care for the environment we've been given to steward.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every decision we make — from design to production — is guided by faith, stewardship,
                  and excellence. This isn't branding. It's conviction.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-3xl overflow-hidden aspect-[4/3]" style={{ background: "rgba(9,97,30,0.05)", border: "1px solid rgba(9,97,30,0.1)" }}>
                <div className="w-full h-full flex items-center justify-center p-12 text-center">
                  <blockquote className="font-serif text-2xl sm:text-3xl italic leading-relaxed" style={{ color: "#09611E" }}>
                    "Where craftsmanship meets conviction. Every stitch guided by faith."
                  </blockquote>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 2: Our Vision */}
      <section className="py-24" style={{ background: "#FDFDFD" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1} direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { stat: "30%", label: "Fabric waste reduced through AjuraFit precision" },
                  { stat: "100%", label: "Tailors vetted for quality and ethical practices" },
                  { stat: "East Africa", label: "Setting a new standard for God-honoring fashion" },
                ].map((item) => (
                  <div key={item.stat} className="text-center p-6 rounded-2xl" style={{ background: "rgba(9,97,30,0.05)" }}>
                    <div className="text-3xl font-serif font-bold mb-2" style={{ color: "#09611E" }}>{item.stat}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#09611E" }}>
                  Our Vision
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  A New Standard for
                  <br />
                  <span className="italic" style={{ color: "#09611E" }}>God-Honoring Fashion</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                  Our vision is to set a new standard for God-honoring fashion in East Africa. That means
                  designing timeless pieces, producing responsibly, and choosing materials and processes
                  that reduce waste and respect creation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For our team, partners, and customers, this means building a brand that values craftsmanship,
                  ethical production, and sustainability — where every garment tells a story of purpose.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3: What This Means */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#09611E" }}>
                Our Commitment
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                What This Means in Practice
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Craftsmanship",
                desc: "Timeless pieces made with extraordinary care. We train and partner with skilled tailors who take pride in their work and understand that every garment represents someone's dignity.",
                icon: "✦",
              },
              {
                title: "Ethical Production",
                desc: "Fair wages, safe conditions, dignified work. We believe how a garment is made matters as much as how it looks. Our supply chain is transparent by design.",
                icon: "◈",
              },
              {
                title: "Sustainability",
                desc: "Waste is not inevitable — it's a choice. AjuraFit reduces fabric waste by 30% through precision measurement, proving that honoring creation and running a good business can go together.",
                icon: "◎",
              },
            ].map((item) => (
              <FadeIn key={item.title} delay={0.1}>
                <div className="p-8 rounded-2xl border h-full" style={{ borderColor: "#D9DAD9" }}>
                  <span className="text-3xl mb-4 block" style={{ color: "#09611E" }}>{item.icon}</span>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Core Values */}
      <section className="py-24" style={{ background: "#FDFDFD" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#09611E" }}>
                What We Stand For
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Our Core Values</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <FadeIn key={value.title} delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-border hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex gap-4 h-full">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(9,97,30,0.08)", color: "#09611E" }}>
                    <value.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 text-white text-center" style={{ background: "#09611E" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
              More Than a Fashion Label
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Ajura Clothes is a commitment to creating clothing that carries meaning — pieces people can
              wear with honor and confidence, knowing they represent something greater.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                style={{ background: "#0FA958", color: "#FDFDFD" }}>
                See How It Works
              </a>
              <a href="/for-tailors" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl border border-white/40 hover:bg-white/10 transition-all duration-200">
                Join Our Mission
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
