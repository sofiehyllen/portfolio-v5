import { useTranslation } from "react-i18next";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

export default function Timeline() {
	const { t } = useTranslation("pages", { keyPrefix: "about.timeline" });

	return (
		<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
			<li>
				<div className="timeline-middle">
					<FaCircleChevronLeft className="text-primary-content" />
				</div>
				<div className="timeline-start mb-10 md:text-end">
					<time className="font-mono">{t("bachelor.time")}</time>
					<h4 className="text-lg font-display font-bold text-primary-content">
						{t("bachelor.title")}
					</h4>
					<p className="font-mono text-sm">{t("bachelor.content")}</p>
				</div>
				<hr />
			</li>
			<li>
				<hr />
				<div className="timeline-middle">
					<FaCircleChevronRight className="text-primary-content" />
				</div>
				<div className="timeline-end md:mb-10">
					<time className="font-mono">{t("mmd.time")}</time>
					<h4 className="text-lg font-display font-bold text-primary-content">
						{t("mmd.title")}
					</h4>
					<p className="font-mono text-sm">{t("mmd.content")}</p>
				</div>
				<hr />
			</li>
			<li>
				<hr />
				<div className="timeline-middle">
					<FaCircleChevronLeft className="text-primary-content" />
				</div>
				<div className="timeline-start mb-10 md:text-end">
					<time className="font-mono">{t("stx.time")}</time>
					<h4 className="text-lg font-display font-bold text-primary-content">
						{t("stx.title")}
					</h4>
					<p className="font-mono text-sm">{t("stx.content")}</p>
				</div>
				<hr />
			</li>
			<li>
				<hr />
				<div className="timeline-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="h-5 w-5">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-end md:mb-10">
					<time className="font-mono italic">2007</time>
					<div className="text-lg font-black">iPhone</div>
					iPhone is a line of smartphones produced by Apple Inc. that
					use Apple's own iOS mobile operating system. The
					first-generation iPhone was announced by then-Apple CEO
					Steve Jobs on January 9, 2007. Since then, Apple has
					annually released new iPhone models and iOS updates. As of
					November 1, 2018, more than 2.2 billion iPhones had been
					sold. As of 2022, the iPhone accounts for 15.6% of global
					smartphone market share
				</div>
				<hr />
			</li>
			<li>
				<hr />
				<div className="timeline-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="h-5 w-5">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-start mb-10 md:text-end">
					<time className="font-mono italic">2015</time>
					<div className="text-lg font-black">Apple Watch</div>
					The Apple Watch is a line of smartwatches produced by Apple
					Inc. It incorporates fitness tracking, health-oriented
					capabilities, and wireless telecommunication, and integrates
					with iOS and other Apple products and services
				</div>
			</li>
		</ul>
	);
}
