import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
  href: string;
}

const pricingList: PricingProps[] = [
  {
    title: "חינמי",
    popular: 0,
    price: "₪0",
    description: "מושלם להתחלה — בלי התחייבות",
    buttonText: "התחל עכשיו",
    href: "https://amirnet.vercel.app",
    benefitList: [
      "30 מילים",
      "10 שאלות תרגול",
      "1 תרגול AI ביום",
      "4 פרקי הקשבה",
      "מעקב התקדמות",
      "PWA + אופליין",
    ],
  },
  {
    title: "פרימיום",
    popular: 1,
    price: "₪29.9",
    description: "גישה מלאה לכל התכנים",
    buttonText: "שדרג עכשיו",
    href: "https://amirnet.vercel.app",
    benefitList: [
      "800+ מילים",
      "264 שאלות תרגול",
      "תרגול AI ללא הגבלה",
      "28 פרקי הקשבה",
      "מעקב התקדמות",
      "PWA + אופליין",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        תוכניות
        <span className="gradient-text">
          {" "}ומחירים{" "}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        התחל בחינם. שדרג כשתרצה.
      </h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    הכי פופולרי
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}</span>
                <span className="text-muted-foreground"> /חודש</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a href={pricing.href} target="_blank" rel="noreferrer noopener">
                <Button
                  className="w-full"
                  style={
                    pricing.popular === PopularPlanType.YES
                      ? { background: "linear-gradient(135deg, #fb923c, #ec4899, #9333ea)" }
                      : undefined
                  }
                >
                  {pricing.buttonText}
                </Button>
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="me-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
