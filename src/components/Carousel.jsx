import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ParkzoneThumbnail from "@assets/pz_thumbnail.png";
import WidgetThumbnail from "@assets/widget_thumbnail.png";
import WaitThumbnail from "@assets/wait_thumbnail.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Image from "./Image";

const slides = [
	{
		label: "AI-Powered Shopify Search Widget",
		img: WidgetThumbnail,
		date: "jan 2026",
		id: "shopify",
	},
	{
		label: "Food Ordering Platform",
		img: WaitThumbnail,
		date: "jun 2025",
		id: "wait",
	},
	{
		label: "Company Website",
		img: ParkzoneThumbnail,
		date: "jun 2024",
		id: "parkzone",
	},
];

export default function Carousel() {
	const { t } = useTranslation("projects");
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
							key={i}
							className={`min-w-full h-fit p-4 rounded-xl bg-gray-100 dark:bg-secondary `}>
							<div className="flex justify-between pb-5 pt-1">
								<p className="font-mono text-accent text-sm">
									{slide.label}
								</p>
								<p className="font-mono text-sm text-neutral">
									{slide.date}
								</p>
							</div>
							<div className="rounded-xl overflow-hidden w-full h-56 md:h-80">
								<Image
									src={slide.img}
									alt={t(`${slide.id}.coverAlt`)}
									className="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>
						</Link>
					))}
				</div>
			</div>

			<div className="flex items-center justify-center gap-4 mt-4">
				<button
					onClick={() => goTo(current - 1)}
					className="w-9 h-9 rounded-full flex items-center justify-center text-2xl hover:bg-secondary/50 transition dark:hover:bg-secondary">
					<MdKeyboardArrowLeft />
				</button>

				<div className="flex items-center gap-1.5">
					{slides.map((_, i) => (
						<div
							key={i}
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
					onClick={() => goTo(current + 1)}
					className="w-9 h-9 rounded-full flex items-center justify-center text-2xl hover:bg-secondary/50 transition dark:hover:bg-secondary">
					<MdKeyboardArrowRight />
				</button>
			</div>
		</div>
	);
}
