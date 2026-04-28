import IMAGES from "../assets/records/project-images";
import Records from "../assets/records/project-record.json";
import useReveal from "./useReveal";

const TECH = {
  0: ["React", "Node", "REST"],
  1: ["C#", ".NET", "SQL"],
  2: ["C#", "SQL"],
  3: ["Java", "Greenfoot"],
  4: ["C#", "SQL"],
  5: ["HTML", "CSS", "Nunjucks"],
  6: ["React", "JavaScript"],
};

const FOLDER_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path
      d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
      strokeLinejoin="round"
    />
  </svg>
);

const EXT_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path
      d="M14 5h5v5M19 5l-9 9M10 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ARROW_LINK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const stripHtml = (s) =>
  String(s || "")
    .replace(/<br\s*\/?>(\s*<br\s*\/?>)?/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .trim();

const Feature = ({ project, image, alt, tech, idx }) => {
  const ref = useReveal();
  const paragraphs = stripHtml(project.description)
    .split(/\n\n+/)
    .filter(Boolean);
  return (
    <article
      className={`work-feature${idx % 2 === 1 ? " work-feature--alt" : ""} reveal`}
      ref={ref}
    >
      <a
        className="work-feature__media"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={project.title}
      >
        <img src={image} alt={alt || project.title} loading="lazy" />
      </a>
      <div className="work-feature__panel">
        <p className="work-feature__eyebrow">Featured project</p>
        <a
          className="work-feature__title"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          {project.title}
        </a>
        <div className="work-feature__desc">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="work-feature__tags">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="work-feature__links">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="work-feature__icon-link"
            aria-label={`Open ${project.title}`}
          >
            {ARROW_LINK}
          </a>
        </div>
      </div>
    </article>
  );
};

const OtherCard = ({ project, tech }) => (
  <a
    className="work-card"
    href={project.href}
    target="_blank"
    rel="noreferrer"
  >
    <div className="work-card__head">
      <span className="work-card__icon" aria-hidden="true">
        {FOLDER_ICON}
      </span>
      <span className="work-card__ext" aria-hidden="true">
        {EXT_ICON}
      </span>
    </div>
    <h3 className="work-card__title">{project.title}</h3>
    <p className="work-card__desc">
      {stripHtml(project.description).split(/\n\n+/)[0]}
    </p>
    <ul className="work-card__tags">
      {tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  </a>
);

export function ProjectSlider() {
  const titleRef = useReveal();
  const sorted = [...Records].sort((a, b) => a.id - b.id);
  const featured = sorted.slice(0, 3);
  const others = sorted.slice(3);

  return (
    <section id="work" className="section reveal" ref={titleRef}>
      <div className="section-title-row">
        <h2>
          <span className="section-num">03.</span>
          Selected work
        </h2>
      </div>

      <div className="work__featured">
        {featured.map((project, i) => (
          <Feature
            key={project.id}
            project={project}
            image={IMAGES[project.id]}
            alt={project.alt}
            tech={TECH[project.id] || []}
            idx={i}
          />
        ))}
      </div>

      <h3 className="work__other-title">Other things I've built</h3>
      <p className="work__other-sub">view the archive</p>
      <div className="work__grid">
        {others.map((project) => (
          <OtherCard
            key={project.id}
            project={project}
            tech={TECH[project.id] || []}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSlider;
