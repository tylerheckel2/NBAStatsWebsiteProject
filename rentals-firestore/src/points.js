import React from "react";
import {database} from './firebase'
import {useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";

function PointsPage(){
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
            <h1>Points Per Game Leaders for the Week of 11/27/23:</h1>
            </div>
            </center>

            <br></br>
            
            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="haliburton.jpeg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">1. Tyrese Haliburton</h1>
                <h3>38.5 PPG</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="luka.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">2. Luka Doncic</h1>
                <h3>38.5 PPG</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="jimmy.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">3. Jimmy Butler</h1>
                <h3>34.5 PPG</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="maxey.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">4. Tyrese Maxey</h1>
                <h3>32.0 PPG</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="fox.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">5. De'Aaron Fox</h1>
                <h3>31.7 PPG</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="giannis.jpeg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">6. Giannis Antetokounmpo</h1>
                <h3>30.3 PPG</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="young.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">7. Trae Young</h1>
                <h3>30.0 PPG</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="embiid2.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">8. Joel Embiid</h1>
                <h3>30.0 PPG</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="jokicpic.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">9. Nikola Jokic</h1>
                <h3>29.7 PPG</h3>
                </div>
            </div>

            <br></br>

            <div class="media">
                <img class="d-flex align-self-start mr-1" width = "550" length = "550" src="kd.jpg" alt="Placeholder image"/>
                <div class="media-body">
                <h1 class="mt-10">10. Kevin Durant</h1>
                <h3>29.0 PPG</h3>
                </div>
            </div>
            
            <br></br>

    </header>
    </div>
    );
}

export default PointsPage;
