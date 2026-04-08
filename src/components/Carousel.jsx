import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Image from "./Image";
import { buildSrcSet, THUMB_SIZES } from "../utils/srcset";
import { projects } from "../data/projects";

const CAROUSEL_IDS = ["shopify", "wait", "parkzone"];
const slides = projects.filter((p) => CAROUSEL_IDS.includes(p.id));

export default function Carousel() {
	const { t } = useTranslation("projects");
	const { t: tNav } = useTranslation("navigation");
	const [current, setCurrent] = useState(0);

	const goTo = (n) => setCurrent((n + slides.length) % slides.length);

	return (
		<div className="w-full max-w-xl mx-auto">
			<div className="overflow-hidden rounded-2xl">
				<div
					className="flex transition-transform duration-300 ease-in-out h-fit"
					style={{ transform: `translateX(-${current * 100}%)` }}>
					{slides.map((slide, i) => (
						<Link
							to={`/projects/${slide.id}`}
							key={slide.id}
							className={`min-w-full h-fit p-4 rounded-xl bg-gray-100 dark:bg-secondary `}>
							<div className="flex justify-between pb-5 pt-1">
								<p className="font-mono text-accent text-sm">
									{t(`${slide.id}.title`)}
								</p>
								<p className="font-mono text-sm text-neutral">
									{t(`${slide.id}.date`)}
								</p>
							</div>
							<div className="rounded-xl overflow-hidden w-full h-56 md:h-80">
								<Image
									srcSet={buildSrcSet(slide.thumbFilename, "thumb")}
									sizes={THUMB_SIZES}
									alt={t(`${slide.id}.coverAlt`)}
									className="w-full h-full object-cover"
								/>
							</div>
						</Link>
					))}
				</div>
			</div>

			<div className="flex items-center justify-center gap-4 mt-4">
				<button
					aria-label={tNav("prevSlide")}
					onClick={() => goTo(current - 1)}
					className="w-9 h-9 rounded-full flex items-center justify-center text-2xl hover:bg-secondary/50 transition dark:hover:bg-secondary">
					<MdKeyboardArrowLeft aria-hidden="true" />
				</button>

				<div className="flex items-center gap-1.5">
					{slides.map((slide, i) => (
						<button
							type="button"
							key={slide.id}
							aria-label={tNav("goToSlide", { number: i + 1, label: t(`${slide.id}.title`) })}
							aria-current={i === current ? "true" : undefined}
							onClick={() => goTo(i)}
							className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
								i === current
									? "w-6 bg-accent"
									: "w-2 bg-base-content/30"
							}`}
						/>
					))}
				</div>

				<button
					aria-label={tNav("nextSlide")}
					onClick={() => goTo(current + 1)}
					className="w-9 h-9 rounded-full flex items-center justify-center text-2xl hover:bg-secondary/50 transition dark:hover:bg-secondary">
					<MdKeyboardArrowRight aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}
