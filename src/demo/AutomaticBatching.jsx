import { useState } from "react";
import { flushSync } from "react-dom";

const AutomaticBatching = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  console.log("render");

  function handleClick() {
    setCount((c) => c + 1);
    setFlag((f) => !f);
  }

  function handleClickAsync() {
    setTimeout(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
    }, 1000);
  }

  function handleClickSync() {
    flushSync(() => {
      setCount((c) => c + 1);
    });
    flushSync(() => {
      setFlag((f) => !f);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <button onClick={handleClickAsync}>Next Async</button>
      <button onClick={handleClickSync}>Next Sync</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
};

export default AutomaticBatching;
