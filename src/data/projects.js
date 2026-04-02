import PzThumbnailImg from "@assets/pz_thumbnail.png";
import PzErhvervHomepageImg from "@assets/pz_erhverv_homepage.png";
import PzErhvervContactImg from "@assets/pz_erhverv_contact.png";
import PzErhvervProductsImg from "@assets/pz_erhverv_products.png";
import PzPrivatHomepageImg from "@assets/pz_privat_homepage.png";
import PzPrivatCheckoutImg from "@assets/pz_privat_checkout.png";
import PzPrivatBookingImg from "@assets/pz_privat_book.png";
import PzPrivatContactImg from "@assets/pz_privat_contact.png";
import PzPrivatLocationImg from "@assets/pz_privat_location.png";
import PzPrivatSubscriptionImg from "@assets/pz_privat_subscription.png";

import WaitDashboardImg from "@assets/wait_customer_dashboard.png";
import WaitSearchImg from "@assets/wait_customer_search.png";
import WaitAdminDashboardImg from "@assets/wait_admin_dashboard.png";
import WaitAdminUsersImg from "@assets/wait_admin_users.png";
import WaitPartnerImg from "@assets/wait_partner_dashboard.png";
import WaitRestaurantMenuImg from "@assets/wait_restaurant_menu.png";
import WaitRestaurantAddImg from "@assets/wait_restaurant_add_item.png";
import WaitThumbnailImg from "@assets/wait_thumbnail.png";

import WidgetThumbnail from "@assets/widget_thumbnail.png";
import WidgetHomepageImg from "@assets/widget_homepage.png";
import WidgetChatSummerImg from "@assets/widget_chat_summer.png";
import WidgetChatHikeImg from "@assets/widget_chat_hike.png";
import WidgetSummer1Img from "@assets/widget_summer1.png";
import WidgetSummer2Img from "@assets/widget_summer2.png";
import WidgetHike1Img from "@assets/widget_hike1.png";
import WidgetHike2Img from "@assets/widget_hike2.png";

import SnakeThumbnail from "@assets/snake_thumbnail.png";
import SnakeNNImg from "@assets/snake_nn.png";
import SnakeGameImg from "@assets/snake_game.png";
import SnakeFlowImg from "@assets/snake_flow.png";
import SnakeApplesImg from "@assets/snake_apples.png";
import SnakeCompareImg from "@assets/snake_comparison.png";

export const projects = [
	{
		id: "shopify",
		tags: [
			"Python",
			"PostgreSQL",
			"GraphQL",
			"Docker",
			"OpenAI API",
			"SQLAlchemy",
			"Flask",
			"Shopify API",
			"Nginx",
			"Gunicorn",
		],
		coverimg: WidgetThumbnail,
		gallery: [
			{ src: WidgetHomepageImg, size: "full", captionKey: "homepage" },
			{ src: WidgetChatSummerImg, size: "full", captionKey: "chatSummer" },
			{ src: WidgetSummer1Img, size: "half", captionKey: "pageSummer1" },
			{ src: WidgetSummer2Img, size: "half", captionKey: "pageSummer2" },
			{ src: WidgetChatHikeImg, size: "full", captionKey: "chatHike" },
			{ src: WidgetHike1Img, size: "half", captionKey: "pageHike1" },
			{ src: WidgetHike2Img, size: "half", captionKey: "pageHike2" },
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
		coverimg: WaitThumbnailImg,
		gallery: [
			{
				src: WaitDashboardImg,
				size: "full",
				captionKey: "customerDashboard",
			},
			{ src: WaitSearchImg, size: "half", captionKey: "searchResults" },
			{
				src: WaitPartnerImg,
				size: "half",
				captionKey: "partnerDashboard",
			},
			{ src: WaitAdminUsersImg, size: "full", captionKey: "adminUsers" },
			{
				src: WaitAdminDashboardImg,
				size: "half",
				captionKey: "adminDashboard",
			},
			{
				src: WaitRestaurantAddImg,
				size: "half",
				captionKey: "restaurantAdd",
			},
			{
				src: WaitRestaurantMenuImg,
				size: "full",
				captionKey: "restaurantMenu",
			}
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
		coverimg: SnakeThumbnail,
		gallery: [
			{ src: SnakeGameImg, size: "narrow", captionKey: "snakeGame" },
			{ src: SnakeApplesImg, size: "wide", captionKey: "applesGraph" },
			{ src: SnakeCompareImg, size: "half", captionKey: "comparison" },
			{ src: SnakeNNImg, size: "half", captionKey: "neuralNetwork" },
			{ src: SnakeFlowImg, size: "full", captionKey: "flow" }
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
				src: PzErhvervContactImg,
				size: "narrow",
				captionKey: "erhvervContact",
			},
			{
				src: PzPrivatBookingImg,
				size: "wide",
				captionKey: "privatBooking",
			},
			{
				src: PzPrivatCheckoutImg,
				size: "half",
				captionKey: "privatCheckout",
			},
			{
				src: PzPrivatSubscriptionImg,
				size: "half",
				captionKey: "privatSubscription",
			},
			{
				src: PzErhvervProductsImg,
				size: "wide",
				captionKey: "erhvervProducts",
			},
						{
				src: PzPrivatContactImg,
				size: "narrow",
				captionKey: "privatContact",
			},
			{
				src: PzErhvervHomepageImg,
				size: "half",
				captionKey: "erhvervHomepage",
			},
			{
				src: PzPrivatLocationImg,
				size: "half",
				captionKey: "privatLocation",
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
