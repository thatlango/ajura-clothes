import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const features = [
  "Hybrid measurement systems combining traditional and digital techniques",
  "Personalized fit experience tailored to your unique body",
  "Reduced production waste through precise, accurate measurements",
];

export function AjuraFit() {
  return (
    <section id="ajurafit" className="py-24 sm:py-32 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <img
                  src={`${import.meta.env.BASE_URL}images/ajurafit-placeholder.png`}
                  alt="AjuraFit tailored garment"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Decorative accent element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 blur-2xl opacity-40"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full -z-10 blur-2xl opacity-40"></div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div>
              <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-3">Innovation</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6">
                AJURAFIT <br/>
                <span className="text-white/80 font-light text-2xl sm:text-3xl block mt-2">Perfect Fit Technology</span>
              </h3>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                <strong className="text-white font-medium">Too often, clothes look good but never quite fit.</strong> 
                <br className="hidden sm:block"/> We're changing the narrative with our proprietary AjuraFit approach, ensuring every garment feels like it was made exclusively for you.
              </p>

              <ul className="space-y-5 mb-10">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
                    <span className="text-white/90 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold tracking-wide text-secondary bg-accent rounded-full shadow-lg hover:bg-white hover:text-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Get Your Perfect Fit
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
