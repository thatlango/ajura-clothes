import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Link } from "wouter";

const features = [
  "AI-powered precision measurement — garments made for your actual body",
  "AjuraFit reduces fabric waste by 30% through accurate first-time production",
  "Visual try-on with fabric and style customization before ordering",
  "Waste reduction tracked and displayed — every stitch honors creation",
];

export function AjuraFit() {
  return (
    <section id="ajurafit" className="py-24 sm:py-32 overflow-hidden" style={{ background: "#09611E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 bg-white/10">
                <div className="w-full h-full flex items-center justify-center text-white/20 text-6xl">
                  ✦
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-30" style={{ background: "#0FA958" }} />
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full blur-2xl opacity-20" style={{ background: "#4A725E" }} />
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#0FA958" }}>
                Technology Serving Values
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6">
                AjuraFit —{" "}
                <span className="italic font-light">Perfect Fit</span>
              </h2>

              <p className="text-lg text-white/80 mb-3 leading-relaxed">
                <strong className="text-white">Too often, clothes look good but never quite fit.</strong> This leads
                to frustration for customers and waste for the fashion industry.
              </p>
              <p className="text-white/75 mb-8 leading-relaxed">
                AjuraFit uses AI-powered measurement and visualization to create garments closer to a person's real
                body shape — better for customers, better for tailors, better for creation.
              </p>

              <ul className="space-y-4 mb-10">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 mt-0.5" size={20} style={{ color: "#0FA958" }} />
                    <span className="text-white/90 leading-relaxed text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                style={{ background: "#0FA958", color: "#FDFDFD", boxShadow: "0 4px 16px rgba(15,169,88,0.35)" }}
              >
                See How It Works
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
