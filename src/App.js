import {useState, useRef} from 'react';
import "./App.css";
const App = () => {

    const [result, setResult] = useState("");
    const num1 = useRef();
    const num2 = useRef();

    const getValueInput = (input) => Number(input.current.value);
    
    

    const plusHandle = ()=>{
      setResult(getValueInput(num1) + getValueInput(num2));
    }

    const minusHandle = ()=>{
      setResult(getValueInput(num1) - getValueInput(num2));
    }

    const multiplyHandle = ()=>{
      setResult(getValueInput(num1) * getValueInput(num2));
    }

    const divideHandle = ()=>{
      setResult(getValueInput(num1) / getValueInput(num2));
    }

    return (
    <div className="container">
      <input type="number"  ref={num1}/>
      <input type="number"  ref={num2}/>
      <p>Result : {result}</p>
      <button onClick={plusHandle}>+</button>
      <button onClick={minusHandle}>-</button>
      <button onClick={multiplyHandle}>x</button>
      <button onClick={divideHandle}>/</button>
    </div>
    );
}

export default App;