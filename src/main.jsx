import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n/index.js";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
);
