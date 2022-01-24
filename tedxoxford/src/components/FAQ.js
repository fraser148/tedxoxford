import React                    from 'react';
import Accordion                from './Accordion';
import Header                   from './Header';
import LayeredWaves             from './LayeredWaves.js'
import { Container, Row, Col }  from 'react-bootstrap';
import { accordionData }        from './utils/content';
import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {

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
                            <h1>Conference FAQ</h1>
                                <div className="accordion">
                                    {accordionData.map(({title,content}) => (
                                        <Accordion title={title} content={content}/>
                                    ))}
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

export default FAQ;