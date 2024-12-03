import { useMemo, useState } from "react";
import { pow } from '../../helpers/pow'
function Memo() {
    const [couter, setCouter] = useState(0);
    const handleClick = () => {
        setCouter(couter + 1)
    }
    const result = useMemo(() => { pow() }, []
    );
    return (
        <>

            <div>kết quả : {couter}</div>
            <button onClick={(handleClick)}>Tăng</button>
            <div>kết quả pow : {pow()}</div>

        </>
    )
}
export default Memo