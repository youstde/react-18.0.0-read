import { useState, useTransition } from "react";

const StartTransition = () => {
  const [list, setList] = useState(new Array(50000).fill(0));
  const [background, setBackground] = useState("red");
  const [isPending, startTransition] = useTransition();
  console.log("isPending: ", isPending);
  console.log("render");

  const handleClick = () => {
    setBackground((c) => (c === "blue" ? "red" : "blue"));
    startTransition(() => setList((c) => c.map((item) => item + 1)));
  };

  return (
    <div>
      <button onClick={handleClick}>加1</button>
      <div style={{ background }}>color</div>
      {isPending && <div>loading</div>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default StartTransition;
