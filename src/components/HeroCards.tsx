import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Headphones, Zap, BarChart3 } from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Vocab flashcard */}
      <Card className="absolute w-[300px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="p-2 bg-primary/10 rounded-xl">
            <BookOpen className="w-6 h-6 text-[#fb923c]" />
          </div>
          <div className="flex flex-col">
            <CardTitle className="text-lg">כרטיסיית מילים</CardTitle>
            <CardDescription>Vocabulary Flashcard</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-2">
            <p className="text-2xl font-bold text-[#fb923c]">Compelling</p>
            <p className="text-sm text-muted-foreground mt-1">adjective</p>
            <div className="h-px bg-border my-3" />
            <p className="text-lg font-semibold text-primary">משכנע, מרתק</p>
          </div>
        </CardContent>
      </Card>

      {/* Score card */}
      <Card className="absolute right-[20px] top-4 w-72 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex justify-center items-center pb-2">
          <div className="p-3 bg-primary/10 rounded-full mb-2">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-center text-lg">ציון אחרון</CardTitle>
        </CardHeader>
        <CardContent className="text-center pb-4">
          <p className="text-5xl font-display gradient-text">92%</p>
          <p className="text-sm text-muted-foreground mt-2">Sentence Completion</p>
        </CardContent>
      </Card>

      {/* AI Practice */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#ec4899]" />
              תרגול AI
            </span>
            <Badge variant="secondary" className="text-sm text-primary">
              חכם
            </Badge>
          </CardTitle>
          <CardDescription>
            שאלות שנוצרות בזמן אמת עם הסברים מפורטים
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <div className="h-2 flex-1 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full w-3/4 gradient-bg rounded-full" style={{ background: "linear-gradient(90deg, #fb923c, #ec4899, #9333ea)" }} />
            </div>
            <span className="text-sm text-muted-foreground">75%</span>
          </div>
        </CardContent>
      </Card>

      {/* Listening */}
      <Card className="absolute w-[320px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/10 p-2 rounded-xl">
            <Headphones className="w-5 h-5 text-[#9333ea]" />
          </div>
          <div>
            <CardTitle>מבחן הקשבה</CardTitle>
            <CardDescription className="text-md mt-2">
              28 פרקים · 10 מבטאים שונים · סימולציה מתוזמנת
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
