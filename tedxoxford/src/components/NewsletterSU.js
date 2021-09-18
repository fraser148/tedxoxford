import React        from 'react';
import TEDtitle     from './TEDtitle.js';


class NewsletterSU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: "",
      FNAME: "",
      LNAME: "",
      MMERGE4: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name] : event.target.value
    });
  }

  render() {
    return (
      <div className="newsletter">
        <TEDtitle first={"THE"} second={"NEWSLETTER"}/>
        <div className="news-container">
          <div className="news-cont">
            <div className="newsletter-signup news">
              <div id="mc_embed_signup">
                <form action="https://tedxoxford.us20.list-manage.com/subscribe/post?u=1c1506dcfd6535699f56c2286&amp;id=50110a6d74" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                    {/*<div className="indicates-required"><span className="asterisk">*</span> indicates required</div>*/}
                    <div className="mc-field-group">
                      {/* <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span> 
                      </label>*/}
                      <input
                        type="email"
                        value={this.state.EMAIL}
                        name="EMAIL" className="required email" id="mce-EMAIL"
                        onChange={this.handleInputChange}
                        placeholder="Email"
                      />
                    </div>
                    <div className="mc-field-group">
                      {/*<label for="mce-FNAME">First Name </label> */}
                      <input
                        type="text"
                        value={this.state.FNAME}
                        name="FNAME" className="" id="mce-FNAME"
                        onChange={this.handleInputChange}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mc-field-group">
                      {/*<label for="mce-LNAME">Last Name </label>*/}
                      <input
                        type="text"
                        value={this.state.LNAME}
                        name="LNAME" className="" id="mce-LNAME"
                        onChange={this.handleInputChange}
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="mc-field-group">
                        {/*<label for="mce-MMERGE3">University  <span className="asterisk">*</span>
                        </label>*/}
                        <select name="MMERGE3" className="required" id="mce-MMERGE3">
                        <option value="">Choose University</option>
                        <option value="University of Oxford">University of Oxford</option>
                        <option value="Oxford Brookes University">Oxford Brookes University</option>
                        <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mc-field-group">
                        {/*<label for="mce-MMERGE4">If you marked other,  please specify here: </label>*/}
                        <input
                          type="text"
                          value={this.state.MMERGE4}
                          name="MMERGE4" className="" id="mce-MMERGE4"
                          onChange={this.handleInputChange}
                          placeholder="If other"
                          />
                    </div>
                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                        <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                    </div>  
                    <div style={{display: "none", position: "absolute", left: "-5000px;"}} aria-hidden="true"><input type="text" name="b_1c1506dcfd6535699f56c2286_50110a6d74" tabindex="-1" value=""/></div>
                    <div className="clear"><input type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="news-cont">
            <div className="newsletter-content news">
              <p>
                Subscribe to our newsletter for the
                latest updates on our events plus
                lots more interesting opportunities
                and content
              </p>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
  
export default NewsletterSU;
  