import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdImageNotSupported } from "react-icons/md";
import ParkzoneImg from "@assets/parkzone.png";
import WidgetImg from "@assets/widget_chat_summer.png";
import WaitImg from "@assets/wait_customer_dashboard.png";
import { Link } from "react-router-dom";

const slides = [
	{
		label: "AI-Powered Shopify Search Widget",
		img: WidgetImg,
		date: "jan 2026",
		id: "shopify",
	},
	{
		label: "Food Ordering Platform",
		img: WaitImg,
		date: "jun 2025",
		id: "wait",
	},
	{
		label: "Company Website",
		img: ParkzoneImg,
		date: "jun 2024",
		id: "parkzone",
	},
];

export default function Carousel() {
	const [current, setCurrent] = useState(0);
	const [imgError, setImgError] = useState(false);

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
							className={`min-w-full h-fit bg-secondary p-4 rounded-xl`}>
							<div className="flex justify-between pb-5 pt-1">
								<p className="font-mono text-accent text-sm">
									{slide.label}
								</p>
								<p className="font-mono text-sm text-neutral">
									{slide.date}
								</p>
							</div>
							{slide.img && !imgError ? (
								<div className="rounded-xl overflow-hidden w-full h-80">
									<img
										src={slide.img}
										alt={slide.label}
										className="w-full h-full object-cover"
										onError={() => setImgError(true)}
									/>
								</div>
							) : (
								<div className="w-full min-h-44 bg-neutral-content/20 rounded-xl flex items-center justify-center">
									<MdImageNotSupported className="size-20 text-neutral-content" />
								</div>
							)}
							{/* <div><img src={slide.img} alt="" /></div> */}
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
