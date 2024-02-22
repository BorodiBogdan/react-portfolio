import IMAGES from "../assets/records/project-images";
import Records from "../assets/records/project-record.json";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ProjectSlider() {
    //const [ProjectList, SetProjecteList] = useState(Records);
    //const [Images, SetImages] = useState(IMAGES);

    const [width, setWidth] = useState(0);
    //const [activeIndex, setActiveIndex] = useState(0);

    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current.scrollWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [width]);
    /*
    useEffect(() => {
        var cardWidth = carousel.current.scrollWidth / length;

        carousel.current.scrollTo({

            left: activeIndex * cardWidth,
            behavior: "smooth",
        });

    }, [activeIndex]);

*/
    return (
        <div class="project-container" id="projects">
            <div className="arrow-and-project-container">
                {
                    /*<i className="arrow left" onClick={() => (activeIndex > 0) ? setActiveIndex(activeIndex - 1) : setActiveIndex(activeIndex)}></i>
                */
                }
                <div className="center-div">
                    <div className="align-the-title">
                        <h1 class="container-title">My work:</h1>
                        <p className="card-info">Drag the cards in order to see more pojects!<br />
                            If you want to see the source code or it's full presentation click on the title.</p>
                        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                            <motion.div
                                drag="x"
                                dragConstraints={{ right: 0, left: -width }}
                                className="motion-carousel Project-Container"

                            >
                                {Records.map((project, index) => {
                                    console.log(project);
                                    return (

                                        <motion.div className="item" key={project.index}>
                                            <div className="project-holder-active">scroll

                                                <img className="project-image" src={IMAGES[index]} alt={Records['alt']} />
                                                <a href={project.href} target="new" className="project-button">
                                                    <h1 className="Project-Title">{project.title}</h1>
                                                </a>
                                                <p className="Project-Description">&nbsp;&nbsp;&nbsp;&nbsp;{project.description}</p>
                                            </div>
                                        </motion.div>

                                    )
                                }
                                )}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/*<i className="arrow right" onClick={() => (activeIndex < length - 3) ? setActiveIndex(activeIndex + 1) : setActiveIndex(activeIndex)}></i>*/}
            </div>
        </div >
    );
}

export default ProjectSlider;