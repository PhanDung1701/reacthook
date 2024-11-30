import { useState } from "react";
function Lamp() {
    const [status, setStatus] = useState(false);
    const Click = () => {
        setStatus(!status)
    }
    return (
        <>
            <button onClick={Click}>Click</button>
            <div>{status ? <h1>Turn on</h1> : <h1>Turn off</h1>}</div>
        </>
    )
}
export default Lamp