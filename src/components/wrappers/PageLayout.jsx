import PropTypes from "prop-types";

export default function PageLayout({ title, subtitle, children }) {
	return (
		<section className="mt-20 md:mt-28 md:mx-16 xl:mx-32">
			<h1 className="h1 pb-8 md:pb-12">{title}</h1>
			<p className=" pb-10 font-mono md:text-lg md:pb-20 md:w-2/3 ">
				{subtitle}
			</p>
			{children}
		</section>
	);
}

PageLayout.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	children: PropTypes.node,
};
