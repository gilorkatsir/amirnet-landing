import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            מוכן
            <span className="gradient-text">
              {" "}להצליח{" "}
            </span>
            בפסיכומטרי?
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            הצטרף לאלפי תלמידים שכבר משתמשים ב-AmirNet כדי לשפר את הציון שלהם
            באנגלית. התחל בחינם, ללא התחייבות.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a href="https://amirnet.vercel.app" target="_blank" rel="noreferrer noopener">
            <Button
              className="w-full md:w-auto text-white font-semibold px-8"
              style={{ background: "linear-gradient(135deg, #fb923c, #ec4899, #9333ea)" }}
            >
              התחל בחינם עכשיו
            </Button>
          </a>
          <a href="#features">
            <Button variant="outline" className="w-full md:w-auto me-4">
              צפה בתכונות
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
