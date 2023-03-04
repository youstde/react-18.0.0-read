import { useState, useEffect } from "react";
import ChangeCount from "./components/ChangeCount";
// import ExchangeListItem from "./components/ExchangeListItem";
// import UseEffectDemo from './components/UseEffectDemo';
// import MoreList from './components/MoreList';
import InputCom from './components/InputCom';

// 这个方法可以跳出批处理
// import { flushSync } from 'react-dom';

function App() {
  return (
     <div className="appBox">
        <ChangeCount></ChangeCount>
      </div>
    // <MoreList />
    // <UseEffectDemo />
    // <InputCom />
  )
}

export default App;
