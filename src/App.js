import { useState } from "react";
import  './style.css'
function App() {
  const [name, setname] = useState("");
  return (
    <div className="name">
      <h1>Salam, mən {name}</h1>
      <div className="buttonbox">
        <button type="button" onClick={() => setname("Xəyyamam.")}>1</button>
        <button type="button" onClick={() => setname("əlaçıyam.")}>2</button>
        <button type="button" onClick={() => setname("yaxşı oxuyanam.")}>3</button>
        <button type="button" onClick={() => setname("orta oxuyanam.")}>4</button>
      </div>
    </div>
  );
}

export default App;
