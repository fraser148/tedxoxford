import React, { useState, useEffect }   from 'react';
import { useParams }                    from 'react-router-dom';
import { checkUser,getApplicant }       from '../../services/user';
import { storage }                      from '../../services/firebase'
import { onAuthStateChanged }           from "firebase/auth";
import { auth }                         from "../../services/firebase";
import moment                           from 'moment'

function Uni(uni) {
    if (uni === "oxford") {
        return "University of Oxford"
    } else {
        return "Oxford Brookes University"
    }
}

const Profile = ({ id }) => {
    const [applicant, setApplicant] = useState();
    const [loading, setLoading] = useState(true);
    const [uid, setUid] = useState(id);
    const [download, setDownload] = useState(null);

    // Create a reference under which you want to list
    const listRef = storage.ref('speaker-vids');


    useEffect(() => {
        let mounted = true;
        getApplicant(uid)
            .then(applicant => {
                if (mounted) {
                    setApplicant(applicant.data[0])
                    setLoading(false);
                    listRef.listAll()
                    .then((res) => {
                        let urls = [];
                        res.items.forEach( item => urls.push(item.name));
                        var index
                        urls.forEach(function (item, i) {
                            if (item.includes(uid)) {
                                index = i
                            }
                        });
                        res.items[index].getDownloadURL()
                        .then((path) => {
                            setDownload(path)
                        })
                    }).catch((error) => {
                        console.error("there has been an error")
                    });
                    
                }
            })
        return () => mounted = false;
    },[uid])

    if (loading) {
        return (
            <div>
                loading
            </div>
        )
    } else {
        return (
            <div className="applicant-page">
                <div className="basic-details">
                    <h2>{applicant.FirstName} {applicant.LastName}</h2>
                    <span className="uni">{Uni(applicant.University)}</span>
                    <span className="time">{moment(applicant.DateEntry).format('h:mma Do MMMM')}</span>
                    <a href={"mailto:"+applicant.Email}>Message</a>
                    <a className="video" href={download}>Watch Video</a>
                    <a href="../view-applicants">All Applicants</a>
                </div>
                <div className="answers">
                    <h3>Why would you like to apply?:</h3>
                    <p>{applicant.Why}</p>
                    <h3>What idea would you like to share?:</h3>
                    <p>{applicant.Idea}</p>
                </div>
            </div>
        )
    }
}

function Applicant() {

    const [user, setUser] = useState(null);
    const [permissions, setPermissions] = useState(0)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setPermissions(0);
            checkUser(user.uid)
                .then(data => {
                    console.log(data)
                    if (data.data.length > 0 ) {
                        console.log(data)
                        setPermissions(data.data[0]['permissions'])
                    }
                })
            })
        
        
    }, [])

    const { id } = useParams();
    console.log(id);
    
    return (
        <div className="applicants">
            {user ? <div><Profile id={id}/></div>: <p>hi</p> }
        </div>
        )
  
}

export default Applicant;