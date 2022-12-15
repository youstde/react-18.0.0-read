import { useState, useEffect } from "react";

// 这个方法可以跳出批处理
// import { flushSync } from 'react-dom';

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const handleClick = () => {
    setCount(prev => count + 1);
  }

  useEffect(() => {
    const arr = [];
    for (let i = 0; i <= 20000; i++) {
      arr.push(i);
    }
    setList(arr);
  }, []);

  return (
    <div className="outContainer">
      <div className="parent">
        <div className="innerContainer">
          <h2>{count}</h2>
          <div className="child" id="child" onClick={handleClick}>child</div>
          <ul>
            {
              list.map((item, index) => (<li key={index}>{item}</li>))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
