import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import ProjectSlider from './components/ProjectSlider';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <ProjectSlider />
    </div>
  );
}

export default App;
