import { memo } from "react";
function Box() {
    console.log("Box rendered");

    return (
        <>
            <div className="box">Boz</div>
        </>
    )
}
export default memo(Box);