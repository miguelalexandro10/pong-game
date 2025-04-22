import { FaBriefcase } from "react-icons/fa";

// Experience data
const experiences = [
  {
    title: "Naval Research Enterprise Internship Program (NREIP)",
    company: "NAVSEA: NSWC Corona Division",
    duration: "May 2022 - September 2024 (summers)",
    website: "https://www.navalsteminterns.us/nreip/",
    logo: "/assets/navsea.png",
    responsibilities: [
      "Reviewed and analyzed contracts in Operations, Maintenance, & Sustainment.",
      "Developed technical documents for the Area Distribution Node Project.",
      "Created a presentation for Range Systems Laser Safety Project, focused on GIS Accuracy and GIS Processing ",
    ],
  },
  {
    title: "Manager",
    company: "Sanctuary Coffee",
    duration: "2016 - 2022",
    website: "https://sanctuaryclaremont.com",
    logo: "/assets/sanctuary.png",
    responsibilities: [
      "Trained and developed new hires.",
      "Managed money and handled cash operations.",
      "Provided customer service and resolved conflicts effectively.",
    ],
  },
  {
    title: "Youth Director",
    company: "Willow View UMC",
    duration: "2014 - 2016",
    website: "https://willowview.org/",
    logo: "/assets/umc.png",
    responsibilities: [
      "Wrote and implemented curriculum for middle and high school youth group.",
      "Planned events and recruited volunteers.",
      "Organized mission trips, camps, retreats, and led fundraising efforts.",
      "Engaged in community outreach and relationship building via food drives, and youth academic and sporting events.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-offwhite text-brown"> {/* background color and text */}
      <div className="max-w-4xl mx-auto px-6 text-align-left">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-display font-semibold flex items-center gap-3 mb-2">  {/* Title with icon */}
          <FaBriefcase className="text-rust text-3xl" /> {/* Icon by title*/}
          Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-rust to-mustard rounded-full mb-10" /> {/* Decorative line */}

        {/* Timeline Style List */}
        <div className="relative border-l border-mustard pl-6 space-y-14"> {/* Vertical line */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">

              {/* Experience Block */}
              <div className="space-y-2">
                {/* Top Row: Logo and Title */}
                <div className="flex items-start gap-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="w-12 h-12 rounded-full border border-brown object-contain mt-1"
                  />
                  {/* Company and Title Details */}
                  <div>
                    <h3 className="text-xl font-bold text-rust">{exp.title}</h3>
                    <p className="text-m font-semibold">{exp.company}</p>
                    <p className="text-sm text-brown/60">{exp.duration}</p>
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-mustard hover:underline mt-1 block"
                      >
                        Visit Company Website
                      </a>
                    )}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="mt-2 text-sm list-disc list-inside space-y-1 text-brown">
                  {exp.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
