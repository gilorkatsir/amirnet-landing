import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Headphones, Zap, BarChart3, Brain, ListChecks } from "lucide-react";

export const AppShowcase = () => {
  return (
    <section id="showcase" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          הצצה{" "}
          <span className="gradient-text">לאפליקציה</span>
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 text-xl text-muted-foreground">
          כלים חכמים שעוזרים לך להתכונן בצורה הכי יעילה
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Vocab Flashcard Screen */}
        <Card className="bg-muted/30 border overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 bg-[#fb923c]/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-[#fb923c]" />
                </div>
                כרטיסיות מילים
              </CardTitle>
              <Badge variant="secondary" className="text-xs">800+ מילים</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* Mock flashcard UI */}
            <div className="bg-background rounded-xl p-4 border">
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Word of the Day</p>
                <p className="text-3xl font-bold text-[#fb923c]">Inevitable</p>
                <p className="text-xs text-muted-foreground">adjective | /ɪnˈevɪtəbl/</p>
                <div className="h-px bg-border my-2" />
                <p className="text-lg font-semibold">בלתי נמנע</p>
                <p className="text-sm text-muted-foreground italic">&quot;The result was inevitable.&quot;</p>
              </div>
              <div className="flex gap-2 mt-4">
                <div className="flex-1 h-2 bg-red-500/20 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-red-500 rounded-full" />
                </div>
                <div className="flex-1 h-2 bg-yellow-500/20 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-yellow-500 rounded-full" />
                </div>
                <div className="flex-1 h-2 bg-green-500/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-green-500 rounded-full" />
                </div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>קשה</span>
                <span>בינוני</span>
                <span>קל</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quiz Interface Screen */}
        <Card className="bg-muted/30 border overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 bg-[#ec4899]/10 rounded-lg">
                  <ListChecks className="w-5 h-5 text-[#ec4899]" />
                </div>
                שאלות תרגול
              </CardTitle>
              <Badge variant="secondary" className="text-xs">264 שאלות</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* Mock quiz UI */}
            <div className="bg-background rounded-xl p-4 border">
              <p className="text-sm font-medium mb-3">Choose the correct word:</p>
              <p className="text-sm text-muted-foreground mb-4">
                &quot;The scientist&apos;s findings were ___ by multiple independent studies.&quot;
              </p>
              <div className="space-y-2">
                {["corroborated", "diminished", "obscured", "neglected"].map((opt, i) => (
                  <div
                    key={opt}
                    className={`text-sm px-3 py-2 rounded-lg border transition-colors ${
                      i === 0
                        ? "border-green-500 bg-green-500/10 text-green-500"
                        : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <span className="font-mono text-xs me-2">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-3">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">שאלה 12 מתוך 20</span>
                <div className="flex-1 h-1.5 bg-primary/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/5 rounded-full" style={{ background: "linear-gradient(90deg, #fb923c, #ec4899)" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Practice Screen */}
        <Card className="bg-muted/30 border overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 bg-[#9333ea]/10 rounded-lg">
                  <Zap className="w-5 h-5 text-[#9333ea]" />
                </div>
                תרגול AI
              </CardTitle>
              <Badge className="text-xs text-white" style={{ background: "linear-gradient(135deg, #9333ea, #ec4899)" }}>
                חכם
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* Mock AI chat UI */}
            <div className="bg-background rounded-xl p-4 border">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #9333ea, #ec4899)" }}>
                    <Brain className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-muted/50 rounded-lg p-2 text-sm">
                    <p>Complete the sentence:</p>
                    <p className="text-muted-foreground mt-1">&quot;Despite the ___ weather, they decided to proceed with the outdoor event.&quot;</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bg-primary/10 rounded-lg p-2 text-sm">
                    <p>inclement</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #9333ea, #ec4899)" }}>
                    <Brain className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-2 text-sm border border-green-500/20">
                    <p className="text-green-500 font-medium">נכון! מעולה</p>
                    <p className="text-muted-foreground text-xs mt-1">inclement = סוער, קשה (מזג אוויר)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Listening Test Screen - spans 2 columns on md+ */}
        <Card className="bg-muted/30 border overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 md:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 bg-[#9333ea]/10 rounded-lg">
                  <Headphones className="w-5 h-5 text-[#9333ea]" />
                </div>
                מבחן הקשבה
              </CardTitle>
              <Badge variant="secondary" className="text-xs">28 פרקים</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* Mock audio player UI */}
            <div className="bg-background rounded-xl p-4 border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #9333ea, #ec4899)" }}>
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Section 3: Academic Lecture</p>
                    <p className="text-xs text-muted-foreground">American Accent</p>
                  </div>
                  <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full w-2/5 rounded-full" style={{ background: "linear-gradient(90deg, #9333ea, #ec4899)" }} />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>01:23</span>
                    <span>03:45</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {["American", "British", "Australian", "Indian", "Mixed"].map((accent, i) => (
                  <div
                    key={accent}
                    className={`text-center text-xs py-1.5 rounded-md border cursor-default ${
                      i === 0
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {accent}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Score Progress Screen */}
        <Card className="bg-muted/30 border overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                מעקב התקדמות
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            {/* Mock progress chart */}
            <div className="bg-background rounded-xl p-4 border">
              <div className="flex items-end gap-1 h-24">
                {[40, 55, 50, 65, 60, 75, 72, 80, 85, 88, 92].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm transition-all"
                    style={{
                      height: `${val}%`,
                      background: `linear-gradient(180deg, #9333ea ${100 - val}%, #ec4899)`,
                      opacity: 0.3 + (i / 10) * 0.7,
                    }}
                  />
                ))}
              </div>
              <div className="h-px bg-border mt-1 mb-2" />
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">השבוע האחרון</span>
                <div className="flex items-center gap-1">
                  <BarChart3 className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">+12%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
