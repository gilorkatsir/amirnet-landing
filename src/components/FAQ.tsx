import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "מה זה AmirNet?",
    answer: "AmirNet היא אפליקציית הכנה חכמה לחלק האנגלית של הפסיכומטרי. היא כוללת 800+ מילים, 264 שאלות תרגול, מבחן הקשבה אינטראקטיבי ותרגול AI מותאם אישית.",
    value: "item-1",
  },
  {
    question: "האם AmirNet בחינם?",
    answer: "כן! יש תוכנית חינמית שכוללת 30 מילים, 10 שאלות, תרגול AI אחד ביום ו-4 פרקי הקשבה. אפשר לשדרג לפרימיום בכל שלב לגישה מלאה.",
    value: "item-2",
  },
  {
    question: "מה ההבדל בין החינמי לפרימיום?",
    answer: "התוכנית החינמית מציעה טעימה מכל התכנים. הפרימיום פותח גישה מלאה: 800+ מילים, 264 שאלות, תרגול AI ללא הגבלה ו-28 פרקי הקשבה.",
    value: "item-3",
  },
  {
    question: "איך עובד תרגול ה-AI?",
    answer: "ה-AI יוצר שאלות מותאמות אישית לרמה שלך בזמן אמת, עם הסברים מפורטים לכל תשובה. ככל שאתה מתאמן יותר, השאלות מתאימות את עצמן.",
    value: "item-4",
  },
  {
    question: "אפשר להשתמש באפליקציה אופליין?",
    answer: "כן! AmirNet היא PWA (Progressive Web App) — אפשר להתקין אותה על הטלפון כמו אפליקציה רגילה והיא עובדת גם בלי חיבור לאינטרנט.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        שאלות{" "}
        <span className="gradient-text">
          נפוצות
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-right">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        עדיין יש שאלות?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:contact@amirnet.app"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          צרו קשר
        </a>
      </h3>
    </section>
  );
};
