import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

export default function Lightbox({ images, initialIndex, onClose }) {
	const [index, setIndex] = useState(initialIndex);

	const prev = useCallback(
		() => setIndex((i) => (i - 1 + images.length) % images.length),
		[images.length]
	);
	const next = useCallback(
		() => setIndex((i) => (i + 1) % images.length),
		[images.length]
	);

	useEffect(() => {
		document.body.style.overflow = "hidden";
		document.documentElement.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		};
	}, []);

	useEffect(() => {
		function onKey(e) {
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
			if (e.key === "Escape") onClose();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [next, prev, onClose]);

	const { src, caption } = images[index];

	return createPortal(
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
			onClick={onClose}>
			{/* Prev */}
			<button
				onClick={(e) => {
					e.stopPropagation();
					prev();
				}}
				className="size-9 rounded-full flex justify-center items-center text-2xl text-secondary hover:bg-secondary/10 transition dark:text-secondary-content dark:hover:bg-secondary/70">
				<MdKeyboardArrowLeft />
			</button>
			<div
				className="relative flex flex-col items-center w-full max-w-7xl px-16 gap-4"
				onClick={(e) => e.stopPropagation()}>
				{/* Close */}
				<button
					onClick={onClose}
					className="absolute -top-10 right-16 text-white/60 hover:text-white transition-colors">
					<IoCloseOutline className="size-6" />
				</button>

				{/* Counter */}
				<p className="absolute -top-10 left-16 font-mono text-xs text-white/40">
					{index + 1} / {images.length}
				</p>

				{/* Image */}
				<img
					src={src}
					alt={caption ?? `billede ${index + 1}`}
					className="max-h-[80vh] rounded-xl"
				/>

				{/* Caption */}
				{caption && (
					<p className="font-mono text-xs text-secondary-content italic self-start">
						{caption}
					</p>
				)}
			</div>

			{/* Next */}
			<button
				onClick={(e) => {
					e.stopPropagation();
					next();
				}}
				className="size-9 rounded-full flex justify-center items-center text-2xl text-secondary hover:bg-secondary/10 transition dark:text-secondary-content dark:hover:bg-secondary/70">
				<MdKeyboardArrowRight />
			</button>
		</div>,
		document.body
	);
}

Lightbox.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string.isRequired,
			caption: PropTypes.string,
		})
	).isRequired,
	initialIndex: PropTypes.number.isRequired,
	onClose: PropTypes.func.isRequired,
};
