export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <p>Borodi Bogdan © {year}. All rights reserved.</p>
      <p>
        {" "}
        Website built using React.js (
        <a href="https://github.com/BorodiBogdan/react-portofolio" target="new">
          view source code
        </a>
        ).
      </p>
    </footer>
  );
}
export default Footer;
