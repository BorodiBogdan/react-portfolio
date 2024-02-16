import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import Footer from "./components/Footer";
import ProjectSlider from './components/ProjectSlider';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <ProjectSlider />
      <Footer />
    </div>
  );
}

export default App;
