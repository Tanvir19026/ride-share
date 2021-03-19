import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import firebaseConfig from '../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './LogIn.css'

const LogIn = () => {

    
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({});

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    const Googleprovider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        firebase.auth()
            .signInWithPopup(Googleprovider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }

                setloggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage)
            });


    }




    return (

        <div>



            <div class="d-flex justify-content-center">

            </div>


            <div class="d-flex justify-content-center">
                <p>Or</p>
            </div>


            <div class="d-flex justify-content-center">

                <button className="googlebtn" onClick={handleGoogleSignIn}>Continue  with google</button>
            </div>



            <div class="d-flex justify-content-center">

            </div>

        </div>
    );
};

export default LogIn;
