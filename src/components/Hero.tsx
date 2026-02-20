import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
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
            href="https://amirnet.vercel.app"
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
