import React                    from 'react';
import Accordion                from './Accordion';
import Header                   from './Header';
import LayeredWaves             from './LayeredWaves.js'
import { Container, Row, Col }  from 'react-bootstrap';
import { RefundContent }        from './utils/content';
import "bootstrap/dist/css/bootstrap.min.css";

const RefundPolicy = () => {

    return (
        <div>
            <div className="main-container">
                <Header />
            </div>
            <div className="committee-holder">
                <Container className="committee">
                    <div>
                        <Row className="">
                            <Col sm={12} className="committee-header">
                            <h1>Refund Policy</h1>
                                <div className="general">
                                    <h2>Conference Tickets</h2>
                                    <p>
                                        Customers with tickets only to the conference will be offered a full refund if requested up to 72 hours before the event. After this, we cannot offer a refund.
                                    </p>
                                    <h2>Dinner + Conference Tickets</h2>
                                    <p>
                                        Customers with "Dinner + Conference" tickets cannot be refunded after Monday 17th January 2022. This is due to the the seating plan and catering order having been finalised.
                                    </p>
                                    <h2>Covid-19 Exemptions</h2>
                                    <p>
                                    If, under change of government restrictions, the event cannot take place physically, we will move the conference online and refund your payments in full. We will be releasing our newest information about the conference on our Facebook and Instagram pages, so be sure to follow them for updates.
                                    </p>
                                    <hr/>
                                    
                                    <p>For more information please email <a href="mailto:contact@tedxoxford.co.uk">contact@tedxoxford.co.uk</a></p>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <LayeredWaves/>
        </div>
    )
}

export default RefundPolicy;