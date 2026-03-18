import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import Carousel from "../components/Carousel";

export default function HomePage() {
	const { t } = useTranslation("pages");

	return (
		<section className="flex justify-center mt-20 md:mt-28 md:mx-16 xl:mt-72 xl:mx-48">
			<div className="flex space-x-10">
				<div className="w-1/2 shrink-0">
					<h1 className="font-sans font-bold text-5xl text-primary-content md:text-8xl">
						{t("home.title")}
					</h1>
					{/* <p className="font-mono pt-2">{t("home.subtitle")}</p> */}
					<p className="font-mono py-5 text-primary-content text-lg">
						{"> "}
						{t("home.description")}
					</p>
					<Link to="/contact">
						<Button variant="primary">{t("home.contact")}</Button>
					</Link>
				</div>
				<Carousel />
			</div>
		</section>
	);
}
