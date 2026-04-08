import PropTypes from "prop-types";

export default function PageLayout({ title, subtitle, children }) {
	return (
		<section className="mt-20 md:mt-28 md:px-10 lg:px-16 2xl:px-32 2xl:mx-auto max-w-screen-2xl">
			<h1 className="h1 pb-8 md:pb-12">{title}</h1>
			<p className=" pb-10 font-mono xl:text-lg md:pb-20 md:w-2/3 ">
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
