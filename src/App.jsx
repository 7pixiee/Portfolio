import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatICreate from "./components/WhatICreate";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#0D0D0F] text-[#F5F5F5]">
      <Navbar />
      <Hero />
      <WhatICreate />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
