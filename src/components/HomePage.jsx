import Banner from "./Banner";
import About from "./About";
import Experience from "./Experience";
import ProjectSlider from "./ProjectSlider";
import Contact from "./Contact";

function HomePage() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Experience />
      <ProjectSlider />
      <Contact />
    </div>
  );
}

export default HomePage;
