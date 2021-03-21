import firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/LogIn/LogIn';
import Destination from './components/Destination/Destination';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from "./components/Header/Header";

export const UserContext=createContext();

function App() {
  const [loggedInUser,setloggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setloggedInUser]}>
      
     
    <Router>
      <Header></Header>
    <Switch>

    <Route exact  path="/home">
            <Home />
          </Route>

          <Route  path="/LogIn">
            <LogIn />
          </Route>

          <PrivateRoute  path="/Destination">
            <Destination></Destination>
          </PrivateRoute>
        

          <PrivateRoute  path="/Destination/:ticketType">
            <Destination></Destination>
          </PrivateRoute>


    <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

    </Switch>
    </Router>


    </UserContext.Provider>
  );
}

export default App;
