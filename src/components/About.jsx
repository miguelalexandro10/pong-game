// Import useState from React to manage state (in this case, for hover effects)
import { useState } from "react";

// Define and export the About functional component
export default function About() {
  // Create a state variable to keep track of which team is being hovered over
  const [hoveredTeam, setHoveredTeam] = useState(null);

  // Return the JSX content that will be rendered to the page
  return (
    // Main section for the About content. The id is used for anchor navigation. Tailwind classes control padding and colors.
    <section id="about" className="py-20 bg-white text-brown">
      {/* Centered container with max width and horizontal padding */}
      <div className="max-w-4xl mx-auto px-6 text-align-left">

        {/* Header for the About section title.  */}
        <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
          About Me
        </h2>

        {/* Decorative line under the title with a gradient and rounded edges */}
        <div className="w-20 h-1 bg-gradient-to-r from-rust to-mustard mx-left rounded-full mb-12" />

        {/* Paragraph block introducing Miguel. Tailwind sets margin-top, text size, color, and line spacing */}
        <p className="mt-4 text-xl font-bold text-gray-700 leading-relaxed">
          Hi, I'm Miguel! 
        </p>

        <p className="mt-6 text-md text-gray-700 leading-relaxed">
          I'm originally from Northwest Oklahoma, but in 2015, I made the move to sunny Southern California after 
          marrying my incredible wife. These days, I’m proud to be a dad to our energetic and wild little boy, 
          Leo — he keeps life fun, fast, and full of surprises.
        </p>

        {/* Paragraph block covering Miguel's education and technical interests */}
        <p className="mt-6 text-md text-gray-700 leading-relaxed">
          In January 2025, I graduated with a B.S. in Computer Engineering from California State University, San 
          Bernardino — something I am beyond proud of. My interests lie at the intersection of embedded systems, 
          hardware optimization, and software development. I also have a strong background in math and physics, which 
          naturally fuels my passion for technology and engineering.
        </p>

        <p className="mt-6 text-md text-gray-700 leading-relaxed">
          Recently, I was accepted into graduate school at the University of Oklahoma, where I’ll be pursuing 
          an M.S. in Engineering Leadership & Management — another exciting milestone I’m eager to begin.
        </p>

        {/* Paragraph describing hobbies. "relative" is needed for absolute positioning of logo images */}
        <p className="mt-6 text-md text-gray-700 leading-relaxed relative">
          Outside of engineering, I'm a huge sports fan. In the fall, my weekends typically revolve around 7 National Championships, 7 Heisman Trophy winners, and my beloved 

          {/* Span containing the team name with hover behavior. "relative" and "cursor-pointer" allow logo pop-up */}
          <span 
            className="text-[#841617] text-lg font-bold cursor-pointer relative mx-1"
            onMouseEnter={() => setHoveredTeam("sooners")}
            onMouseLeave={() => setHoveredTeam(null)}
          >
            Oklahoma Sooners!
            {/* Conditional rendering: show logo only when hovered */}
            {hoveredTeam === "sooners" && (
              <img 
                src="/assets/oulogo.png" 
                alt="Oklahoma Sooners Logo" 
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 transition-opacity duration-300"
              />
            )}
          </span>

          When spring rolls around, you'll find me cheering on reigning 2024 World Series Champions — the

          {/* Same setup for LA Dodgers hover effect */}
          <span 
            className="text-[#005A9C] text-lg font-bold cursor-pointer relative mx-1"
            onMouseEnter={() => setHoveredTeam("dodgers")}
            onMouseLeave={() => setHoveredTeam(null)}
          >
            LA Dodgers!
            {/* Show Dodgers logo only when hovered */}
            {hoveredTeam === "dodgers" && (
              <img 
                src="/assets/dodgerslogo.png"
                alt="LA Dodgers Logo" 
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 transition-opacity duration-300"
              />
            )}
          </span>.
          {/* Final sentence in the hobbies paragraph */} 
          I also love a hot cup of coffee and always enjoy meeting up at a local coffee shop to chat about anything and everything.
        </p>
        
        {/* Paragraph about my strengths and personality test */}
        <p className="mt-6 text-md text-gray-700 leading-relaxed">
          Finally, I am an <strong>ENFP</strong> — I thrive on connecting with others, bringing energy and optimism into every
          environment I step into. My strengths in <strong>communication, positivity, and WOO</strong> (Winning Others Over)
          help me build strong relationships, while my <strong>deliberative and analytical</strong> mindset ensures I approach 
          problems with thoughtful and effective solutions. I love turning big ideas into actionable plans — and having
          fun along the way.
        </p>

        {/* Final paragraph expressing openness to networking */}
        <p className="mt-6 text-md text-gray-700 leading-relaxed">
          So whether its tech, sports, or coffee shop recommendations — feel free to reach out!
          I’m always open to new opportunities, collaborations, and friendly conversations.
        </p>

        {/* Final call-to-action styled with gradient and transparent text */}
        <p className="mt-10 text-3xl font-bold bg-gradient-to-r from-rust to-mustard bg-clip-text text-transparent">
          Let’s build something great!
        </p>
      </div>
    </section>
  );
}
