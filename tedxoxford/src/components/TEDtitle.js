import React from 'react';

class TEDtitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }

    render() {
      return (
        <div className="ted-title">
            <div className="title-container">
                <div className="first-word"><h1>{this.props.first}</h1></div>
                <div className="second-word"><h1>{this.props.second}</h1></div>
            </div>
        </div>
      );
    }
  }
  
  export default TEDtitle;
  