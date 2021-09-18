import React        from 'react';
import Header       from './Header.js';
import LayeredWaves from './LayeredWaves.js'
import { Container, Row, Col }   from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


class Sponsors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: "",
        }
    };



    render() {
      return (
        <div>
            <div className="main-container">
                <Header />
            </div>
            <div className="sponsors-holder">
                <Container className="sponsors">
                    <div>
                        <Row className="">
                            <Col sm={12} className="sponsors-header">
                                <h1>
                                    Sponsors
                                </h1>
                            </Col>
                            <Col sm={12} className="sponsors-content">
                                <h2 className="need-sponsors">
                                    We are currently seeking sponsors for our TEDxOxford 2022 Event. Please contact out sponsorship team for more information!
                                </h2>
                                <a href={"mailto:sponsorship@tedxoxford.co.uk"} className="sponsor-button">BECOME A SPONSOR</a>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <LayeredWaves/>
        </div>
        
      );
    }
  }
  
  export default Sponsors;
  