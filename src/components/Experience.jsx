import React, { useState } from "react";
import { Container } from "react-bootstrap";

// Minimal timeline entries (no descriptions)
const entries = [
  {
    id: "freelance",
    date: "Present",
    title: "Freelance Developer",
    org: "Self-employed / Freelance",
    category: "work",
  },
  {
    id: "microsoft-fte",
    date: "Aug 2026",
    title: "Future Software Engineer",
    org: "Microsoft",
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

export function Experience() {
  const [active, setActive] = useState("work");

  const filters = [
    { id: "work", label: "Work" },
    { id: "extracurricular", label: "Extracurricular" },
    { id: "education", label: "Education" },
  ];

  // Helper: parse end date and return timestamp (handles 'Present')
  const parseEndTimestamp = (dateStr) => {
    if (!dateStr) return 0;
    const s = dateStr.trim();
    if (/present/i.test(s)) return Date.now();
    const parts = s.split(/—|–|-/).map((p) => p.trim());
    const endPart = parts.length > 1 ? parts[1] : parts[0];
    if (/present/i.test(endPart)) return Date.now();
    const m = endPart.match(/([A-Za-z]{3,})\s+(\d{4})/);
    const monthMap = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
    if (m) {
      const mon = m[1].slice(0, 3);
      const year = parseInt(m[2], 10);
      const month = monthMap[mon] ?? 11;
      return new Date(year, month, 1).getTime();
    }
    const y = endPart.match(/(\d{4})/);
    if (y) return new Date(parseInt(y[1], 10), 11, 1).getTime();
    return 0;
  };

  // sort newest first
  const sortedEntries = entries
    .slice()
    .sort((a, b) => parseEndTimestamp(b.date) - parseEndTimestamp(a.date));
  const visible = sortedEntries.filter((e) => e.category === active);

  return (
    <section id="experience" className="experience-section">
      <Container className="mwidth">
        <h2 className="container-title">Qualifications</h2>

        <div
          className="exp-controls"
          role="tablist"
          aria-label="Experience sections"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              className={"exp-btn " + (active === f.id ? "active" : "")}
              onClick={() => setActive(f.id)}
              aria-pressed={active === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="timeline-min">
          <div className="timeline-line" aria-hidden="true"></div>
          {visible.map((e, idx) => (
            <div
              className={`timeline-row ${
                idx % 2 === 0 ? "tl-left" : "tl-right"
              }`}
              key={e.id}
            >
              <span className="timeline-dot" aria-hidden="true"></span>
              <div className="timeline-content">
                <h3 className="tl-title">{e.title}</h3>
                <p className="tl-org">{e.org}</p>
                <p className="tl-date">{e.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
