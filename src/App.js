import { useState, useEffect } from "react";
import ChangeCount from "./components/ChangeCount";
import ExchangeListItem from "./components/ExchangeListItem";
import UseEffectDemo from './components/UseEffectDemo';

// 这个方法可以跳出批处理
import { flushSync } from 'react-dom';

function App() {
  return (
     <ChangeCount></ChangeCount>
    // <UseEffectDemo />
  )
}

export default App;
