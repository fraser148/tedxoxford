import React        from 'react';
import TEDtitle     from './TEDtitle.js';
import { Link }     from 'react-router-dom';

function YouTubeTN(props) {
    console.log(props);
    const element = "http://i3.ytimg.com/vi/" + props + "/maxresdefault.jpg";
    return element
}

class Talks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }

    render() {
      return (
        <div className="talks">
            <TEDtitle
                first={"OUR"}
                second={"TALKS"}
            />
            <div className="talks-list">
                <div className="talk-container">
                    <div className="talk" style={{ backgroundImage: `url(${YouTubeTN("h-rRgpPbR5w")})` }}>
                        <h2 className="name">ALAN WATKINS</h2>
                        <h2 className="title">Why you feel what you feel</h2>
                    </div>
                </div>
                <div className="talk-container">
                    <div className="talk" style={{ backgroundImage: `url(${YouTubeTN("e4PTvXtz4GM")})` }}>
                        <h2 className="name">ARTHUR BENJAMIN</h2>
                        <h2 className="title">Faster than a Calculator</h2>
                    </div>
                </div>
                <div className="talk-container">
                    <div className="talk" style={{ backgroundImage: `url(${YouTubeTN("atReK1tebCA")})` }}>
                        <h2 className="name">JULIA SHAW</h2>
                        <h2 className="title">Time to Rethink Evil</h2>
                    </div>
                </div>
            </div>
            <Link className='more' to='/'>VIEW MORE TALKS</Link>
        </div>
        
      );
    }
  }
  
  export default Talks;
  