/*
New Component:

Create a folder named `User`
Move the `UserItem` component to its own file. Remember to export.
Make sure that `users` array is still being passed as props

*/ 
// change from function declaration to arrow function and EXPORT
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