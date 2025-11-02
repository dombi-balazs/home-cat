import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FluentProvider, webDarkTheme } from "@fluentui/react-components";

createRoot(document.getElementById("root")!).render(
  <FluentProvider theme={webDarkTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </FluentProvider>,
);
