import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { UserPlus, BookOpen, TrendingUp } from "lucide-react";

interface StepProps {
  icon: JSX.Element;
  stepNumber: string;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    icon: <UserPlus className="w-8 h-8 text-[#fb923c]" />,
    stepNumber: "01",
    title: "הירשם בחינם",
    description: "צור חשבון תוך שניות והתחל ללמוד מיד. ללא כרטיס אשראי, ללא התחייבות.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[#ec4899]" />,
    stepNumber: "02",
    title: "תרגל כל יום",
    description: "למד מילים חדשות, פתור שאלות תרגול, והאזן לקטעי הקשבה — הכל מותאם אישית לרמה שלך.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#9333ea]" />,
    stepNumber: "03",
    title: "שפר את הציון",
    description: "עקוב אחרי ההתקדמות שלך וראה שיפור אמיתי בציון האנגלית בפסיכומטרי.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        איך זה{" "}
        <span className="gradient-text">
          עובד?
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-12 text-xl text-muted-foreground">
        שלושה צעדים פשוטים להתחלת הדרך להצלחה בפסיכומטרי
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map(({ icon, stepNumber, title, description }: StepProps) => (
          <Card key={title} className="bg-muted/50 relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-4 left-4 text-6xl font-display gradient-text opacity-10 group-hover:opacity-20 transition-opacity">
              {stepNumber}
            </div>
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  {icon}
                </div>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
