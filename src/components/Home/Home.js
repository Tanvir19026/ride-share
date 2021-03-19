import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../../fakeData/Data.json';
import SearchPage from '../SearchPage/SearchPage';
import backgroundImage from '../../Bg.png';

import { Nav } from 'react-bootstrap';
import './Home.css'


const Home = () => {
    const [vehicles, setvehicle] = useState([]);

    useEffect(() => {

        setvehicle(Data);
        console.log(Data);

    }, [])
    const style={
        padding:'15px',margin:'10px',textDecoration:'none',fontSize:'20px',color:'black'
    }

    return (

        <div className="bcImage col-md-12 container" style={{ height: '800px', width: '100%' }} >

            <div className="header container d-flex">
               <h1><strong>City Riders</strong></h1>
               

                <div className="container">
                <div className="justify-content-end nav">
                    <Link style={style} to="/home">Home</Link>
                    <Link  style={style}to="/Destination">Destination</Link>
                    <Link style={style}to="/home">Contact</Link>
                    <Link style={style}to="/home">Blog</Link>
                    <Link style={style}to="/LogIn">LogIn</Link>
                    </div>
                </div>

            </div>

            <div className="row">
                {
                    vehicles.map(vehicle => <SearchPage vehicle={vehicle}></SearchPage>)
                }
            </div>

        </div>

    );
};
export default Home























