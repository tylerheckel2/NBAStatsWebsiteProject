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
            //href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
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
            
            <table>
                <tr>
                    <th>Nikola Jokic</th>
                    <th> </th>
                    <th>15.0 APG</th>
                </tr>
                <tr>
                    <th>Luka Doncic</th>
                    <th> </th>
                    <th>13.5 APG</th>
                </tr>
                <tr>
                    <th>Trae Young</th>
                    <th> </th>
                    <th>12.0 APG</th>
                </tr>
                <tr>
                    <th>Joel Embiid</th>
                    <th> </th>
                    <th>11.0 APG</th>
                </tr>
                <tr>
                    <th>Damian Lillard</th>
                    <th> </th>
                    <th>10.3 APG</th>
                </tr>
                <tr>
                    <th>Dennis Schroder</th>
                    <th> </th>
                    <th>10.0 APG</th>
                </tr>
                <tr>
                    <th>Fred VanVleet</th>
                    <th> </th>
                    <th>9.5 APG</th>
                </tr>
                <tr>
                    <th>Tyrese Haliburton</th>
                    <th> </th>
                    <th>9.5 APG</th>
                </tr>
                <tr>
                    <th>De'Aaron Fox</th>
                    <th> </th>
                    <th>8.7 APG</th>
                </tr>
                <tr>
                    <th>Mike Conley</th>
                    <th> </th>
                    <th>8.3 APG</th>
                </tr>
            </table>
            </div>
    
            <div>
              <p></p>
              <img class="card-img-top" src="jokicpic.jpg" width = "50%" alt="Photo of Nikola Jokic"/>
              <p></p>
            </div>

            </center>
          </header>
        </div>
      );
}
export default AssistsPage;