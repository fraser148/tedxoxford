import React        from 'react';
import Header       from './Header.js';
import { Container, Row, Col }   from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


class Committee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: "",
            profiles: []
        }
    };

    async componentDidMount() {
        try {
          let res = await fetch("http://api.tedxoxford.co.uk/getProfiles", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
          })
    
          let result = await res.json();
    
          if (result && result.success) {
            this.setState({
              profiles: result.data
            })
          }
          console.log(result)
        }
        catch (err) {
          console.log(err);
        }
      }

    render() {
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
                                <h1>
                                    Our 2022 Committee
                                </h1>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/pres.JPG" alt="Default"/><span className="name">{"Yuming Zai"}</span><span className="role">{"President"}</span></div></Col>
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/vice-pres.JPG" alt="Default"/><span className="name">{"Rory Welsh"}</span><span className="role">{"Vice President"}</span></div></Col>
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/treasurer.JPG" alt="Default"/><span className="name">{"Phoebe Simoes"}</span><span className="role">{"Treasurer"}</span></div></Col>
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/speaker.JPG" alt="Default"/><span className="name">{"Jennifer Zhou"}</span><span className="role">{"Head of Speakers"}</span></div></Col>
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/speaker1.JPG" alt="Default"/><span className="name">{"Aftab Chhina"}</span><span className="role">{"Speakers Officer 1"}</span></div></Col>
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/speaker2.JPG" alt="Default"/><span className="name">{"Crystal Sang"}</span><span className="role">{"Speakers Officer 2"}</span></div></Col>
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/marketing.jpg" alt="Default"/><span className="name">{"Eesha Bakht"}</span><span className="role">{"Head of Marketing"}</span></div></Col>
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/creative.JPG" alt="Default"/><span className="name">{"Anna Barnett"}</span><span className="role">{"Creative Officer"}</span></div></Col>
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/sponsors.jpg" alt="Default"/><span className="name">{"Saffron Pougher"}</span><span className="role">{"Sponsorship"}</span></div></Col>
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder"><div className="profile"><img src="./members/it.JPG" alt="Default"/><span className="name">{"Fraser Rennie"}</span><span className="role">{"IT Officer & Partnerships"}</span></div></Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
        
      );
    }
  }
  
  export default Committee;
  