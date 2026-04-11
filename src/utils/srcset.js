import { imageConfigs } from "../data/img-config.js";

export function buildSrcSet(filename, variant) {
	const config = imageConfigs[filename];
	if (!config) return undefined;
	const sizes = config.variants[variant];
	if (!sizes) return undefined;
	const name = filename.replace(/\.[^.]+$/, "");
	return sizes
		.map(
			(size) =>
				`/images/${config.outputFolder}/${name}-${variant}-${size}.webp ${size}w`
		)
		.join(", ");
}

// Beregnet ud fra Layout p-5/p-12 + ProjectPage md:mx-10 lg:mx-16 2xl:mx-32
// md=592px  lg=800px  xl=1056px  2xl=1184px
export const GALLERY_SIZES = {
	full: "(max-width: 768px) calc(100vw - 40px), (max-width: 1024px) 592px, (max-width: 1280px) 800px, (max-width: 1536px) 1056px, 1184px",
	half: "(max-width: 768px) calc(100vw - 40px), (max-width: 1024px) 296px, (max-width: 1280px) 400px, (max-width: 1536px) 528px, 592px",
	wide: "(max-width: 768px) calc(100vw - 40px), (max-width: 1024px) 395px, (max-width: 1280px) 533px, (max-width: 1536px) 704px, 789px",
	narrow: "(max-width: 768px) calc(100vw - 40px), (max-width: 1024px) 197px, (max-width: 1280px) 267px, (max-width: 1536px) 352px, 395px",
};

// Carousel: max-w-xl (576px) med slide p-4 (32px) = 544px ved md+
// Mobil: layout p-5=40px + slide p-4=32px = calc(100vw - 72px)
export const THUMB_SIZES =
	"(max-width: 768px) calc(100vw - 72px), 544px";

// Lightbox: max-w-7xl (1280px) med px-16 (64px hver side) = max 1152px
export const LIGHTBOX_SIZES =
	"(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 128px), 1152px";

// ProjectPage cover: samme bredde som full-galleri
export const HERO_SIZES =
	"(max-width: 768px) calc(100vw - 40px), (max-width: 1024px) 592px, (max-width: 1280px) 800px, (max-width: 1536px) 1056px, 1184px";
