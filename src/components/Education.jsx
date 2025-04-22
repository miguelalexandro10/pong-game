// Import the graduation cap icon from react-icons library
import { FaGraduationCap } from "react-icons/fa";

// Array containing education history data for each school entry
const educationData = [
  {
    degree: "M.S. Engineering Leadership & Management (In Progress)",
    school: "University of Oklahoma",
    yearAttended: "August 2025 - ",
    motto: <em>Civi Et Reipublicae.</em>,
  },
  {
    degree: "B.S. Computer Engineering (Graduated)",
    school: "California State University, San Bernardino",
    yearAttended: "May 2022 - January 2025",
    motto: <em>We Define the Future.</em>,
  },
  {
    degree: "A.S. Engineering",
    school: "Chaffey College",
    yearAttended: "May 2018 - May 2022",
    motto: <em>Improving Lives Through Education.</em>,
  },
  {
    degree: "Diploma (Graduated)",
    school: "Woodward High School",
    yearAttended: "August 2007 - May 2011",
    motto: <em>Woodward Boomers Will Become Lifelong Learners with a Pioneer Spirit – Cooperative, Productive, Responsible, and Ready for the Future.</em>
  },
];

// Education section component
export default function Education() {
  return (
    <section id="education" className="py-20 bg-cream text-brown">
      <div className="max-w-4xl mx-auto px-6 text-align-left">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-display font-semibold flex items-center mb-2 gap-3">
          <FaGraduationCap className="text-mustard text-3xl" />
          Education
        </h2>

        {/* Decorative Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-rust to-mustard rounded-full mb-10" />

        {/* Education Timeline Style */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pb-6">
              {/* Education Info */}
              <div>
                {/* School Name */}
                <h3 className="text-2xl font-bold text-rust">{edu.school}</h3>

                {/* Degree */}
                <p className="text-m font-semibold text-brown italic">{edu.degree}</p>

                {/* Years attended */}
                <p className="text-sm text-brown  mb-1">{edu.yearAttended}
                </p>

                {/* Motto */}
                <p className="text-sm text-brown/80 leading-relaxed">{edu.motto}</p>
              </div>

              {/* Divider line (not after last item) */}
              {index !== educationData.length - 1 && (
                <div className="mt-6 border-b border-brown/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
