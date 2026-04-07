import { useState } from "react";
import PropTypes from "prop-types";
import { MdImageNotSupported } from "react-icons/md";

export default function Image({ src, alt, className, loading, srcSet, sizes }) {
	const [imgError, setImgError] = useState(false);

	if ((!src && !srcSet) || imgError) {
		return (
			<div className="w-full h-full min-h-44 bg-neutral-content/20 flex items-center justify-center">
				<MdImageNotSupported className="size-20 text-neutral-content" />
			</div>
		);
	}

	return (
		<img
			src={src}
			srcSet={srcSet}
			sizes={sizes}
			alt={alt}
			className={className}
			loading={loading}
			onError={() => setImgError(true)}
		/>
	);
}

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	loading: PropTypes.oneOf(["lazy", "eager"]),
	srcSet: PropTypes.string,
	sizes: PropTypes.string,
};
