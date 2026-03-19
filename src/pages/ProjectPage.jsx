import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CodeBlock from "../components/CodeBlock";
import { SlArrowLeft } from "react-icons/sl";

export default function ProjectPage() {
	const { id } = useParams();
	const { t } = useTranslation("projects");
	const navigate = useNavigate();

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
			<div className="space-y-7 xl:flex xl:space-x-8 xl:space-y-0">
				<CodeBlock id={id} />
				<div className="xl:w-3/5 space-y-8">
					<div>
						<h2 className="font-display text-3xl font-bold pb-3 text-primary-content">
							{t("common.description")}
						</h2>
						<div className="space-y-3 text-sm xl:text-base">
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
										key={i}
										dangerouslySetInnerHTML={{ __html: p }}
									/>
								)
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
