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
      </header>
    </div>
  );
}

export default App; 
