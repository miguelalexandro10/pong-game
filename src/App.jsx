import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Footer from "./components/Footer"; 

export default function App() {
  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-20 scroll-smooth">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>   

        <section id="education">
          <Education />
        </section>

        <section id="courses">
          <Courses />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
