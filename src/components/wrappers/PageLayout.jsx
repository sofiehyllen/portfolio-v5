import PropTypes from 'prop-types';

export default function PageLayout({ title, subtitle, children }) {
    return (
        <section className="mt-28 mx-36">
            <h1 className="font-display font-bold text-8xl pb-12 text-primary-content">{title}</h1>
            <p className="text-lg text-neutral-content pb-20">{subtitle}</p>
            {children}
        </section>
    );
}

PageLayout.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.node,
};