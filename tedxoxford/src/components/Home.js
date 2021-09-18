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
            TEDxOxford is brought to you by a passionate
            group of university students who believe in
            TED's core mission of bringing ideas worth
            spreading to local communities and global
            audiences. Our team is dedicated to providing
            a platform that boasts a diverse, inclusive
            and innovative selection of talks that reflects
            an ever-evolving intellectual landscape.
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
              date={"July 4, 5pm GMT"}
              title={"Our next event"}
              details={"At our next exciting event, you are bound to be interested!"}
              location={"Oxford Playhouse"}
              origin={"University of Oxford"}
              person={"John Smith"}
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
  