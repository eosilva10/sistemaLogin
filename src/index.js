// PEGANDO O INDEX HTML
import { createRoot } from "react-dom/client";
import App from './App.js';

const root = createRoot(document.querySelector("#root"));

// RENDERIZANDO
root.render(<App />);