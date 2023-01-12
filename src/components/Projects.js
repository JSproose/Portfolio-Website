import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import blogBanner from "../assets/img/blog-1.png";
import blog1 from "../assets/img/blog-1.png";
import blog2 from "../assets/img/blog-2.png";
import blog3 from "../assets/img/blog-3.png";
import blog4 from "../assets/img/blog-4.png";

import rayMarchEngineBanner from "../assets/img/ray-march-engine-1.png";
import ray1 from "../assets/img/ray-1.png";
import ray2 from "../assets/img/ray-2.png";
import ray3 from "../assets/img/ray-3.png";

import blenderBanner from "../assets/img/blender-1.png";
import blend1 from "../assets/img/blend-1.png";
import blend2 from "../assets/img/blend-2.png";
import blend3 from "../assets/img/blend-3.png";
import blend4 from "../assets/img/blend-4.png";

import perpetualMotion1 from "../assets/video/perpetual-motion-1.mp4";
import perpetualMotion2 from "../assets/video/perpetual-motion-2.mp4";
import machine from "../assets/video/machine.mp4";
import artDeco from "../assets/video/art-deco.mp4";

import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Ray Marching Engine",
      imgUrl: rayMarchEngineBanner,
      description: [ray1, ray2, ray3],
      github: 'https://github.com/JSproose/Ray-Marching-App',
      tags: ["React", "Javascript"],
    },
    {
      title: "Blender Screen Saver Creator",
      imgUrl: blenderBanner,
      description: [blend1, blend2, blend3, blend4],
      github: 'https://github.com/JSproose/PyQt-Blender-Screen-Saver-Creator',
      tags: ["Blender", "Python"],
    },
    {
      title: "Creative Writing Blog App",
      imgUrl: blogBanner,
      description: [blog1, blog2, blog3, blog4],
      github: 'https://github.com/JSproose/Creative-Writing-Blog',
      tags: ["React", "Javascript", "Node", "Express", "Firebase"],
    }
  ];

  return (
    <section className="blurred project" id="projects">
      <Container fluid>
        <Row>
          <Col>
            <h2>PROJECTS</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Software</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">3D</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Carousel>
                    <Carousel.Item>
                      <div className="video-carousel">
                        <video autoPlay loop>
                            <source src={perpetualMotion1} type="video/mp4"></source>
                            Sorry, your browser doesn't support videos.
                        </video>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="video-carousel">
                        <video autoPlay loop>
                            <source src={perpetualMotion2} type="video/mp4"></source>
                            Sorry, your browser doesn't support videos.
                        </video>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="video-carousel">
                        <video autoPlay loop>
                            <source src={machine} type="video/mp4"></source>
                            Sorry, your browser doesn't support videos.
                        </video>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="video-carousel">
                        <video autoPlay loop>
                            <source src={artDeco} type="video/mp4"></source>
                            Sorry, your browser doesn't support videos.
                        </video>
                      </div>
                    </Carousel.Item>
                </Carousel>

                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
