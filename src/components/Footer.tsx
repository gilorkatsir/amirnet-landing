import { Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);


export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
        <div className="col-span-full md:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center gap-2"
          >
            <span className="gradient-text font-display text-2xl">AmirNet</span>
          </a>
          <p className="text-muted-foreground mt-2">
            הכנה חכמה לאנגלית של הפסיכומטרי
          </p>

          {/* Social links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://instagram.com/amirnet_app"
              target="_blank"
              rel="noreferrer noopener"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com/@amirnet_app"
              target="_blank"
              rel="noreferrer noopener"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">ניווט</h3>
          <div>
            <a href="#features" className="opacity-60 hover:opacity-100">תכונות</a>
          </div>
          <div>
            <a href="#pricing" className="opacity-60 hover:opacity-100">מחירים</a>
          </div>
          <div>
            <a href="#faq" className="opacity-60 hover:opacity-100">שאלות נפוצות</a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">משפטי</h3>
          <div>
            <a href="https://amirnet.vercel.app/terms" target="_blank" rel="noreferrer noopener" className="opacity-60 hover:opacity-100">תנאי שימוש</a>
          </div>
          <div>
            <a href="https://amirnet.vercel.app/privacy" target="_blank" rel="noreferrer noopener" className="opacity-60 hover:opacity-100">מדיניות פרטיות</a>
          </div>
          <div>
            <a href="mailto:contact@amirnet.app" className="opacity-60 hover:opacity-100">יצירת קשר</a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3 className="text-muted-foreground text-sm">
          &copy; 2026 AmirNet. כל הזכויות שמורות.
        </h3>
      </section>
    </footer>
  );
};
