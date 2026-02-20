import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">
                  מה זה{" "}
                </span>
                AmirNet?
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                AmirNet היא אפליקציית הכנה חכמה לחלק האנגלית של הפסיכומטרי.
                עם למעלה מ-800 מילים, 264 שאלות תרגול מסוגים שונים, מבחן הקשבה
                אינטראקטיבי עם 28 פרקים ו-10 מבטאים, ותרגול AI שמותאם אישית
                לרמה שלך — הכל במקום אחד, בחינם.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
