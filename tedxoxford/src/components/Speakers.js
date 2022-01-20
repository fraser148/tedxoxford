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
                                <h1>Speakers for TEDxOxford 2022 Conference</h1>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Emily-Luo.jpg"} alt="Emily Luo"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Emily Luo</h1>
                                <p>
                                Emily Luo was born and raised in Denmark, now studying English at
                                Exeter College, Oxford. Her talk is dedicated to her parents who
                                came to Denmark in the 1990s. They each grew up in poverty,
                                her mom during the Chinese cultural revolution and her dad during
                                the Iranian revolution. Emily will speak about the life lessons
                                they have taught her, and how their hardships have changed the
                                way she approaches life for the better.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Mark-Bissell.jpeg"} alt="Mark Bissell"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Mark Bissell</h1>
                                <p>
                                It's getting harder to innovate. In every field of study, the
                                frontier of knowledge is as far out as it's even been. With the
                                low-hanging fruit already picked, innovators are finding it more
                                and more burdensome to reach this frontier and push it further.
                                In this talk, Mark explores the implications of the expanding knowledge
                                frontier and explains why there is reason to be hopeful: there are
                                many unexploited opportunities for humanity to study and improve our
                                ability to systematically create progress.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Shubham-Saraff.jpeg"} alt="Shubham Saraff"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Shubham Saraff</h1>
                                <p>
                                A Tech Entrepreneur, Researcher and Advisor - Shubham is a founder of two
                                Startups, an AI based Therapeutics Platform and the other a Women Safety
                                ecosystem based on crime analytics. He won the IET Global award for his
                                unique research on Mirror Neurons therapy for Stuttering. He is a Tech-advisor
                                to CIOs of  VC funds and CEOs of leading companies, on Future ready Technologies.
                                He has been a TEDx speaker on Artificial Intelligence and at TEDxOxford, he
                                shall be speaking about why Industry leaders must increase the quotient of
                                Collective Human Connectedness with a Human Centric approach in all their
                                NxtGen Product designs, while navigating the Hi-Tech maze.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Danielle-Brown.jpg"} alt="Danielle Brown"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Be Your Best Self</h1>
                                <p>
                                Be Your Best Self is a speaking duo made up of Paralympic gold
                                medallist Danielle Brown and 11-year-old neurodiverse multi-medallist
                                in Jiu-jitsu Nathan Kai.<br/>
                                Danielle is a double Paralympic gold medallist, five times World
                                Champion and the first disabled person to represent England at the
                                Commonwealth Games (and win gold) as an able-bodied athlete. Nathan
                                joined MENSA in 2016, is a Grade 5 pianist, and at the age of 7 began
                                writing Be Your Best Self. In 2017, he became the World's Youngest
                                Self-Development Author for his book Be Your Best Self: Life Skills
                                for Unstoppable Kids.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Russ-Tucker.jpg"} alt="Russ Tucker"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Russ Tucker</h1>
                                <p>
                                Russ is the son of a butcher. His family has a long history of
                                rearing animals and selling meat in the UK. Although you won’t
                                find him behind a counter with a cleaver, he still thinks of
                                himself as following in his family’s footsteps with Ivy Farm
                                Technologies, a food tech company creating the future of meat.
                                Russ is an engineer, having studied at Loughborough University
                                before completing a PhD in biomedical engineering at Oxford
                                University. 
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Jason-Bevan.jpg"} alt="Jason Bevan"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Jason Bevan</h1>
                                <p>
                                Jason was responsible for the innovation and creativity process
                                at Warner Bros. Studios, marketing legendary movies in EMEA
                                from the Harry Potter/Fantastic Beasts Films and The Dark Knight
                                trilogy to the Lego Movies; generating ideas that were often used
                                globally, and pervading international culture.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Jihyun-Park.jpg"} alt="Ji Hyun Park"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Ji Hyun Park</h1>
                                <p>
                                Ji Hyun Park is an exiled North Korean living in the UK. A
                                survivor of forced marriage and human trafficking. Jihyun has
                                twice escaped from North Korea, where she endured imprisonment
                                in gulags and many near-death experiences. Today, she raises
                                awareness of the plight of North Korean women and the crimes
                                against community committed in North Korea, a job which brings
                                her into danger every day.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Anja-Meinhardt-using.jpg"} alt="Anja Meinhardt"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Anja Meinhardt</h1>
                                <p>
                                Justice in Motion is a physical theatre company which uses
                                performances to address social inequalities. Informed by research
                                and incorporating real stories, their shows have covered topics
                                like the experience of immigrant women, the multidimensional
                                layers of poverty, and forced labour in the construction industry.
                                This talk will be given by founder and spokesperson Anja Meinhardt.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Julia-Ebner.jpg"} alt="Julia Ebner"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Julia Ebner</h1>
                                <p>
                                Julia Ebner is a researcher specialising in far-right extremism,
                                radicalisation, and terrorism prevention. She has worked at
                                think tanks like Quilliam and the Institute of Strategic
                                Dialogue, and advised parliamentary working groups, security
                                agencies and tech companies. She is also a prolific writer for
                                The Guardian, The Independent, The Washington Post and other
                                outlets.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Ash-Dove-Jay.jpg"} alt="Ash Dove-Jay"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Ash Dove-Jay</h1>
                                <p>
                                Ash Dove-Jay is the founder and CEO of a space technology
                                company, Orbital Astronautics. He has a PhD in Aerospace
                                Engineering, builds cutting-edge spacecraft, and has led
                                various Mars-focused NASA and ESA analogue astronaut missions
                                in high-altitude deserts.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Maya-Foa.jpg"} alt="Maya Foa"/>
                                <div className="shadow-overlay"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col details">
                            <div className="speaker-details">
                                <h1>Maya Foa</h1>
                                <p>
                                Maya Foa leads a team of lawyers fighting against grave
                                human rights abuses. Reprieve saves the lives of people on
                                death rows around the world and secures justice for the
                                victims of torture, rendition, extrajudicial imprisonment
                                and unlawful drone strikes.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={9} lg={8} xl={6} className="speakers-col img">
                            <div className="speaker-img">
                                <img src={"/speakers/Stephen-Venables.jpg"} alt="Stephen Venables"/>
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
  