import { useState, useEffect, useTransition } from "react";


function ChangeCount() {
  const [count, updateCount] = useState(0);
  const [name, setName] = useState('lucy');
  const [isPending, startTransition] = useTransition();

  const handleClick = (e) => {
    // updateCount((precount) => precount + 1);
    // updateCount((precount) => precount + 1);
    // updateCount((precount) => precount + 1);
    // 这种在一开始传入的时候就已经定下来了
    // 等同于 updateCount(0 + 1);
    updateCount(count + 1);
    // startTransition(() => {
    //   setName('lili');
    // });
    // 等同于 updateCount(0 + 1);
    // updateCount(count + 1);
    // 等同于 updateCount(0 + 1);
    // updateCount(count + 1);
  }
  console.log('====>count');

  return (
    <div className="outContainer">
      <div className="parent">
        <div className="innerContainer">
          <h2>{count}</h2>
          <div>{name}</div>
          <div 
            className="child" 
            style={{cursor:' pointer'}} 
            id="child" 
            onClick={handleClick}
          >
            child
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeCount;
