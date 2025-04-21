import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import AppMemo from "./App-Memo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppMemo />
  </StrictMode>
);
