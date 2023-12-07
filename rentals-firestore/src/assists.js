import React from "react";
import {database} from './firebase'
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";


function AssistsPage(){
    const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val, "val" )
            history('/')
        })
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/home`; 
        navigate(path);
    }

 
    return (
        <div className="App">
          <header className="App-header">
          <head>
            <title> Brendan, Tyler, Colin's Project </title>
            <link rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous"/>
          </head>

            <br></br>

            <div>
              <button class="button" onClick = {routeChange}>Home</button>
            </div>
            
            <br></br>

            <center>
            <div>
            <h1>Assists Per Game Leaders for the Week of 11/27/23:</h1>
            </div>

            <br></br>
            
            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="jokicpic.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">1. Nikola Jokic</h1>
                <h3>15.0 APG</h3>
                <h3>TOV: 3</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="luka.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">2. Luka Doncic</h1>
                <h3>13.5 APG</h3>
                <h3>TOV: 7</h3>
                <h3>Games Played: 2</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="young.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">3. Trae Young</h1>
                <h3>12.0 APG</h3>
                <h3>TOV: 9</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="embiid2.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">4. Joel Embiid</h1>
                <h3>11.0 APG</h3>
                <h3>TOV: 3</h3>
                <h3>Games Played: 1</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="lillard.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">5. Damian Lillard</h1>
                <h3>10.3 APG</h3>
                <h3>TOV: 12</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="dennis.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">6. Dennis Schroder</h1>
                <h3>10.0 APG</h3>
                <h3>TOV: 2</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="fvv.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">7. Fred VanVleet</h1>
                <h3>9.5 APG</h3>
                <h3>TOV: 3</h3>
                <h3>Games Played: 2</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="haliburton.jpeg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">8. Tyrese Haliburton</h1>
                <h3>9.5 APG</h3>
                <h3>TOV: 5</h3>
                <h3>Games Played: 2</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="fox.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">9. De'Aaron Fox</h1>
                <h3>8.7 APG</h3>
                <h3>TOV: 7</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="conley.jpeg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">10. Mike Conley</h1>
                <h3>8.3 APG</h3>
                <h3>TOV: 3</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>
            
            <br></br>

            </center>
          </header>
        </div>
      );
}
export default AssistsPage;