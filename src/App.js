// 3.1 REACT HOOKS
// CW: useState and React Lifecycle
import React, { useState } from 'react'; //  you can write this way combined
// write the statements separately
/*
import { useState } from 'react';
import React from 'react';
*/ 
import './App.css';
// import the components needed to render
import { UserItem } from './User/UserItem';
import UserForm from './User/UserForm';

function App() {
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

  // creating state and the setter function- This state will keep the value of the user input via input field. The value will represent a username. 
  // Syntax: const [current state, state to change] = useState(initial value)
  const [userName, setUserName] = useState("");
  // Initial value of the state is an empty string

  const handleUserNameChange = (e) => {
    // to only log the parameter --> console.log(e)
    console.group("LOG THE CHANGES");
    console.log(e.target.value); // Attach this parameter to input's on change event
    console.groupEnd("END")
    console.group("--------- 3.1 -------")
    console.log("Setting State from the UserName")
    // set the state that will hold the user name to the value entered into the field
    setUserName(e.target.value);
    console.warn(setUserName(e.target.value));
    console.groupEnd("END")
  }
  return (
    <div className="App">
      <h1>Users</h1> {/* add a title */}
        {/* -----3.1----- */}
        {/* moving the input and label to it's own component file --> UserForm */} {/* PASS THE PROPS: target the userName and pass through "userName" as the parameter as well as the handler function */}
      <UserForm
        userName={userName}
        handleUserNameChange={handleUserNameChange}
      />
      <hr /> {/* add a line break */}
      <UserItem users={users}/>
      {/* target the users and pass through "users" as the parameter */}
    </div>
  );
}

// 3.1 move the component of UserItem to a new folder/file structure
// moving the component outside

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