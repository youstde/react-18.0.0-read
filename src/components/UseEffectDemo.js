import { useState, useEffect } from "react";


function UseEffectDemo() {
  const [count, updateCount] = useState(0);
  
  useEffect(() => {
    updateCount(prev => prev + 1);
    return () => {
        console.log('unmounted');
    }
  }, []);

  return (
    <div className="outContainer">
      <div className="parent">
        <div className="innerContainer">
          <h2>{count}</h2>
          {/* <div 
            className="child" 
            style={{cursor:' pointer'}} 
            id="child" 
            onClick={handleClick}
          >
            child
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default UseEffectDemo;
