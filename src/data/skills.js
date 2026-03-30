import { FiServer } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import { LuCode } from "react-icons/lu";
import { FiBox } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";

export const SKILLS = [
	{
		key: "backend",
		icon: FiServer,
		items: [
			"Python",
			"Flask",
			"REST API",
			"SQLAlchemy",
			"Gunicorn",
			"Node.js",
			"Shopify API",
			"WordPress REST API",
			"Pickle",
		],
	},
	{
		key: "databases",
		icon: FiDatabase,
		items: ["MySQL", "PostgreSQL", "Redis", "Firestore", "GraphQL"],
	},
	{
		key: "frontend",
		icon: LuCode,
		items: [
			"React",
			"JavaScript",
			"Tailwind",
			"Vite",
			"HTML",
			"CSS",
			"Framer-motion",
			"Pygame",
			"SPA",
		],
	},
	{
		key: "devops",
		icon: FiBox,
		items: ["Docker", "Nginx", "GitLab-CI", "CI/CD", "Git"],
	},
	{
		key: "ai",
		icon: LuBrain,
		items: [
			"OpenAI API",
			"NumPy",
			"Matplotlib",
			"Genetic Algorithm",
			"Neural Network",
			"Neuroevolution",
			"Game AI",
		],
	},
];
