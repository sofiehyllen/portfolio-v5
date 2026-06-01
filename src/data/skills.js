import { FiServer } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { LuCode } from "react-icons/lu";
import { FiBox } from "react-icons/fi";

export const SKILLS = [
	{
		key: "backend",
		icon: FiServer,
		items: [
			"Python",
			"Flask",
			"API/REST/GraphQL",
			"MySQL",
			"PostgreSQL",
			"MongoDB",
			"ArangoDB",
			"Redis",
			"Firebase",
			"SQLAlchemy",
			"Headless CMS",
		],
	},
	{
		key: "frontend",
		icon: LuCode,
		items: [
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"React",
			"Vue.js",
			"Next.js",
			"Tailwind",
			"Storybook",
		],
	},
	{
		key: "devops",
		icon: FiBox,
		items: [
			"Docker",
			"Nginx",
			"CI/CD",
			"GitLab Pipelines",
			"Cloud VPS (Linode/Akamai)",
			"Alpine Linux",
			"SSH",
			"Git",
			"Github",
			"Gitlab",
			"Shell scripts",
		],
	},
	{
		key: "tools",
		icon: FiTool,
		items: [
			"VS Code",
			"Vim",
			"Postman",
			"Jupyter Notebook",
			"Jira",
			"Claude Code",
		],
	},
];
