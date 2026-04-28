import { useTypewriter } from "react-simple-typewriter";

export function Banner() {
  const [text] = useTypewriter({
    words: ["Borodi Bogdan.", "Bob.", "a CS student."],
    loop: {},
    typeSpeed: 95,
    deleteSpeed: 55,
  });

  const birthDate = new Date(2004, 10, 24);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return (
    <section id="home" className="hero">
      <p className="hero__intro">Hi, my name is</p>

      <h1 className="hero__name">
        {text}
        <span className="hero__name-cursor" aria-hidden="true">_</span>
      </h1>

      <h2 className="hero__tagline">I build software.</h2>

      <p className="hero__body">
        I'm a {age}-year-old <strong>Computer Science student</strong> at{" "}
        <strong>Babeș-Bolyai University</strong> in Cluj-Napoca, currently
        sharpening my craft as an engineer at{" "}
        <strong>Microsoft</strong>. I care about clean systems, sharp
        interfaces, and the small details that make a product feel finished.
      </p>

      <div className="hero__cta-row">
        <a
          className="btn"
          href="#work"
        >
          See my work →
        </a>
        <a className="btn btn--ghost" href="/blog">
          Read writing
        </a>
      </div>

      <div className="hero__meta">
        <div className="hero__meta-item">
          <span>// status</span>
          <span>
            <span className="hero__meta-dot" aria-hidden="true" />
            Joining Microsoft · Aug 2026
          </span>
        </div>
        <div className="hero__meta-item">
          <span>// based</span>
          <span>Cluj-Napoca, Romania</span>
        </div>
        <div className="hero__meta-item">
          <span>// currently</span>
          <span>B.Sc. Computer Science · Babeș-Bolyai</span>
        </div>
      </div>
    </section>
  );
}

export default Banner;
