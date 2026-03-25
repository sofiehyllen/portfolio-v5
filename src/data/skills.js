import { FiServer } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import { LuCode } from "react-icons/lu";
import { FiBox } from "react-icons/fi";

export const SKILLS = [
	{
		key: "backend",
		icon: FiServer,
		items: ["Python", "Flask", "REST API", "Gunicorn", "Node.js"],
	},
	{
		key: "databases",
		icon: FiDatabase,
		items: ["MySQL", "PostgreSQL", "Redis", "Firestore", "GraphQL"],
	},
	{
		key: "frontend",
		icon: LuCode,
		items: ["React", "JavaScript", "Tailwind", "Vite", "HTML", "CSS"],
	},
	{
		key: "devops",
		icon: FiBox,
		items: ["Docker", "Nginx", "GitLab-CI", "CI/CD", "Git"],
	},
];
