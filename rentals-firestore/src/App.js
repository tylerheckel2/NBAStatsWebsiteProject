import logo from './logo.svg';
import './App.css';



function App() {
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
          <button class="button">Points</button>
          <button class="button">Rebounds</button>
          <button class="button">Assists</button>
        </div>
        
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
        <div>
          <p></p>
          <img class="card-img-top" src="haliburton.jpeg" width = "50%" alt="Photo of Tyrese Haliburton"/>
          <p></p>
        </div>

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

      </header>
    </div>
  );
}

export default App; 
