// Import useState to manage component-level state (to pause scrolling on hover)
import { useState } from "react";
// Import motion from Framer Motion for animation support
import { motion } from "framer-motion";
// Import the book open icon from react-icons library
import { FaBookOpen } from "react-icons/fa";

// Array of course objects containing the course name and a short description
const courses = [
  
{ name: "C/C++", description: "Programming Languages & Object-Oriented Design" },
{ name: "Python", description: "Scripting, Data Analysis, Machine Learning" },
{ name: "SQLite", description: "Database Management & Querying" },
{ name: "Tailwind CSS", description: "CSS Framework, Rapid UI Development" },
{ name: "JavaScript", description: "Web Development" },
{ name: "HTML", description: "Markup Language for Web Pages" },
{ name: "CSS", description: "Styling Language for Web Pages" },
{ name: "React", description: "JavaScript Library for Building UIs" },
{ name: "Node.js", description: "JS Runtime for Server-Side Development" },
{ name: "MATLAB", description: "Numerical Computing & Data Visualization" },
{ name: "Verilog", description: "Hardware Description Language" },
{ name: "LTspice", description: "Circuit Simulation & Analysis" },
{ name: "OrCAD Capture", description: "PCB Design & Schematic Capture" },
{ name: "Embedded Systems", description: "Microcontrollers & Real-Time OS" },
{ name: "Software Engineering", description: "Design, Development, & Testing" },
{ name: "Computer Architecture", description: "CPU Design & Memory Hierarchy" },
{ name: "Computer Science I & II", description: "Software Principles & Environments" },
{ name: "Algorithm Analysis", description: "Time Complexity, Recursion, Efficiency" },
{ name: "Networking & Security", description: "TCP/IP, Protocols, & Encryption" },
{ name: "Machine Organization", description: "Assembly Language & Instruction Sets" },
{ name: "Artificial Intelligence", description: "Neural Networks, AI Problem Solving" },
{ name: "Analog Circuits", description: "Amplifiers, Op-Amps, Signal Analysis" },
{ name: "Signals & Systems", description: "Fourier, Laplace, & System Modeling" },
{ name: "Web Development", description: "HTML, CSS, JavaScript, React Basics" },
{ name: "Operating Systems", description: "Processes, Memory, & File Systems" },
{ name: "Digital Logic", description: "Logic Gates, Boolean Algebra, Circuits" },
{ name: "Calculus I, II, & III", description: "Vectors, Integrals, 3D Surfaces" },
{ name: "Linear Algebra", description: "Matrices, Eigenvalues, Linear Transformations" },
{ name: "Physics I & II", description: "Mechanics, Electricity, Magnetism" },
{ name: "Discrete Mathematics", description: "Logic, Sets, Functions, Graphs" },
{ name: "Robotics", description: "Kinematics, Dynamics, Control Systems" },

];

// Define and export the Courses component
export default function Courses() {
  // State to track which course card is being hovered over (used to pause scroll and animate pop effect)
  const [pausedIndex, setPausedIndex] = useState(null);

  // Duplicate the courses to allow infinite scrolling effect
  const duplicatedCourses = [...courses, ...courses];

  // JSX returned by the component
  return (
    // Section wrapper with ID for navigation and Tailwind classes for spacing and background
    <section id="courses" className="py-20 bg-offwhite text-brown overflow-x-hidden">
      {/* Max-width container centered with horizontal padding */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Section title styled responsively */}
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-center flex items-center justify-center mb-2 gap-3">
          <FaBookOpen className="text-rust text-3xl" />
          Courses & Skills
        </h2>

        {/* Decorative underline element */}
        <div className="w-20 h-1 bg-gradient-to-r from-rust to-mustard mx-auto rounded-full mb-12" />

        {/* Wrapper that allows room for cards to grow when hovered */}
        <div className="relative overflow-visible pb-24 pt-12">

          {/* Horizontally scrolling container of course cards */}
          <div
            className="flex gap-6 whitespace-nowrap animate-scroll"
            style={{
              // Pause animation when a card is hovered
              animationPlayState: pausedIndex !== null ? "paused" : "running",
              // Set container width based on the number of cards
              width: `${duplicatedCourses.length * 320}px`,
            }}
          >
            {/* Map over all duplicated courses and render each card */}
            {duplicatedCourses.map((course, index) => {
              // Determine if the current card is being hovered over
              const isHovered = pausedIndex === index;

              return (
                // Motion.div allows animated transformations from Framer Motion
                <motion.div
                  key={index} // Unique key for list rendering
                  onMouseEnter={() => setPausedIndex(index)} // Pause scroll on hover
                  onMouseLeave={() => setPausedIndex(null)}   // Resume scroll when mouse leaves

                  // Tailwind for layout, padding, border, shadows, etc.
                  className="min-w-[300px] max-w-sm p-6 bg-offwhite cursor-pointer transition-all duration-300 relative"

                  // Framer Motion props for hover animation (scale, lift up, and layer on top)
                  animate={{
                    scale: isHovered ? 1.15 : 1,   // Enlarge when hovered
                    y: isHovered ? -10 : 0,        // Raise slightly when hovered
                    zIndex: isHovered ? 10 : 1,    // Bring to front when hovered
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }} // Smooth easing animation
                >
                  {/* Course Title Header */}
                  <h3 className="text-xl font-semibold text-rust mb-2">{course.name}</h3>

                  {/* Description paragraph. "line-clamp-2" limits to 2 visible lines */}
                  <p className="text-xs text-brown leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
