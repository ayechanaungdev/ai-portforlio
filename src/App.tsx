import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutStats from "./components/AboutStats";
import BentoSkills from "./components/BentoSkills";
import Timeline from "./components/Timeline";
import ServicesPortfolio from "./components/ServicesPortfolio";
import ContactMap from "./components/ContactMap";

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <AboutStats />
        <BentoSkills />
        <Timeline />
        <ServicesPortfolio />
        <ContactMap />
      </main>
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-text">
        © {new Date().getFullYear()} {"Aye Chan Aung. All rights reserved."}
      </footer>
    </div>
  );
}

export default App;
