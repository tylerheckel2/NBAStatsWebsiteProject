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
            //href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous"/>
          </head>

            <div>
              <button class="button" onClick = {routeChange}>Home</button>
            </div>
            
            <center>
            <div>
            <h1>Points Per Game Leaders for the Week of 11/27/23:</h1>
            
            <table>
                <tr>
                    <th>Tyrese Haliburton</th>
                    <th> </th>
                    <th>38.5 PPG</th>
                </tr>
                <tr>
                    <th>Luka Doncic</th>
                    <th> </th>
                    <th>38.5 PPG</th>
                </tr>
                <tr>
                    <th>Jimmy Butler</th>
                    <th> </th>
                    <th>34.5 PPG</th>
                </tr>
                <tr>
                    <th>Tyrese Maxey</th>
                    <th> </th>
                    <th>32.0 PPG</th>
                </tr>
                <tr>
                    <th>De'Aaron Fox</th>
                    <th> </th>
                    <th>31.7 PPG</th>
                </tr>
                <tr>
                    <th>Giannis Antetokounmpo</th>
                    <th> </th>
                    <th>30.3 PPG</th>
                </tr>
                <tr>
                    <th>Trae Young</th>
                    <th> </th>
                    <th>30.0 PPG</th>
                </tr>
                <tr>
                    <th>Joel Embiid</th>
                    <th> </th>
                    <th>30.0 PPG</th>
                </tr>
                <tr>
                    <th>Nikola Jokic</th>
                    <th> </th>
                    <th>29.7 PPG</th>
                </tr>
                <tr>
                    <th>Kevin Durant</th>
                    <th> </th>
                    <th>29.0 PPG</th>
                </tr>
            </table>
            </div>
            </center>

            <div>
              <p></p>
              <img class="card-img-top" src="haliburton.jpeg" width = "50%" alt="Photo of Tyrese Haliburton"/>
              <p></p>
            </div>
          </header>
        </div>
      );
}
export default PointsPage;
