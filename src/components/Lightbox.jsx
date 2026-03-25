import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

export default function Lightbox({ images, initialIndex, onClose }) {
	const [index, setIndex] = useState(initialIndex);

	const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
	const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

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
			className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85"
			onClick={onClose}>
			<div
				className="relative flex flex-col items-center w-full max-w-7xl px-16 gap-4"
				onClick={(e) => e.stopPropagation()}>

				{/* Close */}
				<button
					onClick={onClose}
					className="absolute -top-10 right-16 text-white/60 hover:text-white transition-colors">
					<IoCloseOutline className="size-8" />
				</button>

				{/* Counter */}
				<p className="absolute -top-10 left-16 font-mono text-xs text-white/40">
					{index + 1} / {images.length}
				</p>

				{/* Image */}
				<img
					src={src}
					alt={caption ?? `billede ${index + 1}`}
					className=" w-full object-contain rounded-2xl"
				/>

				{/* Caption */}
				{caption && (
					<p className="font-mono text-xs text-secondary-content italic self-start">
						{caption}
					</p>
				)}
			</div>

			{/* Prev */}
			<button
				onClick={(e) => { e.stopPropagation(); prev(); }}
				className="w-9 h-9 rounded-full absolute left-4 md:left-8 text-2xl hover:bg-secondary/50 transition dark:hover:bg-secondary">
				<MdKeyboardArrowLeft />
			</button>

			{/* Next */}
			<button
				onClick={(e) => { e.stopPropagation(); next(); }}
				className="w-9 h-9 rounded-full absolute right-4 md:right-8 text-2xl hover:bg-secondary/50 transition dark:hover:bg-secondary">
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
