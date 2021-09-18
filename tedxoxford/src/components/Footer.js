import React        from 'react';
import { SocialIcon } from 'react-social-icons';
import TEDtitle     from './TEDtitle.js';

class Talks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }
    }

    render() {
      return (
        <div className="footer">
          <TEDtitle first={"FOLLOW"} second={"US"}/>
            <div className="widget socials">
                <SocialIcon className="social-icon" url="https://www.facebook.com/TEDxOxford" />
                <SocialIcon className="social-icon" url="https://www.instagram.com/tedxoxford/" />
            </div>
            <div className="footer-license">
              <span>This independent TEDx event is operated under license from TED</span>
            </div>
        </div>
        
      );
    }
  }
  
  export default Talks;
  