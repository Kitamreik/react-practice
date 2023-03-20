import React from "react";
/*
New Component:

Create a folder named `User`
Move the `UserItem` component to its own file. Remember to export.
Make sure that `users` array is still being passed as props

*/ 

// Best Practice/ DRY - Destructuring
// UPDATE: you must convert to function declaration and use export statement at the bottom
function UserItem({users}){
    // remove props as the parameter --> use the users array --> NO arrow function, replace with CB
    return (
      // to cycle through the users array while destructuring, remove props before the users
      users.map(list => (
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