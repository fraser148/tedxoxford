import React from 'react';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }

    render() {
      return (
        <div className="eventHolder">
          <div className="event" style={{ backgroundImage: `url(${this.props.image})` }}>
            <div class="event-image"></div>
            <div className="event-content">
              <h3 className="date">{this.props.date}</h3>
              <h1 className="title">{this.props.title}</h1>
              <p className="details">{this.props.details}</p>
              <p className="location">{this.props.location}</p>
              <p className="origin">{this.props.origin}</p>
              <p className="person">{this.props.person}</p>
              <span className="find-more-btn">Find out more</span>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Event;
  