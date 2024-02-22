import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo-white.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  /*const [scrolled, setScrolled] = useState(false);

  // in case we want a fixed nav bar we decomment line 40 and go to css and change position from absolute to fixed for navbar
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50 || window.innerWidth < 800) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  */
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={"" /*scrolled ? "scrolled" : ""*/}>
        <Container>
          <Navbar.Brand href="/">
            <img className="navbar-logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>About me</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/bogdan-borodi-b35724292/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://www.facebook.com/borodi.bogdan/"><img src={navIcon2} alt="Facebook" /></a>
                <a href="https://www.instagram.com/borodi_bogdan/"><img src={navIcon3} alt="instagram" /></a>
              </div>
              <HashLink to='https://drive.google.com/file/d/1jJLJd3w14vGUkFseJtQmotU2Ne7cpAKl/view?usp=drive_link'>
                <button className="vvd"><span>resume</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
export default NavBar;