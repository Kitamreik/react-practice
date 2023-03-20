// REFACTORING - UserForm.js
import React, {useRef, useEffect} from "react";
// Best Practice/ DRY - Destructuring and making a Controlled Component

function InputField({ id, type, value, onChangeFunction, isFocused, children }) {
    // b/c destructuring, remove all instances of props
    const inputRef = useRef(); // create a new variable
    useEffect(() => {
        // create an if statement to decide whether the focus of the variable you created above with `useRef` is focused
        if (isFocused && inputRef.current) {
            // inputRef.current = check the object
            inputRef.current.focus();
            // 
        }
    }, [isFocused]);
    return(
        <React.Fragment>
        {/* instead of using "user-name", use a generic name
        const id = "user-name";
        const type ="text";
        const value = userName;
        const onChangeFunction = handleUserNameChange; */}
            <label htmlFor={id}>{children}</label>
            {/* pass children keyword over text that is fixed, such as "Task Name:" */}
            <input
                ref={inputRef} // Add a new attribute called `ref` to the input tag in the JSX. As a value, assign the variable you created above.
                id={id}
                name={id}
                type={type}
                value={value} 
                onChange={onChangeFunction}
            /> 
            <hr /> {/* add a line break */}
            <p>Searching for a new user named: {value}</p>
        </React.Fragment>
    );
}



export default InputField;

