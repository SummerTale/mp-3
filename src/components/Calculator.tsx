import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<number | "">("");
  const [num2, setNum2] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);

  // Handle operation
  const calculate = (operator: string) => {
    if (num1 === "" || num2 === "") {
      alert("Please enter both numbers.");
      return;
    }

    const a = Number(num1);
    const b = Number(num2);
    let res = 0;

    switch (operator) {
      case "+": res = a + b; break;
      case "-": res = a - b; break;
      case "*": res = a * b; break;
      case "/": res = b !== 0 ? a / b : NaN; break;
      case "^": res = Math.pow(a, b); break;
    }

    setResult(res);
  };

  // Clear calculator
  const clear = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <section>
      <h2>Calculator</h2>
      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value === "" ? "" : Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value === "" ? "" : Number(e.target.value))}
      />
      <div>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>×</button>
        <button onClick={() => calculate("/")}>÷</button>
        <button onClick={() => calculate("^")}>^</button>
        <button onClick={clear}>Clear</button>
      </div>
      {result !== null && (
        <h3
          style={{
            color: result < 0 ? "red" : "#2c3e50"
          }}>
          Result: {isNaN(result) ? "Cannot divide by 0" : result}
        </h3>
      )}
    </section>
  );
};

export default Calculator;
