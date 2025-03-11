import React, { useState } from "react";
function Calculator() {
  const [first, setFirst] = useState<number | "">("");
  const [second, setSecond] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);

  function Calculate(op:string) {
    if (first === "" || second === "") {
      alert("Please enter both numbers.");
      return;
    }
    const num1 = Number(first);
    const num2 = Number(second);
    let answer = 0;
    switch (op) {
      case "+": answer = num1 + num2; break;
      case "-": answer = num1 - num2; break;
      case "*": answer = num1 * num2; break;
      case "/": answer = num2 !== 0 ? num1 / num2 : NaN; break;
      case "^": answer = power(num1, num2); break;
      default: return;
    }
    setResult(answer);
  };
  function power(base:number, exponent:number){
    if (exponent === 0) return 1;
    let result = 1;
    for (let i = 0; i < Math.abs(exponent); i++) {
      result *= base;
    }
    return exponent > 0 ? result : 1 / result;
  };

  function ClearAll(){
    setFirst("");
    setSecond("");
    setResult(null);
  };

  return(
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="inputs">
        <input
          type="number"
          placeholder="First number"
          value={first}
          onChange={(e) => setFirst(e.target.value === "" ? "" : Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Second number"
          value={second}
          onChange={(e) => setSecond(e.target.value === "" ? "" : Number(e.target.value))}
        />
      </div>

      <div className="buttons">
        {["+", "-", "*", "/", "^"].map((op) => (
          <button key={op} onClick={() => Calculate(op)}>{op}</button>
        ))}
        <button onClick={ClearAll}>Clear</button>
      </div>

      {result !== null && (
        <div className="result">
          <strong>Result:</strong>{" "}
          {isNaN(result) ? "Oops! Division by zero." : result}
        </div>
      )}
    </div>
  );
};

export default Calculator;
