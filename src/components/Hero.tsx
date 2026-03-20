import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.jpg`}
          alt="Earthy African pattern background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm font-semibold tracking-[0.25em] uppercase text-white/70 mb-4"
        >
          Faith-Driven African Fashion
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          style={{ letterSpacing: "-0.5px" }}
        >
          Faith-driven fashion redefining{" "}
          <span className="italic" style={{ color: "#0FA958" }}>style</span>{" "}
          with purpose and value.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-white/85 font-light mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We create garments that reflect dignity, modesty, and excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold tracking-wide text-white rounded-xl shadow-xl transition-all duration-200 hover:scale-105"
            style={{ background: "#09611E", boxShadow: "0 4px 20px rgba(9,97,30,0.4)" }}
          >
            Explore Our Story
          </Link>
          <Link
            href="/for-tailors"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold tracking-wide text-white bg-white/15 border border-white/40 rounded-xl backdrop-blur-sm hover:bg-white/25 transition-all duration-200"
          >
            Start Your Studio
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
