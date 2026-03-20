import { Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer id="contact" className="text-white py-16" style={{ background: "#09611E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/20 pb-12">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-bold tracking-wider mb-4">AJURA CLOTHES</h2>
            <p className="text-white/75 max-w-sm leading-relaxed mb-2">
              Creative Bold African. Faith-driven fashion redefining style with purpose and value in East Africa.
            </p>
            <p className="text-white/60 text-sm italic mb-6">"Sustainable by conviction, not by trend."</p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.15)" }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold mb-5">Explore</h3>
            <ul className="space-y-3 text-white/75">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "For Tailors", href: "/for-tailors" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-3 text-white/75 text-sm">
              <li className="leading-relaxed">
                Elephante Commons, Plot 75,<br />
                Jomo Kenyatta Road, Gulu
              </li>
              <li>
                <a href="mailto:hello@ajuraclothes.com" className="hover:text-white transition-colors">
                  hello@ajuraclothes.com
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block border border-white/40 rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white/50 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Ajura Clothes. Creative Bold African.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
