import React, { useState }                    from 'react';
import Header                   from './Header';
import LayeredWaves             from './LayeredWaves.js'
import { Container, Row, Col }  from 'react-bootstrap';
import { lineup }               from './utils/content';
import "bootstrap/dist/css/bootstrap.min.css";

const Formatting = ({type, title, time, speaker, image, description}) => {
    const [isActive, setActive] = useState(false);

    if (type === "talk") {
        return (
            <>
                <div className="schedule-item speaker-hover" onClick={() => setActive(!isActive)}>
                    <div className="time">{time}</div>
                    <div className="details">
                        <div className="speaker">{speaker}</div>
                        <div className="title talker">{title}</div>
                        {isActive && <div className="speaker-content">
                            <Container>
                                <Row>
                                    <Col md={6} xs={12} className="speaker-col">
                                    <div className="speaker-img"><img src={image} alt={speaker}/></div>
                                    </Col>
                                    <Col md={6} xs={12} className="speaker-col">
                                    <div className="speaker-desc">{description}</div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>}
                    </div>
                    
                </div>
            </>

        )
    } else {
        return (
            <>
                <div className="schedule-item">
                    <div className="time">{time}</div>
                    <div className="details">
                        <div className="speaker">{speaker}</div>
                        <div className="title eventer">{title}</div>
                    </div>
                </div>
            </>
            
        )
    }
}

const Schedule = () => {

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
                            <h1>Conference Schedule</h1>
                                <div className="schedule">
                                    {lineup.map(({time, title, speaker, type, image, description}) => (
                                        <Formatting
                                            time={time}
                                            title={title}
                                            speaker={speaker}
                                            type={type}
                                            image={image}
                                            description={description}
                                        />
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

export default Schedule;