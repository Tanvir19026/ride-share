import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const style={
        padding:'15px',margin:'10px',textDecoration:'none',fontSize:'20px',color:'black'
    }
    return (
        <div>
               <div className="header container d-flex">
               <h1><strong>City Riders</strong></h1>
               <p style={{marginTop:'3%',marginLeft:'5%',color:'red'}}>{loggedInUser.email}</p>

                <div className="container">
                <div className="justify-content-end nav">
                    <Link style={style} to="/home">Home</Link>
                    <Link  style={style}to="/Destination">Destination</Link>
                    <Link style={style}to="/home">Contact</Link>
                    <Link style={style}to="/home">Blog</Link>
                    <Link style={style}to="/LogIn">LogIn</Link>
                    <button style={{height:'50%',marginTop:'3%',backgroundColor:'tomato'}}onClick={()=>setloggedInUser({})}>Sign out</button>
                    
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;