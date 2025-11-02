import Banner from "./Banner";
import Experience from "./Experience";
import ProjectSlider from "./ProjectSlider";
import About from "./About";

function HomePage() {
  return (
    <div className="App">
      <Banner />
      <Experience />
      <About />
      <ProjectSlider />
    </div>
  );
}

export default HomePage;
