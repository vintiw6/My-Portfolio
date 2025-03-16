import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	// Dark mode state
	const [darkMode, setDarkMode] = useState(() => {
		const isDark = localStorage.getItem("theme") === "dark";
		if (isDark) document.body.classList.add("dark"); // Ensure dark mode applies on first load
		return isDark;
	});

	useEffect(() => {
		document.documentElement.setAttribute(
			"data-theme",
			darkMode ? "dark" : "light"
		);
		localStorage.setItem("theme", darkMode ? "dark" : "light");
	}, [darkMode]);

	// Google Analytics tracking
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className={`App ${darkMode ? "dark" : "light"}`}>
			{/* Theme Toggle Switch */}
			<div className="switch">
				<label className="theme-switch">
					<input
						type="checkbox"
						checked={darkMode}
						onChange={() => setDarkMode(!darkMode)}
					/>
					<span className="slider round">
						<FaSun className="toggle-icon sun-icon" />
						<FaMoon className="toggle-icon moon-icon" />
					</span>
				</label>
			</div>

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
