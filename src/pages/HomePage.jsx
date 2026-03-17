import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import Button from "../components/buttons/Button";

export default function HomePage() {
	const { t } = useTranslation("pages");

	return (
		<section className="flex justify-center mt-20 md:mt-28 md:mx-16 xl:mx-32">
			<div className="flex">
				<div className="w-1/2">
					{/* <p className="font-mono pb-2">{t("home.pretitle")}</p> */}
					<h1 className="font-sans font-bold text-5xl text-primary-content md:text-8xl">
						{t("home.title")}
					</h1>
					<p className="font-mono pt-3">{t("home.subtitle")}</p>
					<p className="font-mono pt-5 text-primary-content">
						{"> "}
						{t("home.description")}
					</p>
				</div>
				<div className="w-1/2">
					<div className="carousel w-full">
						<div
							id="slide1"
							className="carousel-item relative w-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
								className="w-full"
							/>
							<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
								<a href="#slide4" className="btn btn-circle">
									❮
								</a>
								<a href="#slide2" className="btn btn-circle">
									❯
								</a>
							</div>
						</div>
						<div
							id="slide2"
							className="carousel-item relative w-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
								className="w-full"
							/>
							<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
								<a href="#slide1" className="btn btn-circle">
									❮
								</a>
								<a href="#slide3" className="btn btn-circle">
									❯
								</a>
							</div>
						</div>
						<div
							id="slide3"
							className="carousel-item relative w-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
								className="w-full"
							/>
							<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
								<a href="#slide2" className="btn btn-circle">
									❮
								</a>
								<a href="#slide4" className="btn btn-circle">
									❯
								</a>
							</div>
						</div>
						<div
							id="slide4"
							className="carousel-item relative w-full">
							<img
								src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
								className="w-full"
							/>
							<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
								<a href="#slide3" className="btn btn-circle">
									❮
								</a>
								<a href="#slide1" className="btn btn-circle">
									❯
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <Link to="/contact">
				<Button variant="primary">{t("home.title")}</Button>
			</Link> */}
		</section>
	);
}
