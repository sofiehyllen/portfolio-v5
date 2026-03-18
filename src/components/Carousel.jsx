import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const slides = [
	{ label: "Slide 1", bg: "bg-blue-200" },
	{ label: "Slide 2", bg: "bg-teal-200" },
	{ label: "Slide 3", bg: "bg-pink-200" },
];

export default function Carousel() {
	const [current, setCurrent] = useState(0);

	const goTo = (n) => setCurrent((n + slides.length) % slides.length);

	return (
		<div className="w-full max-w-xl mx-auto">
			<div className="overflow-hidden rounded-2xl">
				<div
					className="flex transition-transform duration-300 ease-in-out"
					style={{ transform: `translateX(-${current * 100}%)` }}>
					{slides.map((slide, i) => (
						<div
							key={i}
							className={`min-w-full h-56 flex items-center justify-center text-lg font-medium ${slide.bg}`}>
							{slide.label}
						</div>
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
