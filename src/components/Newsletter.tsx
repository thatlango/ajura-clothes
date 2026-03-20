import { useState } from "react";
import { useSubscribeNewsletter } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { FadeIn } from "./FadeIn";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { mutate, isPending } = useSubscribeNewsletter({
    mutation: {
      onSuccess: (data) => {
        toast({
          title: "You're in!",
          description: data.message || "Thank you for joining the movement.",
        });
        setEmail("");
      },
      onError: (error: any) => {
        toast({
          title: "Something went wrong",
          description: error?.response?.data?.error || "Please try again later.",
          variant: "destructive",
        });
      },
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    mutate({ data: { email } });
  };

  return (
    <section className="py-24 text-white" style={{ background: "#4A725E" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">
            Join the Movement
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4">
            Fashion for God-Honoring Purpose
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            Be the first to know about new collections, stories of impact from our tailors,
            and the ongoing journey to redefine fashion in East Africa.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none transition-all"
              style={{ background: "#FDFDFD", border: "2px solid transparent" }}
            />
            <button
              type="submit"
              disabled={isPending}
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              style={{ background: "#09611E", color: "#FDFDFD" }}
            >
              {isPending ? "Joining…" : "Join the Movement"}
            </button>
          </form>
          <p className="text-xs text-white/50 mt-4">
            Sustainable by conviction, not by trend.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
