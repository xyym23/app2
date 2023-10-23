import { useState } from "react";
import  './style.css';
function Home(){
    const [a,seta] = useState(10)

    return(
        <div className="app">
            <h1>{a}</h1>
            <div className="buttonbox">
                <button onClick={() => seta((t) => t+5)}>+</button>
                <button onClick={() => seta((t) => t-5)}>-</button>
            </div>
        </div>
    )
}
export default Home;