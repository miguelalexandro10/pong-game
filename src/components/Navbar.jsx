// Import React hooks for state and lifecycle management
import { useEffect, useState } from "react";

export default function Navbar() {
  // Tracks whether the user has scrolled past 50px from the top of the page
  const [scrolled, setScrolled] = useState(false);

  // Tracks the ID of the currently visible section in the viewport
  const [activeSection, setActiveSection] = useState("home");

  // Add event listener on mount to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Toggle background and shadow when scrolled past 50px
      setScrolled(window.scrollY > 50);

      // Current vertical scroll position
      const scrollPosition = window.scrollY;

      // List of all section IDs to monitor
      const sections = ["home", "about", "projects", "experience", "education", "courses"];

      // Loop through each section to find which one is in view
      for (let id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          // If scroll position falls within section boundaries, set it as active
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(id);
            break; // Exit loop after match
          }
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dictionary that maps section IDs to display titles shown in navbar's left area
  const sectionTitles = {
    home: "Welcome",
    about: "About Me",
    projects: "My Projects",
    experience: "My Work Experience",
    education: "My Education",
    courses: "My Course History"
  };

  return (
    // Top-level navbar container; sticks to top with animation and shadow on scroll
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side of navbar displays dynamic title based on scroll position */}
        <h1 className="text-xl font-bold tracking-wide">
          {sectionTitles[activeSection] || "Miguel"}
        </h1>

        {/* Right side nav links  */}
        <ul className="flex gap-6 text-sm font-medium text-gray-800">
          {["about", "projects", "experience", "education", "courses"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={
                  activeSection === section ? "font-bold underline" : "hover:underline"
                }
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
