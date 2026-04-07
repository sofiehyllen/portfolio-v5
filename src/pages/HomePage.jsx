import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Button from "../components/buttons/Button";
import Carousel from "../components/Carousel";

export default function HomePage() {
	const { t } = useTranslation("pages");

	return (
		<section className="mt-20 md:mt-28 md:mx-16 xl:mt-32 xl:mx-32 2xl:mt-56">
			<div className="flex flex-col lg:flex-row lg:space-x-10">
				<div className="w-full pb-14 lg:w-1/2 lg:shrink-0 lg:pb-0">
					<h1 className="font-display font-bold text-5xl text-primary-content md:text-8xl">
						{t("home.title")}
					</h1>
					{/* <p className="font-mono pt-2">{t("home.subtitle")}</p> */}
					<p className="font-mono py-5 text-primary-content text-lg">
						{"> "}
						{t("home.description")}
					</p>
					<div className="flex items-center">
						<div className="flex space-x-5 items-center border-r-2 border-secondary-content/20 pr-6 mr-6">
							<a
								href="https://www.linkedin.com/in/sofiefhyllen/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={t("social.linkedin")}>
								<FaLinkedin className="size-6 text-secondary-content/40 hover:text-secondary-content/60 transition-colors" />
							</a>
							<a
								href="https://gitlab.com/sofiehyllen"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={t("social.gitlab")}>
								<FaGitlab className="size-5 text-secondary-content/40 hover:text-secondary-content/60 transition-colors" />
							</a>
							<a
								href="https://github.com/sofiehyllen"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={t("social.github")}>
								<FaGithub className="size-6 text-secondary-content/40 hover:text-secondary-content/60 transition-colors" />
							</a>
						</div>
						<Link to="/contact">
							<Button variant="primary">
								{t("home.contact")}
							</Button>
						</Link>
					</div>
				</div>
				<Carousel />
			</div>
		</section>
	);
}
