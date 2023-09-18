import { useState } from "react";
import useTitle from "./useTitle";

function TitleButton() {
    const [num, setNum] = useState(0);
    useTitle(num);
    return (
    <>
        <button onClick={() => setNum(num + 1)}>Sayı - {num}</button>
    </> 
    );
}

export default TitleButton;