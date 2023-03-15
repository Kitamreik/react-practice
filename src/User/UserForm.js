function UserForm(props) {
    return(
        <div>{/* Remember to wrap all the JSX in the return in a wrapper tag (i.e. <div>...</div>) */}
            <label htmlFor='user-name'>User Name: </label>
            <input id='user-name' name='user-name' type='text' onChange={props.handleUserNameChange} />
            {/* Remember to use props parameter (you will have to change the onChange function to use props) */}
            <hr /> {/* add a line break */}
            <p>Searching for a new user named: {props.userName}</p>
        </div>
    )
}

export default UserForm;
