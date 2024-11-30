import { useEffect } from "react";
function UseEff1() {
    let listItem = document.querySelectorAll('ul li');
    console.log(listItem);
    return (
        <>
            <ul>
                <li>Mục 1</li>
                <li>Mục 2</li>
                <li>Mục 3</li>
            </ul>
        </>
    );
}

export default UseEff1