import { Col, Modal, Carousel } from "react-bootstrap";
import { useState } from 'react';
import externalLink from "../assets/img/iconmonstr-external-link-thin.svg";
import externalLink1 from "../assets/img/icons8-external-link.png";




export const ProjectCard = ({ title, imgUrl, tags, description, github }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Col xs={12} sm={6}>


      <div onClick={handleShow} className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
        </div>
      </div>

    <Modal className="modal" show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel className="carousel">

            {description.map((item, index) => {
              
              return (
              <Carousel.Item key={index}>
                <div className="project-photos">
                  <img src={item}></img>
                </div>
              </Carousel.Item>
              )
            })}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
        
        <div>{tags.map((tag, index) => <span key={index} className="skill-tag">{tag}</span>)}</div>
        <a href={github} target='_blank'><img src={externalLink1}/></a>
        </Modal.Footer>
    </Modal>

    </Col>
  )
}

/*
*/