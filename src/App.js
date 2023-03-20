// 3.1 REACT HOOKS
// CW: useRef and Handler Functions
// CW: useEffect and Props Handling 
/*
// - We want to save the user name to local storage in the browser every time user enters a new input. We will then take that value from local storage and use it somewhere else.
*/ 
// CW: useState and React Lifecycle
// import useEffect and useRef
import React, { useState, useEffect } from 'react'; //  you can write this way combined
// write the statements separately
/*
import { useState } from 'react';
import React from 'react';
*/ 
import './App.css';
// import the components needed to render
import UserItem  from './User/UserItem';
// import UserForm from './User/UserForm'; // changed into Input Field
import InputField from './shared/InputField';

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

  /*
  // creating state and the setter function- This state will keep the value of the user input via input field. The value will represent a username. 
  // Syntax: const [current state, state to change] = useState(initial value)
  // Initial value of the state is an empty string
  */ 
  const [userName, setUserName] = useState("");
  
  // start useEffect Hook
  /*
   // first - In the anonymous function of the useEffect parameter, store an item called "UserName" to the local storage 
  // In the dependencies array of useEffect, use `userName`, one of the states of the component.
  */ 
  useEffect(() => { 
    localStorage.setItem("User Name:", userName); 
  }, [userName]) 

  // end

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
  // 3.1 NEW HF
  /*
  Add a new handler function to be used to display more information about each user. (use a name that starts with "handle" and something meaningful for what it does)
  This function will take a parameter, which will be the `user` object. When this function ran, we will only console log the user name for now.
  */ 
  const handleUserInfo = (list) => {
    console.log(`You selected ${list.name}`);
  }

  // end
  return (
    <div className="App">
      <h1>Users</h1> {/* add a title */}
        {/* -----3.1 REFACTORING----- */}
      <InputField
        id="user-name"
        type="text"
        value={userName}
        onChangeFunction={handleUserNameChange}
        isFocused
      >
        User:
      </InputField>

      <hr /> {/* add a line break */}
      <UserItem users={users} handleUserInfo={handleUserInfo}/>
      {/* REFACTORED: handleUserInfo */}
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