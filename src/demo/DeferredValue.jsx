import { useState, useDeferredValue } from "react";

const DeferredValue = () => {
  const [list, setList] = useState(new Array(50000).fill(0));
  const [background, setBackground] = useState("red");
  const deferList = useDeferredValue(list);
  console.log('deferList: ', deferList);
  console.log("render");

  const handleClick = () => {
    setBackground((c) => (c === "blue" ? "red" : "blue"));
    setList((c) => c.map((item) => item + 1));
  };

  return (
    <div>
      <button onClick={handleClick}>加1</button>
      <div style={{ background }}>color</div>
      <ul>
        {deferList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeferredValue;
