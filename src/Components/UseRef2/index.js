import { useState } from "react";

function UseRef2() {
    const [inputValue, setInputValue] = useState(""); // State to store input value

    const handleChange = (event) => {
        setInputValue(event.target.value); // Update the state with the input's value
    };

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type something here..."
            />
            <p>Current Value: {inputValue}</p> {/* Display the current input value */}
        </>
    );
}

export default UseRef2;
