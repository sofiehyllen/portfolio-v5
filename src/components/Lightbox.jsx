import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import Image from "./Image";
import { buildSrcSet, LIGHTBOX_SIZES } from "../utils/srcset";
import { useTranslation } from "react-i18next";

export default function Lightbox({ images, initialIndex, onClose }) {
	const { t } = useTranslation("navigation");
	const [index, setIndex] = useState(initialIndex);
	const containerRef = useRef(null);

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

	// Auto-focus first button when lightbox opens
	useEffect(() => {
		const firstButton = containerRef.current?.querySelector("button");
		firstButton?.focus();
	}, []);

	useEffect(() => {
		function onKey(e) {
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
			if (e.key === "Escape") onClose();
			if (e.key === "Tab") {
				const focusable = containerRef.current?.querySelectorAll("button");
				if (!focusable?.length) return;
				const arr = Array.from(focusable);
				const currentIndex = arr.indexOf(document.activeElement);
				e.preventDefault();
				if (e.shiftKey) {
					arr[(currentIndex - 1 + arr.length) % arr.length]?.focus();
				} else {
					arr[(currentIndex + 1) % arr.length]?.focus();
				}
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [next, prev, onClose]);

	const { src, filename, alt, caption } = images[index];

	return createPortal(
		<div
			ref={containerRef}
			role="dialog"
			aria-modal="true"
			aria-label={alt}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
			onClick={onClose}>
			{/* Prev */}
			<button
				aria-label={t("prevImage")}
				onClick={(e) => {
					e.stopPropagation();
					prev();
				}}
				className="size-9 rounded-full flex justify-center items-center text-2xl text-secondary hover:bg-secondary/10 transition dark:text-secondary-content dark:hover:bg-secondary/70">
				<MdKeyboardArrowLeft aria-hidden="true" />
			</button>
			<div
				className="relative flex flex-col items-center w-full max-w-7xl px-16 gap-4"
				onClick={(e) => e.stopPropagation()}>
				{/* Close */}
				<button
					aria-label={t("closeGallery")}
					onClick={onClose}
					className="absolute -top-10 right-16 text-white/60 hover:text-white transition-colors">
					<IoCloseOutline className="size-6" aria-hidden="true" />
				</button>

				{/* Counter */}
				<p className="absolute -top-10 left-16 font-mono text-xs text-white/40" aria-live="polite">
					{index + 1} / {images.length}
				</p>

				{/* Image */}
				<Image
					src={src}
					srcSet={buildSrcSet(filename, "gallery")}
					sizes={LIGHTBOX_SIZES}
					alt={alt}
					className="max-h-[80vh] rounded-xl"
					loading="eager"
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
				aria-label={t("nextImage")}
				onClick={(e) => {
					e.stopPropagation();
					next();
				}}
				className="size-9 rounded-full flex justify-center items-center text-2xl text-secondary hover:bg-secondary/10 transition dark:text-secondary-content dark:hover:bg-secondary/70">
				<MdKeyboardArrowRight aria-hidden="true" />
			</button>
		</div>,
		document.body
	);
}

Lightbox.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string.isRequired,
			filename: PropTypes.string,
			size: PropTypes.string,
			alt: PropTypes.string.isRequired,
			caption: PropTypes.string,
		})
	).isRequired,
	initialIndex: PropTypes.number.isRequired,
	onClose: PropTypes.func.isRequired,
};
