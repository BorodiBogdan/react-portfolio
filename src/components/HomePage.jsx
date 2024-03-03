import Banner from './Banner';
import ProjectSlider from './ProjectSlider';
import About from './About'

function HomePage() {
    return (
        <div className="App">
            <Banner />
            <About />
            <ProjectSlider />
        </div>
    );
}

export default HomePage;
