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
                        <Col sm={12} md={12} lg={12} xl={12} className="speakers-col img">
                            <div className="speaker-header">
                                <h1>Our Speakers</h1>
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
                                <h1>Stephen Venables</h1>
                                <p>
                                    Stephen Venables, mountaineer, writer, broadcaster
                                    and public speaker, was the first Briton to climb
                                    Everest without supplementary oxygen. He has appeared
                                    in documentaries for BBC, ITV, and National Geographic,
                                    presented for Radio 4, and featured in the IMAX movie
                                    Shackleton’s Antarctic Adventure. His first book,
                                    Painted Mountains, won the prestigious Boardman Tasker
                                    Prize for Mountain Literature. He is one of the best
                                    known mountaineers of his generation.
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
  