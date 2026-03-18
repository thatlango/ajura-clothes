import { useState } from "react";
import { useSubscribeNewsletter } from "@/lib/api-client";
import { useToast } from "@/hooks/use-toast";
import { FadeIn } from "./FadeIn";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { mutate, isPending } = useSubscribeNewsletter({
    mutation: {
      onSuccess: (data) => {
        toast({
          title: "Subscribed successfully!",
          description: data.message || "Thank you for joining our community.",
        });
        setEmail("");
      },
      onError: (error: any) => {
        toast({
          title: "Subscription failed",
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
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6">
            Setting a new standard for God-honoring fashion in East Africa
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join our community and be the first to know about new collections, events, and stories of impact from our artisans.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-background border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={isPending}
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap"
            >
              {isPending ? "Joining..." : "Subscribe"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
