import { useState } from "react";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { HeroCards } from "./HeroCards";
import { CheckCircle2 } from "lucide-react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const existing = JSON.parse(localStorage.getItem("amirnet_waitlist") || "[]");
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem("amirnet_waitlist", JSON.stringify(existing));
    }
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline gradient-text font-display">
              הצלח באנגלית
            </span>{" "}
            של הפסיכומטרי
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          למידה חכמה עם AI, 800+ מילים, 264 שאלות תרגול, ומבחן הקשבה אינטראקטיבי. הכל במקום אחד.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-reverse md:space-x-4 flex flex-col md:flex-row">
          <a
            href="https://amirnet.vercel.app/login"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button className="w-full md:w-auto gradient-bg text-white font-semibold text-lg px-8 py-6" style={{ background: "linear-gradient(135deg, #fb923c, #ec4899, #9333ea)" }}>
              התחל בחינם
            </Button>
          </a>

          <a
            href="#features"
            className={`w-full md:w-auto ${buttonVariants({
              variant: "outline",
              size: "lg",
            })}`}
          >
            גלה את התכונות
          </a>
        </div>

        {/* Email signup for waitlist */}
        <div className="pt-2">
          {submitted ? (
            <div className="flex items-center gap-2 text-green-500 font-medium justify-center lg:justify-start">
              <CheckCircle2 className="w-5 h-5" />
              <span>נרשמת בהצלחה! נעדכן אותך בקרוב.</span>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="הכנס את המייל שלך"
                className="bg-muted/50 dark:bg-muted/80 flex-1"
                dir="ltr"
              />
              <Button
                type="submit"
                className="text-white font-semibold px-5 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #9333ea, #ec4899)" }}
              >
                הצטרף לרשימת ההמתנה
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Glow effect */}
      <div className="hero-glow"></div>
    </section>
  );
};
