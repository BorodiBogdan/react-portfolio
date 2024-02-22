import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function Banner() {
    const [text] = useTypewriter({
        words: ["Borodi Bogdan!", "Bob!", "a Software Developer!"],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    })
    return (
        <section id="home" className="banner">
            <Container className="hero-container">
                <Row className="add-line">
                    <Col className="col">
                        <h1>Hi, I'm <span>{text}</span><Cursor /></h1>
                        <p>Greetings! My name is <strong>Borodi Bogdan
                        </strong>, but my closest friends call me <strong>Bob
                            </strong>. I am a 19-year-old  student from <strong>Bistrita, Romania
                            </strong> - probably one of the smallest towns on earth - pursuing a <strong>
                                Bachelor's Degree in Computer Science
                            </strong> at <strong>Babeș-Bolyai University from Cluj Napoca</strong>.</p>
                        <button><span className="tagline">Welcome to my portofolio</span></button>
                    </Col>
                    <Col className="col image-of-me">
                        <img className="" src={headerImg} alt="Header"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )

};

export default Banner;