import { useState } from "react";
function CouterSate() {
    const [couter, setCouter] = useState(0)
    return (
        <>
            <h1>CouterState</h1>
            <div>Ket qua: {couter}</div>
            <button onClick={() => setCouter(couter + 1)}>Up</button>

            <button onClick={() => setCouter(couter - 1)}>Down</button>

            <button onClick={() => setCouter(0)}>Reset</button>

        </>
    )
}
export default CouterSate;