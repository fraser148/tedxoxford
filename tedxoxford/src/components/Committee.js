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
          let res = await fetch("https://www.api.tedxoxford.co.uk/getProfiles", {
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
                            {this.state.profiles.map((data, index) => (
                                <Col xs={12} sm={6} md={4} lg={3} xl={3} className="profile-holder">
                                    <div className="profile">
                                        <img src={"/members/"+data.image} alt="Default"/>
                                        <span className="name">{data.Name}</span>
                                        <span className="role">{data.Role}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
        
      );
    }
  }
  
  export default Committee;
  