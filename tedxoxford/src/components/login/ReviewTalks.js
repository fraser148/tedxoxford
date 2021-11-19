import React, { useState, useEffect } from 'react';
import firebase         from 'firebase'
import                       'firebase/auth';
import Login            from './Login'
import Applicants       from './Applicants'
import { checkUser }    from '../../services/user';


function ReviewTalks() {
    const [user, setUser] = useState(null);
    const [permissions, setPermissions] = useState(0)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
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

    console.log(user);

    return (
        <div>
            {user ? <Applicants user={user} permission={permissions} /> : <Login/>}
        </div>
    )
}

export default ReviewTalks;