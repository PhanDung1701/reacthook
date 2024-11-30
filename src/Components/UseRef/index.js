import { useState, useRef } from "react";

function UseRef() {
    const [count, setCount] = useState(0); // State for re-render tracking
    const countRef = useRef(0); // Ref for persistent value

    const handleClick = () => {
        setCount(count + 1); // Update state (triggers re-render)
        countRef.current += 1; // Update ref value (does not trigger re-render)
    };

    return (
        <>
            <p>State Count: {count}</p>
            <p>Ref Count: {countRef.current}</p>
            <button onClick={handleClick}>Increment</button>
        </>
    );
}

export default UseRef;
