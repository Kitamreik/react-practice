import React from "react";
// Best Practice/ DRY - Destructuring and making a Controlled Component

function UserForm({userName, handleUserNameChange}) {
    // b/c destructuring, remove all instances of props
    return(
        <React.Fragment>{/* Remember to use React.Fragment long hand --> shorthand <> </> --> wrap all the JSX in the return in a wrapper tag (i.e. <div>...</div>) */}
            <label htmlFor='user-name'>User Name: </label>
            <input id='user-name' name='user-name' type='text' value={userName} onChange={handleUserNameChange}  /> {/* // whatever is typed in the form, pulling from the prop from the UserName component --> gives control --> controlled component */}
            <hr /> {/* add a line break */}
            <p>Searching for a new user named: {userName}</p>
        </React.Fragment>
    )
}

export default UserForm;

// REFACTORING - PROPS PITFALL
/*
function UserForm(props) {
    return(
        <div>
        <label htmlFor='user-name'>User Name: </label>
        <input id='user-name' name='user-name' type='text'  onChange={props.handleUserNameChange} value={props.userName} /> 
        <hr /> 
        <p>Searching for a new user named: {props.userName}</p>
    </div>
)
}

*/