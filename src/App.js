import React, {useState} from "react";
import "./styles.css";

function App() {

  let cars = {
    name: "lambo",
    color: "yellow",
    engine: 1.2
  }

  function country(country){
    return <h1>{country}</h1>
  }

  const [number, setNumber] = useState(0);
  const [input, setInput] = useState(null);

  function changed(e){
    setInput(e.target.value);
    console.log(input);
  }
  
  return (
    <div className="layout">

      <input onChange={changed}></input>

      <button onClick={() => {
        setNumber(number + 1);
      }}>+</button>

      <h1>{number}</h1>
      <h1>{number}</h1>
      <h1>{number}</h1>
      <h1>{number}</h1>
      <h1>{number}</h1>
      <h1>{cars.color}</h1>
      <h1>{country("South Korea")}</h1>
    </div>
  );
}

export default App;
