import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Zap, FileText, Headphones, BarChart3, Smartphone } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <BookOpen className="w-8 h-8 text-[#fb923c]" />,
    title: "אוצר מילים",
    description:
      "800+ מילים מחולקות לקטגוריות עם כרטיסיות אינטראקטיביות וחזרה מרווחת לשינון יעיל.",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#ec4899]" />,
    title: "תרגול AI",
    description:
      "שאלות שנוצרות בזמן אמת על ידי AI חכם עם הסברים מפורטים והתאמה אישית לרמה שלך.",
  },
  {
    icon: <FileText className="w-8 h-8 text-[#9333ea]" />,
    title: "שאלות אנגלית",
    description:
      "264 שאלות מסוגי Sentence Completion, Restatement ו-Reading Comprehension ממבחנים אמיתיים.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-[#f97316]" />,
    title: "מבחן הקשבה",
    description:
      "28 פרקים עם 10 קולות ומבטאים שונים. סימולציה מתוזמנת בדיוק כמו במבחן האמיתי.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#22c55e]" />,
    title: "מעקב התקדמות",
    description:
      "סטטיסטיקות מפורטות, רצפי למידה ומדדי דיוק שעוזרים לך לראות בדיוק איפה אתה עומד.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#06b6d4]" />,
    title: "PWA + אופליין",
    description:
      "התקן על הטלפון כמו אפליקציה אמיתית, עובד אופליין, מצב כהה מובנה. הכל זמין תמיד.",
  },
];

const featureList: string[] = [
  "מצב כהה",
  "800+ מילים",
  "264 שאלות",
  "תרגול AI",
  "מבחן הקשבה",
  "מעקב התקדמות",
  "PWA",
  "עובד אופליין",
  "חינמי",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        הכל מה שצריך כדי{" "}
        <span className="gradient-text">
          להצליח
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
