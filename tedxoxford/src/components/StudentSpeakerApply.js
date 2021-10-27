import React                    from "react";
import { useForm }              from "react-hook-form";
import Header                   from './Header.js';
import LayeredWaves             from './LayeredWaves.js'

import firebase from "firebase";
import FileUploader from 'react-firebase-file-uploader';
// import { Container, Row, Col }  from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


class StudentSpeakerApply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname:"",
            why:"",
            idea:"",
            email: "",
            avatar: "",
            uni:"",
            isUploading: false,
            progress: 0,
            avatarURL: "",
            id: makeid(6),
            message:"",
            submitted: false
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleChangeFname = event =>
      this.setState({ firstname: event.target.value });
    handleChangeLname = event =>
      this.setState({ lastname: event.target.value });
    handleChangeIdea = event =>
      this.setState({ idea: event.target.value });
    handleChangeWhy = event =>
      this.setState({ why: event.target.value });
    handleChangeEmail = event =>
      this.setState({ email: event.target.value });
    handleChangeUni = event =>
      this.setState({ uni: event.target.value });

    handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3001/postSubmission', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
            })
            .then((response) => response.json())
            .then((result) => {
            console.log(result)
        });
        this.setState({ firstname: "" });
        this.setState({ lastname: ""});
        this.setState({ idea: "" });
        this.setState({ why: "" });
        this.setState({ email: "" });
        this.setState({ uni: "" });
        this.setState({ message: "Thank you for your submission, we will update you about our decision soon!"})
        this.setState({ submitted: true})
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
      this.setState({ isUploading: false });
      console.error(error);
    };

    handleUploadSuccess = filename => {
      this.setState({ avatar: filename, progress: 100, isUploading: false });
      firebase
        .storage()
        .ref("speaker-vids")
        .child(filename)
        .getDownloadURL()
        .then(url => this.setState({ avatarURL: url }));
    };
   
    render() {
      return (
        <div>
            <div className="main-container">
            <Header />
            {this.state.submitted === false  && 
            <form className="student-apply" onSubmit={this.handleSubmit}>
                <p><span className="red-dot"></span>Field is required</p>

                <label>First Name:<span className="red-dot special"></span></label>
                <input required type="text" value={this.state.firstname} name="firstname" onChange={this.handleChangeFname}/>

                <label>Last Name:<span className="red-dot special"></span></label>
                <input required type="text" value={this.state.lastname} name="lastname" onChange={this.handleChangeLname}/>

                <label>University Email:<span className="red-dot special"></span></label>
                <input required type="email" value={this.state.email} name="email" onChange={this.handleChangeEmail}/>

                <label>University:<span className="red-dot special"></span></label>
                <select required value={this.state.uni} onChange={this.handleChangeUni}>
                    <option value="">Select University</option>
                    <option value="oxford">University of Oxford</option>
                    <option value="brookes">Oxford Brookes University</option>
                </select>

                <label>Why would you like to apply?:<span className="red-dot special"></span></label>
                <textarea required value={this.state.why} onChange={this.handleChangeWhy}/>

                <label>What idea would you like to share?:<span className="red-dot special"></span></label>
                <textarea required value={this.state.idea} onChange={this.handleChangeIdea}/>
                
                <label>Your Video:<span className="red-dot special"></span></label>
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                {this.state.avatarURL && <img src={this.state.avatarURL} />}
                <FileUploader
                accept="video/*"
                name="avatar"
                filename={this.state.firstname + "|" + this.state.email + "|" + this.state.id}
                storageRef={firebase.storage().ref("speaker-vids")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                />
                <input type="submit" value="Submit" />
                
            </form>
            }
            <div className="student-apply">
                <div className="positive-message">
                {this.state.message && <p> {this.state.message}</p>}
                </div>
                
            </div>
            
            
          </div>
          <LayeredWaves/>
        </div>
      );
    }
  }
   
  export default StudentSpeakerApply;