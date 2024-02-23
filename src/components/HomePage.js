import Banner from './Banner';
import Footer from './Footer';
import ProjectSlider from './ProjectSlider';
import About from './About'

function HomePage() {
    return (
        <div className="App">
            <Banner />
            <About />
            <ProjectSlider />
            <Footer />
        </div>
    );
}

export default HomePage;
