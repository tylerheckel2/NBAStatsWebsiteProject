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
                <br></br>
                <h1 class="display-3">NBA Stats Tracker</h1>
                <p class="lead">On our website we track NBA Statistics weekly.</p>
                <hr class="my-2">
                </hr>
                <p>Our page will update at the beginning of every week.</p>
                <p>Page created by Tyler Heckel, Colin Hegarty, and Brendan Quigley.</p>
                {/* <p class="lead">
                  <a class="btn btn-primary btn-lg" href="https://nba.com" role="button">NBA.com</a>
                </p> */}
              </div>
            </a>
            <div>
              <br></br>
              <br></br>
              <button class="button" onClick = {routeChange}>Points</button>
              <button class="button" onClick = {reboundsRouteChange}>Rebounds</button>
              <button class="button" onClick = {assistsRouteChange}>Assists</button>
            </div>
            <div>
              <br></br>
              <br></br>
              <h1>Key Matchups for the Upcoming Week</h1>
              <p>Week of December 4, 2023</p>
            </div>

            <table>
              <tr>
                <th>12/4 - Boston Celtics vs. Indiana Pacers - (IST East Quarterfinal) <img class="card-img-top" src="istlogo.jpg" width = "5%" alt="Photo of the IST"/></th>
              </tr>
              <tr>
                <th>12/4 - New Orleans Pelicans vs. Sacramento Kings - (IST West Quarterfinal)  <img class="card-img-top" src="istlogo.jpg" width = "5%" alt="Photo of the IST"/></th> 
              </tr>
              <tr>
                <th>12/5 - New York Knicks vs. Milwaukee Bucks - (IST East Quarterfinal)  <img class="card-img-top" src="istlogo.jpg" width = "5%" alt="Photo of the IST"/></th>
              </tr>
              <tr>
                <th>12/5 - Phoenix Suns vs. Los Angeles Lakers - (IST West Quarterfinal)  <img class="card-img-top" src="istlogo.jpg" width = "5%" alt="Photo of the IST"/></th>
              </tr>
              <tr>
                <th>12/6 - Los Angeles Clippers vs. Denver Nuggets - (ESPN Game)  <img class="card-img-top" src="espn.jpg" width = "5%" alt="Photo of the ESPN Logo"/></th>
              </tr>
              <tr>
                <th>12/7 - Winner of BOS/IND vs Winner of NYK/MKE - (IST East Semifinal)  <img class="card-img-top" src="istlogo.jpg" width = "5%" alt="Photo of the IST"/></th>
              </tr>
              <tr>
                <th>12/7 - Winner of NOLA/SAC vs Winner of PHX/LAL - (IST West Semifinal)  <img class="card-img-top" src="istlogo.jpg" width = "5%" alt="Photo of the IST"/></th>
              </tr>
              <tr>
                <th>12/8 - Los Angeles Clippers vs. Utah Jazz - (ESPN Game)  <img class="card-img-top" src="espn.jpg" width = "5%" alt="Photo of the ESPN Logo"/></th>
              </tr>
              <tr>
                <th>12/9 - IST Championship Game - Teams TBD <img class="card-img-top" src="istlogo.jpg" width = "5%" alt="Photo of the IST"/> </th>
              </tr>
              <br></br>
            </table>
            
            <div>
              <p></p>
              <img class="card-img-top" src="IST.png" width = "70%" alt="Photo of the IST Bracket"/>
              <p></p>
              <br></br>
              <h1>What is the In Season Tournament?</h1>
              <p>Newly approved for the 2023-24 NBA season, the In Season Tournament is a competitive addition to the league.</p>
              <p>The tournament begins with a group stage, where teams battle for their place in the Quarterfinal round.</p>
              <p>After the group stage, the remaining teams play single elimination games to make their way through the bracket.</p>
              <p>The winner of the tournament receives special IST trophies and 500k per player.</p>
              <br></br>
              <br></br>
            </div>
                
          </header>
        </div>
      );
}
export default HomeScreen;