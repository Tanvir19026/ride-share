import React, { useContext, useEffect, useState } from 'react';

import Data from '../../fakeData/Data.json';
import SearchPage from '../SearchPage/SearchPage';
import backgroundImage from '../../Bg.png';


import './Home.css'
import { UserContext } from '../../App';


const Home = () => {
    const [vehicles, setvehicle] = useState([]);
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    useEffect(() => {

        setvehicle(Data);
        console.log(Data);

    }, [])
   

    return (

        <div className="bcImage col-md-12 container" style={{ height: '800px', width: '100%' }} >

         

            <div className="row">
                {
                    vehicles.map(vehicle => <SearchPage vehicle={vehicle}></SearchPage>)
                }
            </div>

        </div>

    );
};
export default Home























