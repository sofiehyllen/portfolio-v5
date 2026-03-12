import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/wrappers/Layout";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="*" element={<HomePage />} />
				<Route path="/projects/:id" element={<ProjectPage />} />
			</Route>
		</Routes>
	);
}

export default App;
