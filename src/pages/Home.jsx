// Import React hooks and icons
import { useState } from "react";
import {
  FaChevronDown,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false); // Handles dropdown state

  return (
    <section id="home" className="relative min-h-screen bg-cream text-graphite overflow-hidden" >
      {/* Layout split between text (left) and stacked images (right) */}
      <div className="flex flex-col-reverse md:flex-row w-full min-h-screen px-6 md:px-12 lg:px-20">


        {/* Left Section: Intro Text & Contact Button */}
        <div className="mx-auto my-auto space-y-6 text-left">

          {/* Tagline */}
          <span className="text-rust text-xs font-bold uppercase tracking-widest bg-offwhite px-4 py-1 rounded-full shadow-sm">
            Welcome to My Portfolio
          </span>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
            Miguel Rodriguez
          </h1>
          <h2 className="text-2xl md:text-3xl text-brown font-light">
            B.S. Computer Engineering
          </h2>

          {/* Description Paragraph */}
          <p className="text-brown text-lg leading-relaxed max-w-xl">
          I build creative and innovative technology solutions and love solving complex problems.
          Feel free to explore and reach out anytime!
          </p>

          {/* Contact Button + Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 bg-rust hover:bg-mustard text-white px-6 py-3 rounded-full text-lg font-medium transition duration-300"
            >
              Let's Connect
              <FaChevronDown
                className={`text-lg transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDropdown && (
              <div className="mt-3 w-72 bg-charcoal border border-brown text-white rounded-xl shadow-xl p-4 space-y-3">
                <div className="flex items-center gap-2 border-b border-gray-600 pb-2">
                  <FaEnvelope className="text-mustard" />
                  <a
                    href="mailto:miguelalexandro10@gmail.com"
                    className="hover:underline text-sm"
                  >
                    miguelalexandro10@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 border-b border-gray-600 pb-2">
                  <FaLinkedin className="text-mustard" />
                  <a
                    href="https://www.linkedin.com/in/miguelalexandro1992"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-2 border-b border-gray-600 pb-2">
                  <FaGithub className="text-mustard" />
                  <a
                    href="https://github.com/miguelalexandro10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-sm"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-2 border-b border-gray-600 pb-2">
                  <FaInstagram className="text-mustard" />
                  <a
                    href="https://www.instagram.com/miguelalexandro10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-sm"
                  >
                    @miguelalexandro10
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <FaMapMarkerAlt className="text-mustard" />
                  <span className="text-sm">Ontario, CA 91761</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Stacked Photos with Entry Animation */}
        <div className="w-full md:w-1/2 flex flex-col items-center space-y-1">
          {/* Photo 1 */}
          <img
            src="/assets/websitephoto.jpg"
            alt="Miguel Rodriguez 1"
            className="w-72 h-auto object-cover border-brown opacity-0 translate-x-[-50px] animate-fade-in-left"
            style={{
              animationDelay: "0s",
              animationFillMode: "forwards",
            }}
          />

          {/* Photo 2 */}
          <img
            src="/assets/websitephoto2.jpg"
            alt="Miguel Rodriguez 2"
            className="w-72 h-auto object-cover border-brown opacity-0 translate-x-[-50px] animate-fade-in-left"
            style={{
              animationDelay: "0.3s",
              animationFillMode: "forwards",
            }}
          />

          {/* Photo 3 */}
          <img
            src="/assets/websitephoto3.JPG"
            alt="Miguel Rodriguez 3"
            className="w-72 h-auto object-cover border-brown opacity-0 translate-x-[-50px] animate-fade-in-left"
            style={{
              animationDelay: "0.6s",
              animationFillMode: "forwards",
            }}
          />
        </div>
      </div>

      {/* Scroll Down Indicator - Bottom Center */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 border-2 border-rust rounded-full flex items-center justify-center">
          <span className="text-rust text-xl">↓</span>
        </div>
      </div>
    </section>
  );
}
