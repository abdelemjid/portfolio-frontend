import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
