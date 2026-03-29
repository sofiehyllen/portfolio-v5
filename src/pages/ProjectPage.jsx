import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CodeBlock from "../components/CodeBlock";
import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";
import { projectImages, projectGalleries } from "../data/projects";
import Lightbox from "../components/Lightbox";
import Image from "../components/Image";

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
	const [lightboxIndex, setLightboxIndex] = useState(null);

	const image = projectImages[id];
	const gallery = projectGalleries[id] ?? [];
	const lightboxImages = gallery.map(({ src, captionKey }, i) => ({
		src,
		alt: captionKey ? t(`${id}.gallery.${captionKey}`) : `${t(`${id}.coverAlt`)} ${i + 1}`,
		caption: captionKey ? t(`${id}.gallery.${captionKey}`) : undefined,
	}));

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
			<div className="w-full overflow-hidden rounded-3xl h-[35rem] shadow-sm border border-gray-50">
				<Image
					src={image}
					alt={t(`${id}.coverAlt`)}
					className="w-full h-full object-cover object-top"
				/>
			</div>
			<div className="space-y-7 pt-5 xl:flex xl:space-x-10 xl:space-y-0">
				<CodeBlock id={id} />
				<div className="xl:w-3/5 space-y-16">
					<div>
						<h2 className="h2 text-5xl pb-8">
							{t("common.description")}
						</h2>
						<div className="space-y-5 text-sm text-secondary-content xl:text-base">
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
						<h3 className="h2 text-5xl pb-8">
							{t("common.features")}
						</h3>
						<ul className="space-y-2 list-disc list-inside">
							{t(`${id}.features`, { returnObjects: true }).map(
								(p, i) => (
									<li
										className="font-mono text-sm text-secondary-content xl:text-base"
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
						{gallery.map(({ src, size, captionKey }, i) => {
							const caption = captionKey
								? t(`${id}.gallery.${captionKey}`)
								: undefined;
							return (
								<div key={i} className={`space-y-2 ${SPANS[size]}`}>
									<div
										className="overflow-hidden rounded-2xl cursor-zoom-in"
										onClick={() => setLightboxIndex(i)}>
										<Image
											src={src}
											alt={caption ?? `${t(`${id}.title`)} ${i + 1}`}
											className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
											loading="lazy"
										/>
									</div>
									{caption && (
										<p className="font-mono text-xs text-secondary-content italic">
											{caption}
										</p>
									)}
								</div>
							);
						})}
					</div>
				</div>
			)}
			{lightboxIndex !== null && (
				<Lightbox
					images={lightboxImages}
					initialIndex={lightboxIndex}
					onClose={() => setLightboxIndex(null)}
				/>
			)}
		</div>
	);
}
