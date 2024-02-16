import image1 from "../assets/img/project-img2.png";
import image2 from "../assets/img/project-img3.png";
import arrow from "../assets/img/right arrow.png";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function ProjectSlider() {
    const [ProjectList, SetProjecteList] = useState([
        { image: image1, title: "SoftOpia", description: "BBU student", description: "I'm an tech enthusiast since I was a child. I'm currently pursuing a Bachelor's Degree in Computer Science at Babeș-Bolyai University from Cluj Napoca, probably the best CS University from Romania.", index: 0 },
        { image: image2, title: "Interactive learning app", description: "BBU student", description: "I'm an tech enthusiast since I was a child. I'm currently pursuing a Bachelor's Degree in Computer Science at Babeș-Bolyai University from Cluj Napoca, probably the best CS University from Romania.", index: 1 },
        { image: image1, title: "Math Universe", description: "BBU student", description: "I'm an tech enthusiast since I was a child. I'm currently pursuing a Bachelor's Degree in Computer Science at Babeș-Bolyai University from Cluj Napoca, probably the best CS University from Romania.", index: 2 },
        { image: image2, title: "Math Universe", description: "BBU student", description: "I'm an tech enthusiast since I was a child. I'm currently pursuing a Bachelor's Degree in Computer Science at Babeș-Bolyai University from Cluj Napoca, probably the best CS University from Romania.", index: 3 },
        { image: image2, title: "Math Universe", description: "BBU student", description: "I'm an tech enthusiast since I was a child. I'm currently pursuing a Bachelor's Degree in Computer Science at Babeș-Bolyai University from Cluj Napoca, probably the best CS University from Romania.", index: 4 },
        { image: image2, title: "Math Universe", description: "BBU student", description: "I'm an tech enthusiast since I was a child. I'm currently pursuing a Bachelor's Degree in Computer Science at Babeș-Bolyai University from Cluj Napoca, probably the best CS University from Romania.", index: 5 }
    ]);

    const length = ProjectList.length;
    const [width, setWidth] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current.scrollWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [width]);

    useEffect(() => {
        console.log(activeIndex);
        var cardWidth = carousel.current.scrollWidth / length;

        carousel.current.scrollTo({

            left: activeIndex * cardWidth,
            behavior: "smooth",
        });

    }, [activeIndex]);


    return (
        <div class="project-container">
            <h1 class="container-title">An overview of my work</h1>

            <div className="arrow-and-project-container">
                <i className="arrow left" onClick={() => (activeIndex > 0) ? setActiveIndex(activeIndex - 1) : setActiveIndex(activeIndex)}></i>
                <div className="center-div">
                    <div ref={carousel} className="carousel">
                        <motion.div
                            dragConstraints={{ right: 0, left: -width }}
                            className="motion-carousel Project-Container"
                        >
                            {ProjectList.map((project) => {
                                return (
                                    <motion.div className="item" key={project.index}>
                                        <div className="project-holder-active">
                                            <img className="project-image" src={project.image} />
                                            <h1 className="Project-Title">{project.title}</h1>
                                            <p className="Project-Description">{project.description}</p>
                                        </div>
                                    </motion.div>
                                )
                            }
                            )}
                        </motion.div>
                    </div>
                </div>

                <i className="arrow right" onClick={() => (activeIndex < length - 3) ? setActiveIndex(activeIndex + 1) : setActiveIndex(activeIndex)}></i>
            </div>
        </div >
    );
}

export default ProjectSlider;