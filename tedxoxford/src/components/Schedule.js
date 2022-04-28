import React, { useState }                    from 'react';
import Header                   from './Header';
import LayeredWaves             from './LayeredWaves.js'
import { Container, Row, Col }  from 'react-bootstrap';
import { lineup, dinner }       from './utils/content';
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
                            <h1>Schedule</h1>
                                <div className="schedule">
                                    <h2>Conference</h2>
                                    <span className="note">Tap on each speaker for more information.</span>
                                    <a target="_blank" href="https://www.tedxoxford.com/Programme-TEDxOxford-Digital.pdf">Download the PDF here.</a>
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
                                    <hr/>
                                    <h2>Dinner</h2>
                                    {dinner.map(({time, title, speaker, type, image, description}) => (
                                        <Formatting
                                            time={time}
                                            title={title}
                                            speaker={speaker}
                                            type={type}
                                            image={image}
                                            description={description}
                                        />
                                    ))}
                                    <hr/>
                                    <h2>Dress Codes</h2>
                                    <span className="dress-code location">Conference</span>
                                    <span className="dress-code">Business casual or suits</span>
                                    <br></br>
                                    <span className="dress-code location">Dinner</span>
                                    <span className="dress-code">Black tie (no lounge suits)</span>
                                    <br/><br/>
                                    <span className="note">Note: places to change are available at Oxford Town Hall, however these are limited.</span>
                                    <hr/>
                                    <h2>Venues</h2>
                                    <Container>
                                        <Row>
                                            <Col md={6} sm={6} xs={12} className="addresses">
                                                <h4>Conference</h4>
                                                <div className="address">
                                                    <span>Oxford Town Hall</span>
                                                    <span>St Aldate's</span>
                                                    <span>OX1 1BX</span>
                                                    <a target="_blank" href="https://g.page/OxfordTownHall?share">Google Maps</a>
                                                </div>
                                            </Col>
                                            <Col md={6} sm={6} xs={12} className="addresses">
                                                <h4>Dinner</h4>
                                                <div className="address">
                                                    <span>Oriel College</span>
                                                    <span>Oxford</span>
                                                    <span>OX1 4EW</span>
                                                    <a target="_blank" href="https://goo.gl/maps/JomaZyni8f3o4UKz5">Google Maps</a>
                                                    <a target="_blank" href="https://www.tedxoxford.com/Map.pdf">Oriel College Map</a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <hr/>
                                    <h2>Getting There</h2>
                                    <span className="getting-there">
                                        Both venues are situated in central Oxford, a short walk from both Gloucester
                                        Green Bus Station and Oxford Train Station. There are also multiple Park and Ride
                                        services. For more details, visit <a target="_blank" href="https://www.oxfordtownhall.co.uk/contact-us/">Oxford Town Hall’s website</a>.
                                    </span>
                                    <span className="getting-there">Oriel College is a short walk from Oxford Town Hall.</span>
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