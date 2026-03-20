import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { BarChart2, Ruler, Globe, Smartphone, ArrowRight } from "lucide-react";

const features = [
  {
    icon: BarChart2,
    title: "Business Management",
    items: [
      "Track all orders from inquiry to completion",
      "Manage client database with measurement history",
      "Monitor revenue, expenses, and deposits",
      "Schedule fittings and pickups",
      "Analytics to understand and grow your business",
    ],
  },
  {
    icon: Ruler,
    title: "AjuraFit — AI Measurement Tool",
    items: [
      "Capture client measurements digitally with precision",
      "AI-powered visualization of final garments",
      "Generate professional order confirmations",
      "Reduce waste through first-time accuracy",
      "Impress clients with technology that honors your craft",
    ],
  },
  {
    icon: Globe,
    title: "Public Profile & Portfolio",
    items: [
      "Create your shareable business page",
      "Showcase your best work to attract clients",
      "Share on social media and WhatsApp",
      "Receive orders directly through your profile",
      "Build your reputation with ratings and reviews",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Access",
    items: [
      "Full web application for desktop work",
      "Mobile-optimized for on-the-go management",
      "Install as an app on your phone",
      "Access your studio anywhere, anytime",
      "Push notifications for new orders and messages",
    ],
  },
];

const benefits = [
  {
    forYou: true,
    title: "Reduce Fabric Waste",
    desc: "AjuraFit's precision measurement means less wasted material and lower costs per order.",
  },
  {
    forYou: true,
    title: "Build a Professional Presence",
    desc: "A shareable public profile and portfolio that showcases your craft and attracts quality clients.",
  },
  {
    forYou: true,
    title: "Grow Revenue with Better Tools",
    desc: "Efficient order management, client retention tracking, and analytics that help you improve over time.",
  },
  {
    forYou: false,
    title: "Perfect Fit, Every Time",
    desc: "Your clients receive garments that truly fit their bodies — not close enough, but exactly right.",
  },
  {
    forYou: false,
    title: "Modern, Professional Experience",
    desc: "Show your commitment to excellence with a platform that matches the quality of your craft.",
  },
  {
    forYou: false,
    title: "Know Who Made Their Garment",
    desc: "Clients see your story, your values, and your work — building trust that keeps them coming back.",
  },
];

export default function ForTailors() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "#09611E" }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 30% 60%, #0FA958 0%, transparent 50%), radial-gradient(circle at 80% 30%, #4A725E 0%, transparent 50%)"
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-white/60 mb-4">
              Ajura Studio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Your Workshop.
              <br />
              <span className="italic" style={{ color: "#0FA958" }}>Your Values.</span>
              <br />
              Your Growth.
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
              Ajura Studio gives you everything needed to run an excellent tailoring business
              rooted in purpose — not just profit.
            </p>
            <a href="https://studio.ajuraclothes.com"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-lg rounded-xl transition-all duration-200 hover:scale-105"
              style={{ background: "#0FA958", color: "#FDFDFD" }}>
              Create Your Studio <ArrowRight size={20} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* What Is Studio */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#09611E" }}>
              What Is Ajura Studio?
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
              More Than a Dashboard
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Ajura Studio is a complete business management platform for tailors across East Africa.
              It's not just a dashboard — it's your digital workshop, client manager, and storefront builder.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Run your entire operation with tools that honor your craft and grow your reputation.
              Built by people who believe your work deserves to be seen, supported, and celebrated.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-24" style={{ background: "#FDFDFD" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#09611E" }}>
                Studio Features
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Everything You Need. Nothing You Don't.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <FadeIn key={feature.title} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(9,97,30,0.08)", color: "#09611E" }}>
                      <feature.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#09611E" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#09611E" }}>
                Why Studio Works
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Better for You. Better for Your Clients.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6 pb-3 border-b" style={{ color: "#09611E", borderColor: "rgba(9,97,30,0.2)" }}>
                For Your Business
              </h3>
              <div className="space-y-5">
                {benefits.filter(b => b.forYou).map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: "#0FA958" }} />
                    <div>
                      <div className="font-semibold text-foreground mb-1">{b.title}</div>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6 pb-3 border-b" style={{ color: "#09611E", borderColor: "rgba(9,97,30,0.2)" }}>
                For Your Clients
              </h3>
              <div className="space-y-5">
                {benefits.filter(b => !b.forYou).map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: "#0FA958" }} />
                    <div>
                      <div className="font-semibold text-foreground mb-1">{b.title}</div>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center text-white" style={{ background: "#09611E" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Invest in Tools That Pay for Themselves
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Efficiency, growth, and excellence — all in one platform. Reduce waste, increase profit, honor your craft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://studio.ajuraclothes.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                style={{ background: "#0FA958", color: "#FDFDFD" }}>
                Create Your Studio <ArrowRight size={20} />
              </a>
              <a href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl border border-white/40 hover:bg-white/10 transition-all duration-200">
                Talk to Us First
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
