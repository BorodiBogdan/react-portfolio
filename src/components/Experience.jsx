import React, { useState } from "react";
import useReveal from "./useReveal";

const entries = [
  {
    id: "microsoft-fte",
    date: "Aug 2026 — Present",
    title: "Software Engineer",
    org: "Microsoft — Remote",
    category: "work",
  },
  {
    id: "stellar-ai",
    date: "Until Sep 2026",
    title: "Freelance Developer",
    org: "Stellar AI",
    category: "work",
  },
  {
    id: "microsoft",
    date: "Jul 2025 — Oct 2025",
    title: "Software Engineer Intern",
    org: "Microsoft — Bucharest",
    category: "work",
  },
  {
    id: "qpillars",
    date: "Jul 2024 — Dec 2024",
    title: "Full Stack Developer",
    org: "QPillars — Remote",
    category: "work",
  },
  {
    id: "education-msc",
    date: "Oct 2026 — Jun 2028",
    title: "M.Sc. Artificial Intelligence",
    org: "University of Bucharest",
    category: "education",
  },
  {
    id: "education-bsc",
    date: "Oct 2023 — Jun 2026",
    title: "B.Sc. Computer Science",
    org: "Babeș-Bolyai University — Cluj-Napoca",
    category: "education",
  },
  {
    id: "awards",
    date: "2021 — 2023",
    title: "Awards & Competitions",
    org: "National / Regional Informatics Contests",
    category: "education",
  },
  {
    id: "moisil",
    date: "Dec 2024 — Present",
    title: "Scientific Committee Administrator",
    org: "Grigore Moisil Informatics Contest",
    category: "extracurricular",
  },
  {
    id: "zbuilders",
    date: "Oct 2023 — Sep 2024",
    title: "Informatics Competitions Professor",
    org: "Z-Builders",
    category: "extracurricular",
  },
  {
    id: "logiscool",
    date: "Oct 2023 — Sep 2024",
    title: "IT Trainer",
    org: "Logiscool Ltd",
    category: "extracurricular",
  },
  {
    id: "gdg",
    date: "Oct 2025 — Present",
    title: "Core Member",
    org: "GDG on Campus — Babeș-Bolyai University",
    category: "extracurricular",
  },
];

const filters = [
  { id: "work", label: "Work" },
  { id: "extracurricular", label: "Activities" },
  { id: "education", label: "Education" },
];

const monthMap = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

const parseEnd = (s) => {
  if (!s) return 0;
  const trimmed = s.trim();
  if (/present/i.test(trimmed)) return Date.now();
  const parts = trimmed.split(/—|–|-/).map((p) => p.trim());
  const end = parts.length > 1 ? parts[1] : parts[0];
  if (/present/i.test(end)) return Date.now();
  const m = end.match(/([A-Za-z]{3,})\s+(\d{4})/);
  if (m) {
    const mon = monthMap[m[1].slice(0, 3)] ?? 11;
    return new Date(parseInt(m[2], 10), mon, 1).getTime();
  }
  const y = end.match(/(\d{4})/);
  if (y) return new Date(parseInt(y[1], 10), 11, 1).getTime();
  return 0;
};

export function Experience() {
  const [active, setActive] = useState("work");
  const ref = useReveal();
  const visible = entries
    .filter((e) => e.category === active)
    .sort((a, b) => parseEnd(b.date) - parseEnd(a.date));

  return (
    <section id="experience" className="section reveal" ref={ref}>
      <div className="section-title-row">
        <h2>
          <span className="section-num">02.</span>
          Where I've worked
        </h2>
      </div>

      <div className="exp">
        <div className="exp__tabs" role="tablist" aria-label="Experience filter">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={active === f.id}
              className={`exp__tab${active === f.id ? " is-active" : ""}`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="exp__panel" role="tabpanel">
          <div className="exp__list">
            {visible.map((e) => (
              <article className="exp__item" key={e.id}>
                <span className="exp__item-date">{e.date}</span>
                <div>
                  <h3 className="exp__item-title">{e.title}</h3>
                  <p className="exp__item-org">{e.org}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
