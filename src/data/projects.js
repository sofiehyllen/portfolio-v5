import PzThumbnailImg from "@assets/pz_thumbnail.png";
import PzErhvervHomepageImg from "@assets/pz_erhverv_homepage.png";
import PzErhvervContactImg from "@assets/pz_erhverv_contact.png";
import PzErhvervProductsImg from "@assets/pz_erhverv_products.png";
import PzPrivatHomepageImg from "@assets/pz_privat_homepage.png";
import PzPrivatCheckoutImg from "@assets/pz_privat_checkout.png";
import PzPrivatBookingImg from "@assets/pz_privat_booking.png";
import PzPrivatContactImg from "@assets/pz_privat_contact.png";
import PzPrivatLocationImg from "@assets/pz_privat_location.png";
import PzPrivatSubscriptionImg from "@assets/pz_privat_subscription.png";

import WaitCoverImg from "@assets/wait_cover_customer_dashboard.png";
import WaitDashboardImg from "@assets/wait_customer_dashboard.png";
import WaitSearchImg from "@assets/wait_customer_search.png";
import WaitAdminDashboardImg from "@assets/wait_admin_dashboard.png";
import WaitAdminUsersImg from "@assets/wait_admin_users.png";
import WaitPartnerImg from "@assets/wait_partner_dashboard.png";
import WaitRestaurantMenuImg from "@assets/restaurant_menu.png";
import WaitRestaurantAddImg from "@assets/restaurant_add_item.png";

import ShopifyImg from "@assets/widget_chat_summer.png";
import WidgetHomepageImg from "@assets/widget_homepage.png";
import WidgetChatSummerImg from "@assets/widget_chat_summer.png";
import WidgetChatHikeImg from "@assets/widget_chat_hike.png";
import WidgetSummer1Img from "@assets/widget_summer1.png";
import WidgetSummer2Img from "@assets/widget_summer2.png";
import WidgetHike1Img from "@assets/widget_hike1.png";
import WidgetHike2Img from "@assets/widget_hike2.png";

import SnakeImg from "@assets/snake_nn.png";
import SnakeGameImg from "@assets/snake_game.png";
import SnakeGame2Img from "@assets/snake_game2.png";
import SnakeApplesImg from "@assets/snake_apples.png";

export const projects = [
	{
		id: "shopify",
		tags: [
			"Python",
			"PostgreSQL",
			"GraphQL",
			"Docker",
			"OpenAI",
			"SQLAlchemy",
			"Flask",
			"Shopify API",
			"Nginx",
			"Gunicorn",
		],
		coverimg: ShopifyImg,
		gallery: [
			{ src: WidgetHomepageImg, size: "full" },
			{ src: WidgetChatSummerImg, size: "half" },
			{ src: WidgetSummer1Img, size: "half" },
			{ src: WidgetSummer2Img, size: "wide" },
			{ src: WidgetChatHikeImg, size: "narrow" },
			{ src: WidgetHike1Img, size: "half" },
			{ src: WidgetHike2Img, size: "half" },
		],
	},
	{
		id: "wait",
		tags: [
			"Python",
			"Flask",
			"Docker",
			"MySQL",
			"Redis",
			"Nginx",
			"CI/CD",
			"GitLab-CI",
			"Gunicorn",
			"REST API",
		],
		coverimg: WaitCoverImg,
		gallery: [
			{
				src: WaitDashboardImg,
				size: "full",
				captionKey: "customerDashboard",
			},
			{ src: WaitSearchImg, size: "half", captionKey: "searchResults" },
			{
				src: WaitAdminDashboardImg,
				size: "half",
				captionKey: "adminDashboard",
			},
			{ src: WaitAdminUsersImg, size: "wide", captionKey: "adminUsers" },
			{
				src: WaitPartnerImg,
				size: "narrow",
				captionKey: "partnerDashboard",
			},
			{
				src: WaitRestaurantMenuImg,
				size: "half",
				captionKey: "restaurantMenu",
			},
			{
				src: WaitRestaurantAddImg,
				size: "half",
				captionKey: "restaurantAdd",
			},
		],
	},
	{
		id: "snake",
		tags: [
			"Python",
			"Pygame",
			"NumPy",
			"Matplotlib",
			"Pickle",
			"Genetic Algorithm",
			"Neural Network",
			"Neuroevolution",
			"Game AI",
		],
		coverimg: SnakeImg,
		gallery: [
			{ src: SnakeGameImg, size: "half" },
			{ src: SnakeGame2Img, size: "half" },
			{ src: SnakeApplesImg, size: "full" },
		],
	},
	{
		id: "parkzone",
		tags: [
			"React",
			"Vite",
			"JavaScript",
			"Firestore",
			"SPA",
			"WordPress REST API",
			"Tailwind",
			"Framer-motion",
		],
		coverimg: PzThumbnailImg,
		gallery: [
			{
				src: PzPrivatHomepageImg,
				size: "full",
				captionKey: "privatHomepage",
			},
			{
				src: PzPrivatCheckoutImg,
				size: "half",
				captionKey: "privatCheckout",
			},
			{
				src: PzPrivatBookingImg,
				size: "half",
				captionKey: "privatBooking",
			},
			{
				src: PzPrivatLocationImg,
				size: "full",
				captionKey: "privatLocation",
			},
			{
				src: PzPrivatContactImg,
				size: "half",
				captionKey: "privatContact",
			},
			{
				src: PzPrivatSubscriptionImg,
				size: "half",
				captionKey: "privatSubscription",
			},
			{
				src: PzErhvervHomepageImg,
				size: "full",
				captionKey: "erhvervHomepage",
			},
			{
				src: PzErhvervProductsImg,
				size: "wide",
				captionKey: "erhvervProducts",
			},
			{
				src: PzErhvervContactImg,
				size: "narrow",
				captionKey: "erhvervContact",
			},
		],
	},
];

export const projectImages = Object.fromEntries(
	projects.map(({ id, coverimg }) => [id, coverimg])
);

export const projectGalleries = Object.fromEntries(
	projects.map(({ id, gallery }) => [id, gallery])
);

export const projectTags = Object.fromEntries(
	projects.map(({ id, tags }) => [id, tags])
);
