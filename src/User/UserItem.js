import React from "react";
/*
New Component:

Create a folder named `User`
Move the `UserItem` component to its own file. Remember to export.
Make sure that `users` array is still being passed as props

*/ 

// Best Practice/ DRY - Destructuring
// UPDATE: you must convert to function declaration and use export statement at the bottom
// 3.1 useRef -handleUserInfo
/*
Attach that function to the component that maps the array as a prop. You can choose to use the function name as the props name too, so they are the same.
Remember to go to that component and retrieve it as a prop in the component function's parameter. 
*/ 
function UserItem({users, handleUserInfo}){
    // remove props as the parameter --> use the users array --> NO arrow function, replace with CB
    return (
      // to cycle through the users array while destructuring, remove props before the users
      users.map(list => (
        <ul>
          <li>Name: {list.name}</li>
          <li>Location: {list.location}</li>
          <li>Followers: {list.followers}</li>
          <li>Following: {list.following}</li>
          {/* 
          1. create a new `button` element as the `li` element inside the `ul`
          2. Attach this new handler function to the button's `onClick` event.
          3. This function will take a parameter which will be the user object that the button is clicked on
          */}
          <button onClick={() => {handleUserInfo(list)}}>
            Display User 
          </button>
        </ul>
      )
      )
    )
  }

export default UserItem;

// REFACTORING - PROPS PITFALL
/*
export const UserItem = (props) => {
    // call props as the parameter
    return (
      // to cycle through the users array, call props before the users
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

*/ 