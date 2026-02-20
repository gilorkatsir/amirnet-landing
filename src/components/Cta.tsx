import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CheckCircle2 } from "lucide-react";

export const Cta = () => {
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
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center gap-8">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            מוכן
            <span className="gradient-text">
              {" "}להצליח{" "}
            </span>
            בפסיכומטרי?
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            הצטרף לסטודנטים שכבר מתכוננים בצורה חכמה עם AmirNet כדי לשפר את הציון שלהם
            באנגלית. התחל בחינם, ללא התחייבות.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2 w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <a href="https://amirnet.vercel.app/login" target="_blank" rel="noreferrer noopener">
              <Button
                className="w-full sm:w-auto text-white font-semibold px-8"
                style={{ background: "linear-gradient(135deg, #fb923c, #ec4899, #9333ea)" }}
              >
                התחל בחינם עכשיו
              </Button>
            </a>
            <a href="#features">
              <Button variant="outline" className="w-full sm:w-auto">
                צפה בתכונות
              </Button>
            </a>
          </div>

          {/* Email capture */}
          {submitted ? (
            <div className="flex items-center gap-2 text-green-500 font-medium">
              <CheckCircle2 className="w-5 h-5" />
              <span>נרשמת בהצלחה! נעדכן אותך בקרוב.</span>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-2 mt-4">
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
                className="text-white font-semibold px-6 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #9333ea, #ec4899)" }}
              >
                הצטרף לרשימת ההמתנה
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
