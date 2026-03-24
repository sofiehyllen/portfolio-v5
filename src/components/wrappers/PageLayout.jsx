import PropTypes from "prop-types";

export default function PageLayout({ title, subtitle, children }) {
	return (
		<section className="mt-20 md:mt-28 md:mx-16 xl:mx-32">
			<h1 className="font-display font-bold text-5xl pb-8 text-primary-content md:text-8xl md:pb-12">
				{title}
			</h1>
			<p className=" pb-10 font-mono text-lg md:pb-20 md:w-2/3 ">
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
