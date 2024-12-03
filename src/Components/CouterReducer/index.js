import { useState, useReducer } from "react";
const reducer = (state, action) => {
    switch (action) {
        case 'UP':
            return state + 1;
        case 'DOWN':
            return state - 1;
        case 'RESET':
            return 0;
        default:
    }
};
function CouterReducer() {
    const [couter, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>CouterReducer</h1>
            <div>Ket qua: {couter}</div>
            <button onClick={() => dispatch("UP")}>Up</button>

            <button onClick={() => dispatch("DOWN")}>Down</button>

            <button onClick={() => dispatch("RESET")}>Reset</button>

        </>
    )
}
export default CouterReducer;