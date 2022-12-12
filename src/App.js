import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prev => count + 1);
  }

  return (
    <div className="parent">
      <div className="child" id="child" onClick={handleClick}>child</div>
    </div>
  )
}

export default App;
