
import { Col, Row, Container } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { Link } from "react-router-dom";
function PageNotFound() {
    return (
        <section id="home" className="banner">
            <Container className="hero-container">
                <Row className="add-line">
                    <Col className="col">
                        <h2 className="page-not-found-h2">Page <span className="purple-digit">under</span> construction</h2>
                        <Link to="/" style={{ textDecoration: 'none' }}><button><span className="tagline">Back Home</span></button></Link>
                    </Col>
                    <Col className="col image-of-me">
                        <img className="" src={headerImg} alt="Header"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PageNotFound;