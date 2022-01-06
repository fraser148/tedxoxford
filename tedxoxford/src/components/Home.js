import React        from 'react';
import Header       from './Header.js';
import Event        from './Event.js';
import TEDtitle     from './TEDtitle.js';
import Talks        from './Talks.js';
import NewsletterSU from './NewsletterSU.js';
import Footer       from './Footer.js';
import { Parallax } from 'react-parallax';
import { Container, Row, Col }   from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderIMG = () => (
  <Parallax blur={2} className="paral" bgImage="https://media-exp1.licdn.com/dms/image/C4D1BAQGRCL25mnKg7g/company-background_10000/0/1519798430700?e=2159024400&v=beta&t=yhScNxZXfaHO-eXQqzpIGWNRVeVJA77np3n587d7z4o" bgImageAlt="the cat" strength={200}>
      <div className="paral-inner">
        <img src={"./logo-final.png"} alt="logo"/>
        <p className="event-deet"><b>Next Event:</b> 29th Jan 2022</p>
        <p className="event-deet"><b>Location:</b> Oxford Town Hall</p>
        <Link className="tickets" to="/speaker">SPEAKER LINEUP</Link>
      </div>
  </Parallax>
);

const Intro = () => {
  return (
    <Container className='intro'>
      <Row className="align-items-center">
        <Col sm={{span: 12, offset:0}} md={{ span: 8, offset: 2 }} className="content">
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

        {/* <Col sm={12} md={5} className="artwork">
          <img src={"./logo-final.png"} alt='Filler artwork'/>
        </Col> */}
      </Row>

    </Container>
  );
};

const Details = () => {
  return (
    <Container className="detail-home">
      <Row>
        <Col lg={6} className="content">
          <TEDtitle first={"THE"} second={"CONFERENCE"} />
          <p>
          The conference is an event featuring high-profile speakers from all across the globe as they tell their stories of "Beyond Frontiers". From founders of space technology companies to individuals who've escaped North Korea, check out our seperate speaker announcement posts on our page for more information about all our speakers.
          </p>
        </Col>
        <Col lg={6} className="content">
          <TEDtitle first={"THE"} second={"DINNER"} />
          <p>
          Held in Oriel College, Oxford, the black tie dinner will be attended by both the TEDxOxford Committee and the wonderful speakers which you will have seen throughout the day. It will provide a great opportunity to ask further questions and chat with the speakers and committee alike, as well as enjoy an incredible atmosphere and a 3-course meal in one of Oxford’s most beautiful dining halls.
          <br/><br/>
          Before the black tie dinner, there will be a champagne reception. This will provide an opportunity to chat with all the speakers and attendees alike, whereas during the meal, the speakers will be interspersed amongst the attendees and will rotate positions, providing an opportunity to have more in-depth conversations.
          <br/><br/>
          As such, the dinner is sure to allow you to connect with like-minded individuals, get to know the speakers more and enjoy an amazing evening experience after what promises to be a fantastic conference throughout the day.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

class Home extends React.Component {

    render() {
      return (
        <div>
          <div className="main-container">
            <Header />
          </div>
          <HeaderIMG/>
          <div className="main-container">
            <Intro />
          </div>
          
            <Details />
            <div className="main-container">
            {/* <Event
              image={"/gandds.jpg"}
              date={"Oct 23, 3pm BST"}
              title={"G&D's Ice-cream"}
              details={"Come get FREE ice-cream at G&Ds and find out more about this year’s conference and how you can get involved!"}
              location={"G&D's"}
              origin={"St Aldates"}
              person={"Oxford"}
            /> */}
          </div>
          <Talks/>
          <NewsletterSU />
          <Footer />
        </div>
      );
    }
  }
  
  export default Home;
  