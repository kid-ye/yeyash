import Image from "next/image";
import React from "react";

type Experience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    company:
      '<b><a href="https://ample.co.in/" target="_blank" rel="noopener noreferrer" class="link">Ample</a></b>',
    logo: "/images/work/ample.jpg",
    role: "Software Engineering Intern",
    period: "June 2026 - Present",
    location: "Bangalore, India",
    points: [
      "Working on cool stuff.",
      //   "Scaled infrastructure to support 100+ concurrent agents.",
    ],
  },
  {
    company:
      '<b><a href="https://revdau.ai/" target="_blank" rel="noopener noreferrer" class="link">Revdau.ai</a></b>',
    logo: "/images/work/revdau.png",
    role: "Software Engineering Intern",
    period: "Apr 2026 - May 2026",
    location: "Bangalore, India",
    points: [
      "Built real-time AI voice agents with STT, LLM, and TTS.",
      "Scaled infrastructure to support 100+ concurrent agents.",
    ],
  },
  {
    company:
      '<b><a href="https://mobirapid.com" target="_blank" rel="noopener noreferrer" class="link">MobiRapid</a></b>',
    logo: "/images/work/mobirapid.jpg",
    role: "Software Engineering Intern",
    period: "Jul 2025 - Aug 2025",
    location: "Bangalore, India",
    points: [
      "Developed an inventory platform managing 10K+ devices.",
      "Built secure APIs and optimized database performance.",
    ],
  },
];

const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <div className="group p-6 rounded-lg border border-text/10 hover:border-text/20 transition-all hover:bg-text/5">
    <div className="flex items-center gap-3 mb-1">
      {exp.logo ? (
        <Image
          src={exp.logo}
          alt={`logo`}
          width={24}
          height={24}
          className="rounded-sm"
        />
      ) : (
        <div className="w-6 h-6 rounded-sm bg-text/20 flex items-center justify-center text-xs font-bold">
          ?
        </div>
      )}
      <h3
        className="text-lg font-semibold"
        dangerouslySetInnerHTML={{ __html: exp.company }}
      />
    </div>
    <p className="text-text/80 ml-9">
      {exp.role} · {exp.period} · {exp.location}
    </p>
    <ul className="list-disc p-3 ml-6 text-text/80">
      {exp.points.map((point, idx) => (
        <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
      ))}
    </ul>
  </div>
);

export const WorkSection = () => {
  return (
    <div id="work" className="scroll-mt-24 pt-8 pb-8">
      <div className="pb-10">
        <h2 className="text-2xl font-bold pb-8">Work</h2>
        <div className="text-zinc-600 dark:text-zinc-400">
          A summary of my professional journey so far - the teams I've worked
          with, technologies I've built with and the problems I've helped solve.
          <br />
          <br />
        </div>
      </div>
      <div className="grid gap-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>
    </div>
  );
};
