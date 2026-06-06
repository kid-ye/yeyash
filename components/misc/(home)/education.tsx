import Image from "next/image";
import React from "react";

type EducationItem = {
  institution: string;
  image?: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
};

const education: EducationItem[] = [
  {
    institution: "BMS College of Engineering",
    image: "/images/work/bmsce.png",
    degree: "Bachelors of Engineering",
    period: "2023 - 2027",
    location: "Bengaluru, India",
    details: [
      "Relevant coursework: Data Structures, Operating Systems, Computer Networks, and Database Systems.",
    ],
  },
];

const EducationCard = ({ item }: { item: EducationItem }) => (
  <div className="group p-6 rounded-lg border border-text/10 hover:border-text/20 transition-all hover:bg-text/5">
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.institution} logo`}
            width={24}
            height={24}
            className="rounded-sm object-cover"
          />
        ) : null}
        <h3 className="text-lg font-semibold">{item.institution}</h3>
      </div>
      <span className="text-sm text-text/60 shrink-0">{item.period}</span>
    </div>
    <p className="text-text/80 mt-1">
      {item.degree} - {item.location}
    </p>
    <ul className="list-disc p-3 ml-3 text-text/80">
      {item.details.map((detail) => (
        <li key={detail}>{detail}</li>
      ))}
    </ul>
  </div>
);

export const Education = () => {
  return (
    <div id="education" className="scroll-mt-24 pt-8 pb-8">
      <div className="pb-10">
        <h2 className="text-2xl font-bold pb-4">Education</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          A quick look at my academic background and the foundations behind the
          work I&apos;m building now.
        </p>
      </div>
      <div className="grid gap-4">
        {education.map((item) => (
          <EducationCard key={item.institution} item={item} />
        ))}
      </div>
    </div>
  );
};
