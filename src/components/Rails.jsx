const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 1 1 4 0v4" strokeLinecap="round" />
  </svg>
);

const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      strokeLinejoin="round"
    />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path
      d="M14 9h2.5L17 6h-3a3 3 0 0 0-3 3v2H9v3h2v7h3v-7h2.4l.6-3H14V9.5c0-.3.2-.5.5-.5H14Z"
      strokeLinejoin="round"
    />
  </svg>
);

export function LeftRail() {
  return (
    <aside className="rail rail--left" aria-label="Social links">
      <a
        className="rail-link"
        href="https://github.com/BorodiBogdan"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <IconGithub />
      </a>
      <a
        className="rail-link"
        href="https://www.linkedin.com/in/bogdan-borodi-b35724292/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <IconLinkedIn />
      </a>
      <a
        className="rail-link"
        href="https://www.instagram.com/borodi_bogdan/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <IconInstagram />
      </a>
      <a
        className="rail-link"
        href="https://www.facebook.com/borodi.bogdan/"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <IconFacebook />
      </a>
    </aside>
  );
}

export function RightRail() {
  return (
    <aside className="rail rail--right" aria-label="Email">
      <a
        href="mailto:bogdanborodiv@gmail.com"
        className="rail-email"
      >
        bogdanborodiv@gmail.com
      </a>
    </aside>
  );
}

const Rails = { LeftRail, RightRail };
export default Rails;
