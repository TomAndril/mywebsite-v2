import React from "react"
import Text from "../components/Text"

interface ExperienceItem {
  role: string
  company: string
  companyUrl?: string
  location: string
  period: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Full Stack Engineer",
    company: "Knowit",
    companyUrl: "https://www.knowit.se/",
    location: "Malmö, Sweden",
    period: "May 2023 - Present",
    description: "Led full-stack development for IKEA's global e-commerce platforms. Built responsive, accessible user interfaces using React, Sass, and Express in cross-functional agile teams."
  },
  {
    role: "Frontend Engineer",
    company: "Boozt",
    companyUrl: "https://www.boozt.com/",
    location: "Malmö, Sweden",
    period: "May 2021 - May 2023",
    description: "Developed customer-facing e-commerce platforms and internal tools. Refactored legacy code to hook-based React and maintained a CMS serving millions of active users."
  },
  {
    role: "Lead Development Engineer",
    company: "Parkbird",
    location: "Copenhagen, Denmark",
    period: "May 2020 - May 2021",
    description: "Architected a cross-platform React Native app from zero to production for a Scandinavian parking logistics startup. Mentored engineers and launched map-based booking services."
  },
  {
    role: "Web UI Developer",
    company: "Globant",
    companyUrl: "https://www.globant.com/",
    location: "Buenos Aires, Argentina",
    period: "Jan 2019 - Feb 2020",
    description: "Developed responsive web applications for global clients. Translated complex UI/UX designs into clean, accessible code while collaborating in agile, distributed teams."
  }
]

const Experience: React.FC = () => {
  return (
    <div className="space-y-6">
      <Text variant="h2" className="text-xl font-bold tracking-tight text-neutral-900 block">
        Work Experience
      </Text>

      <div className="relative border-l border-neutral-200 pl-4 ml-1.5 space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[21.5px] top-1.5 w-2.5 h-2.5 rounded-full border border-neutral-300 bg-white" />
            
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-y-1">
                <Text variant="h3" className="text-base font-semibold text-neutral-900">
                  {exp.role}{" "}
                  <span className="font-normal text-neutral-400">at</span>{" "}
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="font-semibold text-neutral-900">{exp.company}</span>
                  )}
                </Text>
                <Text className="text-xs sm:text-sm text-neutral-500 font-medium whitespace-nowrap">
                  {exp.period}
                </Text>
              </div>
              
              <Text className="text-xs text-neutral-500 font-medium block pb-1">
                {exp.location}
              </Text>

              <Text variant="p" className="text-sm text-neutral-600 leading-relaxed block">
                {exp.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
