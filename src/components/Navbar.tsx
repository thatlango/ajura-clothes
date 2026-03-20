import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "For Tailors", href: "/for-tailors" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent py-6" : "bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`font-serif text-2xl font-bold tracking-wider transition-colors duration-300 hover:opacity-80 ${
              transparent ? "text-white" : "text-primary"
            }`}
          >
            AJURA CLOTHES
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  transparent
                    ? "text-white/90 hover:text-white"
                    : location === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/for-tailors"
              className={`text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 ${
                transparent
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-primary text-white hover:bg-secondary"
              }`}
            >
              Start Your Studio
            </Link>
          </nav>

          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              transparent ? "text-white" : "text-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white border-b border-border shadow-lg md:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                    location === link.href
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/for-tailors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 text-center text-base font-semibold py-3 px-4 rounded-xl bg-primary text-white hover:bg-secondary transition-colors"
              >
                Start Your Studio
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
