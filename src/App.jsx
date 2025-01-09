import "./App.css";
import { Services } from "./components/services";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import Pricing from "./components/pricing";
import FAQSection from "./components/faq";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <Services />
      <Pricing />
      <FAQSection />
      <Footer/>
    </div>
  );
}

export default App;
