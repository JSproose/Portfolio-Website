import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/proto_4.svg';
import github from "../assets/img/icons8-github.svg";
import linkedin from "../assets/img/icons8-linkedin-2.svg";

export const Footer = () => {
  return (
    <footer className="blurred footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col sm={6} className="text-center text-sm-start">
            <img src={logo} className="footer-logo" alt="Logo" />
          </Col>
          <Col  sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={github} alt="Icon" /></a>
              <a href="#"><img src={linkedin} alt="Icon" /></a>
            </div>
            <p>Copyright &#169; MMXXII Jasper Calder</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

// style={{border: "2px solid red"}}
