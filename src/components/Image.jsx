import { useState } from "react";
import PropTypes from "prop-types";
import { MdImageNotSupported } from "react-icons/md";

export default function Image({ alt, className, loading, fetchpriority, srcSet, sizes }) {
	const [imgError, setImgError] = useState(false);

	if (!srcSet || imgError) {
		return (
			<div className="w-full h-full min-h-44 bg-neutral-content/20 flex items-center justify-center">
				<MdImageNotSupported className="size-20 text-neutral-content" />
			</div>
		);
	}

	return (
		<img
			srcSet={srcSet}
			sizes={sizes}
			alt={alt}
			className={className}
			loading={loading}
			fetchpriority={fetchpriority}
			onError={() => setImgError(true)}
		/>
	);
}

Image.propTypes = {
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	loading: PropTypes.oneOf(["lazy", "eager"]),
	fetchpriority: PropTypes.oneOf(["high", "low", "auto"]),
	srcSet: PropTypes.string,
	sizes: PropTypes.string,
};
