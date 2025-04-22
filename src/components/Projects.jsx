import { useState } from "react";
import { FaGithub, FaLock, FaLockOpen, FaTools } from "react-icons/fa";

export default function Projects() {
  const [lockOpen, setLockOpen] = useState(false);

  return (
    <section id="projects" className="py-20 bg-white text-brown"> {/* background color and text */}
      <div className="max-w-4xl mx-auto px-6 text-align-left"> 
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-display font-semibold flex items-center gap-3 mb-2"> {/* Title with icon */}
          <FaTools className="text-mustard text-3xl" />
          Projects
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-rust to-mustard rounded-full mb-10" /> 

        {/* Timeline List */}
        <div className="relative border-l border-mustard pl-6 space-y-16"> 
          {/* Project 1 */}
          <div
            className="group"
            onMouseEnter={() => setLockOpen(true)}
            onMouseLeave={() => setLockOpen(false)}
          >
            <span className="absolute -left-[7px] top-1.5 w-3 h-3 bg-rust rounded-full" /> 
            <div>
              <h3 className="text-2xl font-bold text-rust flex items-center justify-between">
                Secure Access Locking System with NFC & Biometrics
                <span className="text-brown text-lg ml-4">
                  {lockOpen ? <FaLockOpen /> : <FaLock />}
                </span>
              </h3>
              <p className="text-sm text-graphite mt-2 max-w-2xl">
                A Raspberry Pi–powered smart lock system aligned with the UN’s Sustainable
                Development Goal 11. Tackles issues such as break-ins, poisonings, and
                unauthorized access.
              </p>
              <a
                href="https://github.com/shunakiya/SALSNB/tree/main/project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-mustard hover:underline mt-2"
              >
                <FaGithub className="mr-2" />
                View Code
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group">
            <span className="absolute -left-[7px] top-1.5 w-3 h-3 bg-mustard rounded-full" />
            <div>
              <h3 className="text-2xl font-bold text-rust">Pong Game</h3>
              <p className="text-sm text-graphite mt-2 max-w-2xl">
                A chaotic twist on the classic Pong game, built with Python and Pygame library.
                Reverse controls, power-ups, and speed shifts add unpredictable fun.
              </p>
              <a
                href="https://github.com/miguelalexandro10/CSE-4550---Final-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-mustard hover:underline mt-2"
              >
                <FaGithub className="mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
