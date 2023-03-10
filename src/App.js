// import logo from './logo.svg';
import React from 'react';
import './App.css';

// Build a Component - Period 2
function App() {
  // Rendering a List- Period 1
  // define the array of objects
  const users = [
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
   // Handler Functions and Props- Period 3
    // create a new handler function before the return statement - use an arrow function for the syntax
    // the parameter - use e/event
  const handleUserNameChange = (e) => {
    // to only log the parameter --> console.log(e)
    console.group();
    console.log(e.target.value); // Attach this parameter to input's on change event
    // What should be happening: You should see a console log happening with every keyboard type in the input field --> YES
  }
  return (
    <div className="App">
      <h1>Users</h1> {/* add a title */}
        <label htmlFor='user-name'>User Name: </label>
        <input id='user-name' name='user-name' type='text' onChange={handleUserNameChange} />
        <hr /> {/* add a line break */}

        {/* Remember to add the newly created component instantiation in place of the removed list mapping in the App component */}
      <UserItem users={users}/>
      {/* target the users and pass through "users" as the parameter */}
    </div>
  );
}

// moving the component outside
function UserItem(props) {
  // call props as the parameter
  return (
    // to cycle through, call props before the users
    props.users.map(list => (
      <ul>
        <li>Name: {list.name}</li>
        <li>Location: {list.location}</li>
        <li>Followers: {list.followers}</li>
        <li>Following: {list.following}</li>
      </ul>
    )
    )
  )
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