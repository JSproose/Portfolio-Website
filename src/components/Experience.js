import { Carousel, Container, Row, Col } from 'react-bootstrap';
import maxonImg from '../assets/img/maxon-one-banner.png';
import waterlooImg from '../assets/img/waterloo-floor-plan.pdf';


export const Experience = () => {
    return (
        <section className="blurred experience" id="experience">
            {/* <div id="projects-experience-divider"/> */}
            <Container fluid>
                <Row>
                    <Col>
                        <h2>EXPERIENCE</h2>
                        <Carousel id="experience-carousel" interval={null}>
                            <Carousel.Item>
                                <div className='experience-item'>
                                <h1>Software Developer</h1>
                                <h3>Maxon Computer | 09/2022 - 12/2022</h3>
                                <img src={maxonImg}/>
                                <ul>
                                    <li>Developed a C++ command line application for artists to package and migrate over 100 Capsules (3D models, textures, etc.) and help unify file formats across all Maxon products (Cinema 4D, Zbrush, etc.) for cloud integration.</li>
                                    <li>Built informed features that allow the user to add JSON metadata, asset dependencies, parent databases, and prune filtered versions, as well as created thorough unit tests using GoogleTest to ensure long-term code functionality.</li>
                                    <li>Improved a DLL API wrapper to store dependant asset versions and conform to programming standards outlined in my included Confluence spec documentation</li>
                                </ul>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='experience-item'>
                                <h1>Data Analyst</h1>
                                <h3>University of Waterloo | 01/2022 - 04/2022</h3>
                                <img src={waterlooImg}/>
                                <ul>
                                    <li>Automated the calculation and organization of necessary classroom space based on schedule data using Python
                                    (Pandas), saving the team a minimum of two hours with every data revision.</li>
                                    <li>Implemented Python code to automate the requesting, engineering, and visualization of JSON scheduling data from an
                                    API endpoint using the Request, Pandas, Numpy, and Matplotlib libraries.</li>
                                    <li>Designed and implemented a relational database schema in PowerBI to reduce data repetition by 50%.</li>
                                    <li>Developed and presented dynamic and meaningful data visualizations using PowerBI and Matplotlib to advise the Dean of Engineering on the construction of an additional engineering building</li>
                                </ul>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )


}