export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <a
          href="https://github.com/BorodiBogdan/react-portofolio"
          target="_blank"
          rel="noreferrer"
        >
          source
        </a>
        <span aria-hidden="true">·</span>
        <a href="mailto:bogdanborodiv@gmail.com">bogdanborodiv@gmail.com</a>
        <span aria-hidden="true">·</span>
        <a
          href="https://www.linkedin.com/in/bogdan-borodi-b35724292/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </div>
      <p>
        Designed &amp; built by Borodi Bogdan · React · © {year}
      </p>
    </footer>
  );
}

export default Footer;
