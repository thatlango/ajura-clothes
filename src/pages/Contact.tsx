import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

type MessageType = "General Inquiry" | "Tailor Support" | "Partnership" | "Press";
const MESSAGE_TYPES: MessageType[] = ["General Inquiry", "Tailor Support", "Partnership", "Press"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    messageType: "General Inquiry" as MessageType,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ background: "#09611E" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-white/60 mb-4">
              Reach Out
            </p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Let's Build Something{" "}
              <span className="italic" style={{ color: "#0FA958" }}>With Purpose</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Whether you're a tailor, a potential partner, or someone who believes fashion should mean more —
              we'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Sidebar Info */}
            <FadeIn delay={0.1}>
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-6">Get In Touch</h2>
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(9,97,30,0.08)", color: "#09611E" }}>
                        <Mail size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-0.5">Email</div>
                        <a href="mailto:hello@ajuraclothes.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          hello@ajuraclothes.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(9,97,30,0.08)", color: "#09611E" }}>
                        <MapPin size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-0.5">Location</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Elephante Commons, Plot 75,<br />
                          Jomo Kenyatta Road, Gulu,<br />
                          Uganda
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-serif font-semibold text-foreground mb-4">Follow Our Journey</h3>
                  <div className="flex gap-3">
                    {[Instagram, Facebook, Twitter].map((Icon, i) => (
                      <a key={i} href="#"
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{ background: "rgba(9,97,30,0.08)", color: "#09611E" }}>
                        <Icon size={18} strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl" style={{ background: "rgba(9,97,30,0.05)", border: "1px solid rgba(9,97,30,0.1)" }}>
                  <p className="font-serif text-lg font-medium text-foreground mb-2">
                    "Join the movement for God-honoring fashion."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We read every message and respond with the care your question deserves.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2}>
              <div className="lg:col-span-3">
                {status === "sent" ? (
                  <div className="text-center py-16 px-8 rounded-2xl border" style={{ borderColor: "rgba(9,97,30,0.2)" }}>
                    <div className="text-5xl mb-4">✦</div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Message Received</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Thank you for reaching out. We'll respond with care within 1–2 business days.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", messageType: "General Inquiry", message: "" }); }}
                      className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
                      style={{ background: "#09611E" }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                        <input
                          name="name" required value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl text-foreground placeholder:text-muted-foreground transition-all text-sm"
                          style={{ border: "2px solid #D9DAD9", background: "#FDFDFD", outline: "none" }}
                          onFocus={e => e.target.style.borderColor = "#09611E"}
                          onBlur={e => e.target.style.borderColor = "#D9DAD9"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                        <input
                          name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl text-foreground placeholder:text-muted-foreground transition-all text-sm"
                          style={{ border: "2px solid #D9DAD9", background: "#FDFDFD", outline: "none" }}
                          onFocus={e => e.target.style.borderColor = "#09611E"}
                          onBlur={e => e.target.style.borderColor = "#D9DAD9"}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Phone (optional)</label>
                        <input
                          name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+256 700 000 000"
                          className="w-full px-4 py-3 rounded-xl text-foreground placeholder:text-muted-foreground transition-all text-sm"
                          style={{ border: "2px solid #D9DAD9", background: "#FDFDFD", outline: "none" }}
                          onFocus={e => e.target.style.borderColor = "#09611E"}
                          onBlur={e => e.target.style.borderColor = "#D9DAD9"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Message Type</label>
                        <select
                          name="messageType" value={form.messageType} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-foreground transition-all text-sm"
                          style={{ border: "2px solid #D9DAD9", background: "#FDFDFD", outline: "none" }}
                          onFocus={e => e.target.style.borderColor = "#09611E"}
                          onBlur={e => e.target.style.borderColor = "#D9DAD9"}
                        >
                          {MESSAGE_TYPES.map((t) => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Your Message *</label>
                      <textarea
                        name="message" required rows={6} value={form.message} onChange={handleChange}
                        placeholder="Tell us what's on your mind…"
                        className="w-full px-4 py-3 rounded-xl text-foreground placeholder:text-muted-foreground transition-all text-sm resize-none"
                        style={{ border: "2px solid #D9DAD9", background: "#FDFDFD", outline: "none" }}
                        onFocus={e => e.target.style.borderColor = "#09611E"}
                        onBlur={e => e.target.style.borderColor = "#D9DAD9"}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-4 font-semibold text-base rounded-xl text-white transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ background: "#09611E" }}>
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </button>

                    <p className="text-xs text-muted-foreground text-center">
                      We typically respond within 1–2 business days. All conversations are treated with care and respect.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
