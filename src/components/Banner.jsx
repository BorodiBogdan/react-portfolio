import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function Banner() {
    const [text] = useTypewriter({
        words: ["Borodi Bogdan!", "Bob!", "a CS Student!"],
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
                        <p>Hey there! I go by the name <strong>Borodi Bogdan</strong>,
                            though my buddies know me as <strong>Bob</strong>.
                            Currently, I'm a 19-year-old student from
                            <strong> Bistrita, Romania</strong>
                            I'm on the journey towards earning my <strong>
                                Bachelor's Degree in Computer Science</strong> at <strong>
                                Babeș-Bolyai University in Cluj Napoca</strong>. If you want to follow me on this
                            journey you can check my blog page. <strong>Wish you all the best!!!</strong></p>
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