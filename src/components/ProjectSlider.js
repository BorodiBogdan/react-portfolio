import image1 from "../assets/img/project-img2.png";
import image2 from "../assets/img/project-img3.png";
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

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        var length = ProjectList.length - 1;
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div class="project-container">
            <h1 class="container-title">An overview of my work</h1>
            <div className="center-div">
                <div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                    <motion.div

                        drag="x"
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
        </div>
    );
}

export default ProjectSlider;