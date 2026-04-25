import {useEffect} from "react"

import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Projects from "./components/Projects.jsx"
import Features from "./components/Features.jsx"
import Pricing from "./components/Pricing.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {

  return (
    <div className="font-display">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Pricing />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}