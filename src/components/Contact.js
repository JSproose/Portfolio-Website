import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import 'animate.css';

export const Contact = () => {

  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});


  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = emailjs.sendForm('service_c6ksrfk', 'template_kjo9tld', form.current, 'GhNX1rqfyoQ4HQyOa');


    setButtonText("Sending...");

    response.then((response) => {
      e.target.reset();
      setStatus({message: response.text, success: true});
      setTimeout(() => {
        setButtonText("Send");
      }, 3000);
      setButtonText("Message sent");
    }, (error) => {
      setStatus({message: error.text, success: false});
      setTimeout(() => {
        setButtonText("Send");
      }, 3000);
      setButtonText("Message failed");
    });






  };

  return (
    <section className="blurred contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          </Col>
          <Col size={12} md={6}>
                <div>
                <h2>Say Hi</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="first_name"  placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="last_name" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email"  placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="tel" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message" ></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.success === false &&
                      <Col>
                        <p className="danger">{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
