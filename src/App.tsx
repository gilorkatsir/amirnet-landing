import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { About } from "./components/About";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Cta />
      <Pricing />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
