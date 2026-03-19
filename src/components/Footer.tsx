import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/20 pb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl font-bold tracking-wider mb-6">
              AJURA CLOTHES
            </h2>
            <p className="text-white/80 max-w-sm">
              Faith. Craftsmanship. Style. Bringing dignity and excellence to East African fashion.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#ajurafit" className="hover:text-white transition-colors">AjuraFit</a></li>
              <li><a href="#values" className="hover:text-white transition-colors">Core Values</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-white/80">
              <li>Elephante Commons, Plot 75,<br />Jomo Kenyatta Road, Gulu</li>
              <li>
                <a href="mailto:info@ajuraclothes.com" className="hover:text-white transition-colors">
                  info@ajuraclothes.com
                </a>
              </li>
              <li className="pt-4">
                <a 
                  href="mailto:info@ajuraclothes.com"
                  className="inline-block border border-white/40 rounded-full px-6 py-2 hover:bg-white hover:text-primary transition-colors duration-300"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white/60 text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Ajura Clothes. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
