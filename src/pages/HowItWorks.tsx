import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Search, Ruler, Palette, Scissors, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choose Your Tailor",
    desc: "Browse our directory of vetted tailors across East Africa. See their work, specialties, and values. Every tailor is committed to ethical, sustainable practices — selected for excellence of craft and integrity of character.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "AjuraFit Measurement",
    desc: "Your tailor uses our AI-powered AjuraFit tool to capture precise body measurements digitally. Upload reference photos for accuracy. See how different styles will look on your actual body type — not a generic model.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Customize Your Garment",
    desc: "Choose from sustainable, quality materials. Select style details — collar, sleeves, fit preference. Visualize the final product with AI rendering. Approve the design and place your order with confidence.",
  },
  {
    number: "04",
    icon: Scissors,
    title: "Crafted with Excellence",
    desc: "Your tailor receives precise specifications and gets to work. Every garment is made with care and skill. AjuraFit's first-time accuracy means less waste, lower cost, and a result that truly honors the craft.",
  },
  {
    number: "05",
    icon: Package,
    title: "Wear with Confidence",
    desc: "Receive your perfectly-fitted garment. Know exactly who made it and how they were treated. Share your experience, rate your tailor, and wear something that means more than just looking good.",
  },
];

const whyItMatters = [
  {
    stat: "30%",
    label: "Less Fabric Waste",
    desc: "AjuraFit reduces fabric waste through precision measurement — honoring creation through efficiency.",
  },
  {
    stat: "100%",
    label: "Fair Wages",
    desc: "Every order supports skilled tailors with fair wages and dignified working conditions.",
  },
  {
    stat: "Zero",
    label: "Compromises on Fit",
    desc: "Say goodbye to ill-fitting clothes. AjuraFit ensures garments made for your actual body.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24" style={{ background: "#09611E" }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 70% 50%, #0FA958 0%, transparent 60%)"
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-white/60 mb-4">The Process</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              From Measurement<br />
              <span className="italic font-light" style={{ color: "#0FA958" }}>to Masterpiece</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Ajura connects you with skilled tailors and cutting-edge technology to create garments
              that fit your body and your values.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <FadeIn key={step.number} delay={idx * 0.1}>
                <div className="flex gap-6 sm:gap-10 items-start">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ background: "rgba(9,97,30,0.08)", color: "#09611E" }}>
                      <step.icon size={26} strokeWidth={1.5} />
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-px flex-1 min-h-12 mt-3" style={{ background: "rgba(9,97,30,0.2)" }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-[0.2em]" style={{ color: "#0FA958" }}>
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24" style={{ background: "#FDFDFD" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#09611E" }}>
                Why This Matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Fashion That Honors Creation
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItMatters.map((item, idx) => (
              <FadeIn key={item.stat} delay={idx * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-white border border-border hover:shadow-md transition-all duration-200">
                  <div className="text-5xl font-serif font-bold mb-2" style={{ color: "#09611E" }}>{item.stat}</div>
                  <div className="text-base font-semibold text-foreground mb-3">{item.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center text-white" style={{ background: "#09611E" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Find a tailor near you and start your AjuraFit journey today. Clothes that fit your body and your values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                style={{ background: "#0FA958", color: "#FDFDFD" }}>
                Get in Touch
              </a>
              <a href="/for-tailors" className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl border border-white/40 hover:bg-white/10 transition-all duration-200">
                Are You a Tailor?
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
