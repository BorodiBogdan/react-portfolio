
import { Col, Row, Container } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { Link } from "react-router-dom";
function PageNotFound() {
    return (
        <section id="home" className="banner">
            <Container className="hero-container">
                <Row className="add-line">
                    <Col className="col">
                        <h3 className="page-not-found-h3"><span className="purple-digit">4</span>0<span className="purple-digit">4</span> </h3>
                        <h2 className="page-not-found-h2">Page not found!</h2>
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