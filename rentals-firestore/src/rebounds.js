import React from "react";
import {database} from './firebase'
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";


function ReboundsPage(){
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
            <h1>Rebounds Per Game Leaders for the Week of 11/27/23:</h1>
            </div>
    
            <br></br>
            
            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="anthonydavis.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">1. Anthony Davis</h1>
                <h3>13.8 RPG</h3>
                <h3>Games Played: 4</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="gobert.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">2. Rudy Gobert</h1>
                <h3>13.7 RPG</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="randle.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">3. Julius Randle</h1>
                <h3>13.3 RPG</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="mobley.jpeg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">4. Evan Mobley</h1>
                <h3>12.7 RPG</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="wemby.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">5. Victor Wembanyama</h1>
                <h3>12.0 RPG</h3>
                <h3>Games Played: 1</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="luka.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">6. Luka Doncic</h1>
                <h3>12.0 RPG</h3>
                <h3>Games Played: 2</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="giannis.jpeg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">7. Giannis Antetokounmpo</h1>
                <h3>11.7 RPG</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="capela.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">8. Clint Capela</h1>
                <h3>11.7 RPG</h3>
                <h3>Games Played: 3</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="dsj.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">9. Dennis Smith Jr.</h1>
                <h3>11.0 RPG</h3>
                <h3>Games Played: 1</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="embiid2.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">10. Joel Embiid</h1>
                <h3>11.0 RPG</h3>
                <h3>Games Played: 1</h3>
                </div>
            </div>
        
            <br></br>

            </center>
          </header>
        </div>
      );
}
export default ReboundsPage;