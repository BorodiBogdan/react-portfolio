import { useState, useEffect } from "react";
import IMAGES from "../assets/records/about-images";
import Records from "../assets/records/about-record.json";
import useReveal from "./useReveal";

const ROTATE_INTERVAL = 7500;

export function About() {
  const [active, setActive] = useState(Records[0].id);
  const [paused, setPaused] = useState(false);

  const birthDate = new Date(2004, 10, 24);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  const ref = useReveal();
  const recordIdx = Records.findIndex((r) => r.id === active);
  const current = Records[recordIdx];

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setActive((currentId) => {
        const idx = Records.findIndex((r) => r.id === currentId);
        return Records[(idx + 1) % Records.length].id;
      });
    }, ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, active]);

  // Clicking a tab restarts the timer too, since `active` is an effect
  // dependency — the user's pick gets a full interval before advancing.
  const handleSelect = (id) => setActive(id);

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
              Hey! I'm <strong>Borodi Bogdan</strong>. I started programming
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

          <div
            className="about__tabs"
            role="tablist"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {Records.map((r) => (
              <button
                key={r.id}
                role="tab"
                aria-selected={active === r.id}
                className={`about__tab${active === r.id ? " is-active" : ""}`}
                onClick={() => handleSelect(r.id)}
              >
                {r.title}
              </button>
            ))}
            <span
              key={active}
              className="about__tab-progress"
              style={{
                animationDuration: `${ROTATE_INTERVAL}ms`,
                animationPlayState: paused ? "paused" : "running",
              }}
            />
          </div>

          <div
            className="about__panel"
            role="tabpanel"
            aria-live="polite"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
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
