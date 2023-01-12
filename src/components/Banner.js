import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AnimatedTextRotation } from "./AnimatedTextRotation";
import 'animate.css';



const TITLES = [
  "SOFTWARE DEVELOPER",
  "3D MODELER",
  "DESIGNER",
  "ENGINEERING STUDENT",
];



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [displayed, setDisplayed] = useState(true);
  const toRotate = [ "Web Developer", "Web Designer", "Team Leader" ];
  const period = 2000;

  const ref = useRef(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="blurred banner" id="home">
      <Container>
        <Row className="justify-content-center align-items-center ">
          <Col xs={12} sm={6}>
            <h1 className="big-welcome">HI.</h1>
          </Col>
          <Col xs={12} sm={6}>
              <div className="introduction-info">
                  <span>MY NAME IS JASPER AND I AM A</span>
                  <AnimatedTextRotation titles={TITLES}/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>

  )
}
