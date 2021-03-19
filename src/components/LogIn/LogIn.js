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
    const googleprovider = new firebase.auth.GoogleAuthProvider();

    const [newuser,setNewUser] =useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
     
      email: '',
      photoURL: '',
      password: '',
      name: '',
      error: '',
      success:false
  
    })
    const handleSignIn = () => {

        firebase.auth()
          .signInWithPopup(googleprovider)
          .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
              isSignedIn: true,
              email: email,
              photoURL: photoURL,
              name: displayName
            }
            setUser(signedInUser);
            setloggedInUser(signedInUser);
            // history.replace(from);
           
          })
    
          .catch(error => {
            console.log(error);
            console.log(error.message)
          })
    
      }

      const handleSignOut=() => {
        firebase.auth().signOut()
        .then( res=> {
    
          const signedOutUser = {
            isSignedIn: false,
            email: '',
            photoURL: '',
            name: ''
          }
         setUser(signedOutUser);
        })
        .catch(error =>
        {
          console.log(error);
        })
    
      }
      const handleBlur=(event) => {
        let isfieldValid=true;
        if(event.target.name === 'email'){
          isfieldValid=/\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === 'password'){
          isfieldValid=event.target.value.length > 6 && /\d{1}/.test(event.target.value);
        }
        if(isfieldValid)
        {
        const newUserInfo = {...user};
        newUserInfo[event.target.name]=event.target.value;
        setUser(newUserInfo);
        
        
        }
      }
      const handleSubmit =(event) => {
   
        if( newuser && user.email && user.password){
          firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
          .then(res => {
            const newUserInfo = {...user};
            newUserInfo.error='';
            newUserInfo.success=true;
           setUser(newUserInfo);
           updateUserName(user.name);
           setloggedInUser(newUserInfo);
           history.replace(from)
          })
          .catch((error) => {
            const newUserInfo = {...user};
            newUserInfo.error=error.message;
            newUserInfo.success=false;
           setUser(newUserInfo);
          });
        }
        if(!newuser && user.email && user.password)
        {
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            const newUserInfo = {...user};
            newUserInfo.error='';
            newUserInfo.success=true;
           setUser(newUserInfo);
           setloggedInUser(newUserInfo);
           history.replace(from);
          
          
          })
          .catch((error) => {
            const newUserInfo = {...user};
            newUserInfo.error=error.message;
            newUserInfo.success=false;
           setUser(newUserInfo);
          });
        }
    
        event.preventDefault();
    
      }
      const updateUserName =name =>{
        const user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name
        }).then(function() {
         console.log('success added name')
        }).catch(function(error) {
         console.log(error)
        });
    
      }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    return (

        <div className="App">
   
     <input type="checkbox" onChange={()=> setNewUser(!newuser)}   name="newUser" id=""/>
    <label htmlFor="newUser">New User Registration</label>

    <form onSubmit={handleSubmit} className="form-design">
    {
      newuser && <input type="text"   onBlur={handleBlur}  name="name" placeholder="Name" required/>
    }
      <br/>
    <input type="text" onBlur={handleBlur}  placeholder="Email" name="email" required/>
     <br/>
     <input type="password" onBlur={handleBlur} name="password" placeholder="password" required/>
     <br/>
     <input className="submitBtn" type="submit" value={newuser ? 'sign up':'sign in'}/>
    
    </form>

            <div class="d-flex justify-content-center">
                <p style={{borderBottom:'1px solid grey',width:'100px'}}>Or</p>
            </div>


            <div class="d-flex justify-content-center googlebtn">
            {
                user.isSignedIn ? <button onClick={handleSignOut}> Sign Out</button> :
                <button onClick={handleSignIn}>Sign In with Google</button>
           }
            </div>

            <h1 style={{color: 'red'}}>{user.error}</h1>
    {
        user.success && <h1 style={{color: 'green'}}>User {newuser ? 'Created': 'logged in'} successfully. </h1>
    }
     
   <div>
   {
      

      user.isSignedIn &&  <div> <p>Welcome {user.name}</p>
      <p>your Email:{user.email}</p>
       <img style ={{width:'100px'}}src={user.photoURL} alt="" srcset=""/>
       </div>

  }
   </div>

        </div>
    );
};

export default LogIn;




