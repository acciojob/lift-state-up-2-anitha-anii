import React, { useState } from "react";
import './../styles/App.css';
import Child from "./child";

const App = () => {
      const [inputValue, setInputValue] = useState("");
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div className="parent">
        <h2>Parent Component</h2>
        <p>{inputValue}</p>
        <Child inputValue={inputValue} onInputChange={handleInputChange} />
      </div>
    );
  };
  
 
export default App;
