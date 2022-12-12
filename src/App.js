import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prev => count + 1);
  }

  return (
    <div className="outContainer">
      <div className="parent">
        <div className="innerContainer">
          <h2>{count}</h2>
          <div className="child" id="child" onClick={handleClick}>child</div>
        </div>
      </div>
    </div>
  )
}

export default App;
