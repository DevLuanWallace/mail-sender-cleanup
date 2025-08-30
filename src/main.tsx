import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/AppRoutes.tsx";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
);
