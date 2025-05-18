import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Screen } from "./screens/Screen/Screen";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Screen />
  </StrictMode>,
);
