import React from "react";
import {database} from './firebase'
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import PointsPage from "./points";
import ReboundsPage from "./rebounds";
import AssistsPage from "./assists";

function HomeScreen(){
    const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val, "val" )
            history('/')
        })
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/points`; 
        navigate(path);
    }

    const reboundsRouteChange = () =>{ 
        let path = `/rebounds`; 
        navigate(path);
    }

    const assistsRouteChange = () =>{
        let path = '/assists';
        navigate(path);
    }
 
    return (
        <div className="App">
          <header className="App-header">
          <head>
            <title> Brendan, Tyler, Colin's Project </title>
            <link rel="stylesheet" 
            //href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous"/>
          </head>
          
            <a>
              <div class="jumbotron">
                <h1 class="display-3">NBA Stats Tracker</h1>
                <p class="lead">On our website, we keep track of NBA Statistics by tracking players weekly.</p>
                <hr class="my-2">
                </hr>
                <p>Our page will update at the start of every week.</p>
                {/* <p class="lead">
                  <a class="btn btn-primary btn-lg" href="https://nba.com" role="button">NBA.com</a>
                </p> */}
              </div>
            </a>
            <div>
              <button class="button" onClick = {routeChange}>Points</button>
              <button class="button" onClick = {reboundsRouteChange}>Rebounds</button>
              <button class="button" onClick = {assistsRouteChange}>Assists</button>
            </div>
          </header>
        </div>
      );
}
export default HomeScreen;