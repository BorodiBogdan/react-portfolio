import { useState } from "react";
import IMAGES from "../assets/records/about-images";
import Records from "../assets/records/about-record.json";
import useReveal from "./useReveal";

export function About() {
  const [active, setActive] = useState(Records[0].id);

  const birthDate = new Date(2004, 10, 24);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  const ref = useReveal();
  const recordIdx = Records.findIndex((r) => r.id === active);
  const current = Records[recordIdx];

  return (
    <section id="about" className="section reveal" ref={ref}>
      <div className="section-title-row">
        <h2>
          <span className="section-num">01.</span>
          About me
        </h2>
      </div>

      <div className="about">
        <div>
          <div className="about__prose">
            <p>
              Hey — I'm <strong>Borodi Bogdan</strong>. I started programming
              in <strong>C++</strong> in high school and never really stopped
              tinkering. Today I'm a <strong>{age}-year-old</strong> CS student
              at <strong>Babeș-Bolyai University</strong>, ranked in the top
              10% of my faculty.
            </p>
            <p>
              I just wrapped a software engineering internship at{" "}
              <strong>Microsoft</strong> in Bucharest, where I worked on
              internal AI tooling for on-call engineers. Before that I shipped
              full-stack features at <strong>QPillars</strong> for two
              thousand-plus users.
            </p>
            <p>
              Outside of code: sport, music, and the occasional contest
              problem.
            </p>
          </div>

          <div className="about__tabs" role="tablist">
            {Records.map((r) => (
              <button
                key={r.id}
                role="tab"
                aria-selected={active === r.id}
                className={`about__tab${active === r.id ? " is-active" : ""}`}
                onClick={() => setActive(r.id)}
              >
                {r.title}
              </button>
            ))}
          </div>

          <div className="about__panel" role="tabpanel" aria-live="polite">
            {current.content.map((line, i) => {
              const text =
                recordIdx === 0 && i === 0 ? line.replace("{age}", age) : line;
              return <p key={`${current.id}-${i}`}>{text}</p>;
            })}
          </div>
        </div>

        <div className="about__portrait-wrap">
          <span className="about__portrait-frame" aria-hidden="true" />
          <div className="about__portrait">
            <img
              src={IMAGES[Math.max(0, recordIdx)]}
              alt="Borodi Bogdan"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
