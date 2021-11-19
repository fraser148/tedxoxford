import React, { useState, useEffect } from 'react';
import { auth } from '../../services/firebase';
import { getApplicants } from '../../services/user'
import moment from 'moment'

function Allowed({user}) {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        let mounted = true;
        getApplicants()
            .then(applicants => {
                if (mounted) {
                    setApplicants(applicants.data)
                    console.log(applicants.data)
                }
            })
        return () => mounted = false;
    },[])

    return (
        <div>
            <div className="applicants">

              <h1>Review Applicants</h1>
              <h3>Welcome,  <span></span>{user.displayName}</h3>
              <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
                <div className="applicant-holder">
                        {applicants.map(item =>
                        <div className="applicant" key={item.id}>
                            <div className="details">
                                <h2 className="name"><a href={"mailto:"+item.Email}>{item.FirstName} {item.LastName}</a></h2>

                                <p className="uni">University: {item.University}</p>
                                <span>{moment(item.DateEntry).format('h:mma Do MMMM')}</span>
                            </div>
                            <div className="view">
                                <a href={"../applicant/" + item.id}>View Applicant {'>'}</a>
                            </div>
                        </div>
                        )}
                </div>
            </div>
            
        </div>
    )
}

const Applicants = ({ user, permission }) => {
    console.log(permission)
    if (permission > 0) {
        return <Allowed user={user}/>;
    } else {
        return (
            <div className="applicants">
              <h1>Hello, <span></span>{user.displayName}</h1>
              <img src={user.photoURL} alt="" />
              <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
            </div>
          )
    }
  
}

export default Applicants;