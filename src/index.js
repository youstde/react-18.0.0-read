import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

// 同步渲染
// ReactDOM.render(<App />, root);

// concurrent mode
ReactDOM.createRoot(root).render(<App />);
