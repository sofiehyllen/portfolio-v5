import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CodeBlock from "../components/CodeBlock";
import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";
import { projectImages, projectGalleries } from "../data/projects";
import { MdImageNotSupported } from "react-icons/md";
import Lightbox from "../components/Lightbox";

function parseBold(text) {
	return text
		.split(/\*\*(.*?)\*\*/g)
		.map((part, i) =>
			i % 2 === 1 ? <strong key={i}>{part}</strong> : part
		);
}

const SPANS = {
	full: "col-span-2 md:col-span-6",
	half: "col-span-1 md:col-span-3",
	wide: "col-span-1 md:col-span-4",
	narrow: "col-span-1 md:col-span-2",
};

export default function ProjectPage() {
	const { id } = useParams();
	const { t } = useTranslation("projects");
	const navigate = useNavigate();
	const [imgError, setImgError] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(null);

	const image = projectImages[id];
	const gallery = projectGalleries[id] ?? [];

	return (
		<div className="space-y-7 mt-14 md:mt-20 md:mx-16 2xl:mx-32">
			<button
				onClick={() => navigate(-1)}
				className="flex items-center gap-2 font-mono text-sm mb-8">
				<SlArrowLeft
					strokeWidth={10}
					className="size-3 text-primary-content"
				/>{" "}
				{t("common.back")}
			</button>
			<div className="space-y-5 md:w-2/3">
				<h1 className="font-display text-5xl font-bold text-primary-content md:text-6xl">
					{t(`${id}.title`)}
				</h1>
				<p className="font-mono xl:text-lg">{t(`${id}.subtitle`)}</p>
			</div>
			{image && !imgError ? (
				<div className="w-full overflow-hidden rounded-3xl h-[35rem] shadow-sm border border-gray-50">
					<img
						src={image}
						alt={t(`${id}.title`)}
						className="w-full h-full object-cover object-top"
						onError={() => setImgError(true)}
					/>
				</div>
			) : (
				<div className="w-full min-h-44 bg-neutral-content/20 rounded-xl flex items-center justify-center">
					<MdImageNotSupported className="size-20 text-neutral-content" />
				</div>
			)}
			<div className="space-y-7 pt-5 xl:flex xl:space-x-10 xl:space-y-0">
				<CodeBlock id={id} />
				<div className="xl:w-3/5 space-y-10">
					<div>
						<h2 className="font-display text-3xl font-bold pb-3 text-primary-content">
							{t("common.description")}
						</h2>
						<div className="space-y-5 text-sm xl:text-base">
							{t(`${id}.description`, {
								returnObjects: true,
							}).map((p, i) => (
								<p className="font-mono" key={i}>
									{p}
								</p>
							))}
						</div>
					</div>
					<div>
						<h3 className="font-display text-3xl font-bold pb-3 text-primary-content">
							{t("common.features")}
						</h3>
						<ul className="space-y-2 list-disc list-inside">
							{t(`${id}.features`, { returnObjects: true }).map(
								(p, i) => (
									<li
										className="font-mono text-sm xl:text-base"
										key={i}>
										{parseBold(p)}
									</li>
								)
							)}
						</ul>
					</div>
				</div>
			</div>
			{gallery.length > 0 && (
				<div className="py-10">
					<div className="grid grid-cols-2 md:grid-cols-6 gap-4">
						{gallery.map(({ src, size, caption }, i) => (
							<div key={i} className={`space-y-2 ${SPANS[size]}`}>
								<div
									className="overflow-hidden rounded-2xl cursor-zoom-in"
									onClick={() => setLightboxIndex(i)}>
									<img
										src={src}
										alt={
											caption ??
											`${t(`${id}.title`)} ${i + 1}`
										}
										className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
									/>
								</div>
								{caption && (
									<p className="font-mono text-xs text-secondary-content italic">
										{caption}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			)}
			{lightboxIndex !== null && (
				<Lightbox
					images={gallery}
					initialIndex={lightboxIndex}
					onClose={() => setLightboxIndex(null)}
				/>
			)}
		</div>
	);
}
