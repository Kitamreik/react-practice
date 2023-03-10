// import logo from './logo.svg';
import './App.css';



function App() {
  // define the array of objects
const lists = [
  {id: 1,
  name: "Kit",
  location: "Denver, CO",
  followers: 100,
  following: 50}, 
  {id: 2,
    name: "User",
    location: "Location Pending",
    followers: 1,
    following: 1}
  ];
  return (
    <div className="App">
      {lists.map(list => (
        <ul>
          <li>Name: {list.name}</li>
          <li>Location: {list.location}</li>
          <li>Followers: {list.followers}</li>
          <li>Following: {list.following}</li>
        </ul>
      )
      )}
    </div>
  );
}

export default App;

// Boilerplate code
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/ 