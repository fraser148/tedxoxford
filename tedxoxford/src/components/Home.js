import React        from 'react';
import Header       from './Header.js';
import Event        from './Event.js';
import eventimg     from './../images/person.png';
import Talks        from './Talks.js';
import NewsletterSU from './NewsletterSU.js';
import Footer       from './Footer.js';
import { Container, Row, Col }   from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const Intro = () => {
  return (
    <Container className='intro'>
      <Row className="align-items-center">
        <Col sm={12} md={7} className="content">
          <h1>Beyond Frontiers</h1>
          <p>
            Our theme this year, “BEYOND FRONTIERS”, was
            chosen precisely because of its multiplicity.
            A frontier means many things: a physical boundary
            between places and planets; a frontline of human
            knowledge where breakthroughs are being made;
            or a division of a more abstract kind, between
            individuals, ideologies, and political systems.
            Our speakers this year will explore these
            possibilities and more. Through talks which probe
            our world's physical and figurative limits, TED
            aims to cross boundaries and connect disciplines.
            TEDxOxford 2022: join the conversation.
          </p>
        </Col>
        <Col sm={12} md={5} className="artwork">
          <img src={"./logo-final.png"} alt='Filler artwork'/>
        </Col>
      </Row>

    </Container>
  );
};

class Home extends React.Component {

    render() {
      return (
        <div>
          <div className="main-container">
            <Header />
            <Intro />
            <Event
              image={eventimg}
              date={"Oct 23, 1pm GMT"}
              title={"G&D's Ice-cream"}
              details={"Come get FREE ice-cream at G&Ds and find out more about this year’s conference and how you can get involved!"}
              location={"G&D's"}
              origin={"St Aldates"}
              person={"Oxford"}
            />
          </div>
          <Talks/>
          <NewsletterSU />
          <Footer />
        </div>
      );
    }
  }
  
  export default Home;
  