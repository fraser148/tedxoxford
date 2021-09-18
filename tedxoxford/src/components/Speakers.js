import React        from 'react';
import Header       from './Header.js';
import { Container, Row, Col }   from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class Speakers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }

    render() {
      return (
        <div>
            <div className="main-container">
                <Header />
            </div>
            <div className="speakers-page">
                <Container className="container-speakers-top">
                    <Row className="heading align-items-center">
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Anja-Meinhardt-using.jpg"} alt="Anja Meinhardt"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>View all of our talks over the past 15 years.</h1>
                                <p>
                                Here we have compiled all of the previous TEDxOxford
                                talks. From Blah talking about blag
                                to them talking about this, Oxford have seen a huge number
                                of exceptional speakers. Browse all of our talks as well as
                                many more from around the world
                                on TED's Official&nbsp;
                                <a
                                    href="https://www.youtube.com/user/TEDtalksDirector"
                                    rel="noreferrer"
                                    target="_blank"
                                    alt="YouTube Link to TED Channel"
                                >
                                    YouTube Channel.
                                </a>
                            </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Stephen-Venables.jpg"} alt="Anja Meinhardt"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>View all of our talks over the past 15 years.</h1>
                                <p>
                                Here we have compiled all of the previous TEDxOxford
                                talks. From Blah talking about blag
                                to them talking about this, Oxford have seen a huge number
                                of exceptional speakers. Browse all of our talks as well as
                                many more from around the world
                                on TED's Official&nbsp;
                                <a
                                    href="https://www.youtube.com/user/TEDtalksDirector"
                                    rel="noreferrer"
                                    target="_blank"
                                    alt="YouTube Link to TED Channel"
                                >
                                    YouTube Channel.
                                </a>
                            </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Xa-Sturgis.jpg"} alt="Anja Meinhardt"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>View all of our talks over the past 15 years.</h1>
                                <p>
                                Here we have compiled all of the previous TEDxOxford
                                talks. From Blah talking about blag
                                to them talking about this, Oxford have seen a huge number
                                of exceptional speakers. Browse all of our talks as well as
                                many more from around the world
                                on TED's Official&nbsp;
                                <a
                                    href="https://www.youtube.com/user/TEDtalksDirector"
                                    rel="noreferrer"
                                    target="_blank"
                                    alt="YouTube Link to TED Channel"
                                >
                                    YouTube Channel.
                                </a>
                            </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Jihyun-Park.jpg"} alt="Anja Meinhardt"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Escaping North Korea</h1>
                                <p>
                                Here we have compiled all of the previous TEDxOxford
                                talks. From Blah talking about blag
                                to them talking about this, Oxford have seen a huge number
                                of exceptional speakers. Browse all of our talks as well as
                                many more from around the world
                                on TED's Official&nbsp;
                                <a
                                    href="https://www.youtube.com/user/TEDtalksDirector"
                                    rel="noreferrer"
                                    target="_blank"
                                    alt="YouTube Link to TED Channel"
                                >
                                    YouTube Channel.
                                </a>
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        
      );
    }
  }
  
  export default Speakers;
  