import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route }                 from 'react-router-dom';
import firebase           from 'firebase';
import Home               from './Home.js';
import Speakers           from './Speakers.js';
import TalksPage          from './TalksPage.js';
import Committee          from './Committee.js';
import About              from './About.js';
import Sponsors           from './Sponsors.js';
import StudentSpeakerApply           from './StudentSpeakerApply.js';
import './App.scss';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-201249248-1', {
  siteSpeedSampleRate: 100
});
ReactGA.pageview(window.location.pathname + window.location.search);

const config = {
  apiKey: "AIzaSyAfp3WVs-z_EjbTQHNn1tc4NgXiCHulHW0",
  authDomain: "tedxoxford-96eec.firebaseapp.com",
  projectId: "tedxoxford-96eec",
  storageBucket: "tedxoxford-96eec.appspot.com",
  messagingSenderId: "300122833533",
  appId: "1:300122833533:web:8f828d03513067bdfc2714",
  measurementId: "G-ZM02K8JDKJ"
};

firebase.initializeApp(config);

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/speaker" component={Speakers}/>
          <Route exact path="/talks" component={TalksPage}/>
          <Route exact path="/committee" component={Committee}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/sponsors" component={Sponsors}/>
          <Route exact path="/student-speaker-application" component={StudentSpeakerApply}/>
        </Switch>
      </Router>
    )
  }
}
export default App;