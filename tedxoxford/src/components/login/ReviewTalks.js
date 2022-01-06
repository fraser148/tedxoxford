import React, { useState, useEffect } from 'react';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import Login            from './Login'
import Applicants       from './Applicants'
// import { checkUser }    from '../../services/user';


function ReviewTalks() {
    const [user, setUser] = useState(null);
    // const [permissions, setPermissions] = useState(0)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            // setPermissions(0);
            // checkUser(user.uid)
            //     .then(data => {
            //         console.log(data)
            //         if (data.data.length > 0 ) {
            //             console.log(data)
            //             setPermissions(data.data[0]['permissions'])
            //         }
            //     })
            })
        
        
    }, [])

    console.log(user);

    return (
        <div>
            {user ? <Applicants user={user} /> : <Login/>}
        </div>
    )
}

export default ReviewTalks;