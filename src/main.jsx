import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import AppMemo from "./App-Memo.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <App/>
  </StrictMode>
);
