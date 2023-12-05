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
            //href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous"/>
          </head>

            <div>
              <button class="button" onClick = {routeChange}>Home</button>
            </div>
            
            <center>
            <div>
            <h1>Rebounds Per Game Leaders for the Week of 11/27/23:</h1>
            
            <table class = "center">
                <tr>
                    <th>Anthony Davis</th>
                    <th> </th>
                    <th>13.8 RPG</th>
                </tr>
                <tr>
                    <th>Rudy Gobert</th>
                    <th> </th>
                    <th>13.7 RPG</th>
                </tr>
                <tr>
                    <th>Julius Randle</th>
                    <th> </th>
                    <th>13.3 RPG</th>
                </tr>
                <tr>
                    <th>Evan Mobley</th>
                    <th> </th>
                    <th>12.7 RPG</th>
                </tr>
                <tr>
                    <th>Victor Wembanyama</th>
                    <th> </th>
                    <th>12.0 RPG</th>
                </tr>
                <tr>
                    <th>Luka Doncic</th>
                    <th> </th>
                    <th>12.0 RPG</th>
                </tr>
                <tr>
                    <th>Giannis Antetokounmpo</th>
                    <th> </th>
                    <th>11.7 RPG</th>
                </tr>
                <tr>
                    <th>Clint Capela</th>
                    <th> </th>
                    <th>11.7 RPG</th>
                </tr>
                <tr>
                    <th>Dennis Smith Jr.</th>
                    <th> </th>
                    <th>11.0 RPG</th>
                </tr>
                <tr>
                    <th>Joel Embiid</th>
                    <th> </th>
                    <th>11.0 RPG</th>
                </tr>
            </table>
            </div>
    
            <div>
              <p></p>
              <img class="card-img-top" src="anthonydavis.jpg" width = "50%" alt="Photo of Anthony Davis"/>
              <p></p>
            </div>
            </center>
          </header>
        </div>
      );
}
export default ReboundsPage;