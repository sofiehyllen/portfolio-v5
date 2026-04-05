import PzThumbnailImg from "@assets/originals/pz_thumbnail.png";
import PzErhvervHomepageImg from "@assets/originals/pz_erhverv_homepage.png";
import PzErhvervContactImg from "@assets/originals/pz_erhverv_contact.png";
import PzErhvervProductsImg from "@assets/originals/pz_erhverv_products.png";
import PzPrivatHomepageImg from "@assets/originals/pz_privat_homepage.png";
import PzPrivatCheckoutImg from "@assets/originals/pz_privat_checkout.png";
import PzPrivatBookingImg from "@assets/originals/pz_privat_book.png";
import PzPrivatContactImg from "@assets/originals/pz_privat_contact.png";
import PzPrivatLocationImg from "@assets/originals/pz_privat_location.png";
import PzPrivatSubscriptionImg from "@assets/originals/pz_privat_subscription.png";

import WaitDashboardImg from "@assets/originals/wait_customer_dashboard.png";
import WaitSearchImg from "@assets/originals/wait_customer_search.png";
import WaitAdminDashboardImg from "@assets/originals/wait_admin_dashboard.png";
import WaitAdminUsersImg from "@assets/originals/wait_admin_users.png";
import WaitPartnerImg from "@assets/originals/wait_partner_dashboard.png";
import WaitRestaurantMenuImg from "@assets/originals/wait_restaurant_menu.png";
import WaitRestaurantAddImg from "@assets/originals/wait_restaurant_add_item.png";
import WaitThumbnailImg from "@assets/originals/wait_thumbnail.png";

import WidgetThumbnail from "@assets/originals/widget_thumbnail.png";
import WidgetHomepageImg from "@assets/originals/widget_homepage.png";
import WidgetChatSummerImg from "@assets/originals/widget_chat_summer.png";
import WidgetChatHikeImg from "@assets/originals/widget_chat_hike.png";
import WidgetSummer1Img from "@assets/originals/widget_summer1.png";
import WidgetSummer2Img from "@assets/originals/widget_summer2.png";
import WidgetHike1Img from "@assets/originals/widget_hike1.png";
import WidgetHike2Img from "@assets/originals/widget_hike2.png";

import SnakeThumbnail from "@assets/originals/snake_thumbnail.png";
import SnakeNNImg from "@assets/originals/snake_nn.png";
import SnakeGameImg from "@assets/originals/snake_game.png";
import SnakeFlowImg from "@assets/originals/snake_flow.png";
import SnakeApplesImg from "@assets/originals/snake_apples.png";
import SnakeCompareImg from "@assets/originals/snake_comparison.png";

export const projects = [
	{
		id: "shopify",
		thumbFilename: "widget_thumbnail.png",
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
			{
				src: WidgetHomepageImg,
				filename: "widget_homepage.png",
				size: "full",
				captionKey: "homepage",
			},
			{
				src: WidgetChatSummerImg,
				filename: "widget_chat_summer.png",
				size: "full",
				captionKey: "chatSummer",
			},
			{
				src: WidgetSummer1Img,
				filename: "widget_summer1.png",
				size: "half",
				captionKey: "pageSummer1",
			},
			{
				src: WidgetSummer2Img,
				filename: "widget_summer2.png",
				size: "half",
				captionKey: "pageSummer2",
			},
			{
				src: WidgetChatHikeImg,
				filename: "widget_chat_hike.png",
				size: "full",
				captionKey: "chatHike",
			},
			{
				src: WidgetHike1Img,
				filename: "widget_hike1.png",
				size: "half",
				captionKey: "pageHike1",
			},
			{
				src: WidgetHike2Img,
				filename: "widget_hike2.png",
				size: "half",
				captionKey: "pageHike2",
			},
		],
	},
	{
		id: "wait",
		thumbFilename: "wait_thumbnail.png",
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
				filename: "wait_customer_dashboard.png",
				size: "full",
				captionKey: "customerDashboard",
			},
			{
				src: WaitSearchImg,
				filename: "wait_customer_search.png",
				size: "half",
				captionKey: "searchResults",
			},
			{
				src: WaitPartnerImg,
				filename: "wait_partner_dashboard.png",
				size: "half",
				captionKey: "partnerDashboard",
			},
			{
				src: WaitAdminUsersImg,
				filename: "wait_admin_users.png",
				size: "full",
				captionKey: "adminUsers",
			},
			{
				src: WaitAdminDashboardImg,
				filename: "wait_admin_dashboard.png",
				size: "half",
				captionKey: "adminDashboard",
			},
			{
				src: WaitRestaurantAddImg,
				filename: "wait_restaurant_add_item.png",
				size: "half",
				captionKey: "restaurantAdd",
			},
			{
				src: WaitRestaurantMenuImg,
				filename: "wait_restaurant_menu.png",
				size: "full",
				captionKey: "restaurantMenu",
			},
		],
	},
	{
		id: "snake",
		thumbFilename: "snake_thumbnail.png",
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
			{
				src: SnakeGameImg,
				filename: "snake_game.png",
				size: "narrow",
				captionKey: "snakeGame",
			},
			{
				src: SnakeApplesImg,
				filename: "snake_apples.png",
				size: "wide",
				captionKey: "applesGraph",
			},
			{
				src: SnakeCompareImg,
				filename: "snake_comparison.png",
				size: "half",
				captionKey: "comparison",
			},
			{
				src: SnakeNNImg,
				filename: "snake_nn.png",
				size: "half",
				captionKey: "neuralNetwork",
			},
			{
				src: SnakeFlowImg,
				filename: "snake_flow.png",
				size: "full",
				captionKey: "flow",
			},
		],
	},
	{
		id: "parkzone",
		thumbFilename: "pz_thumbnail.png",
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
				filename: "pz_privat_homepage.png",
				size: "full",
				captionKey: "privatHomepage",
			},
			{
				src: PzErhvervContactImg,
				filename: "pz_erhverv_contact.png",
				size: "narrow",
				captionKey: "erhvervContact",
			},
			{
				src: PzPrivatBookingImg,
				filename: "pz_privat_book.png",
				size: "wide",
				captionKey: "privatBooking",
			},
			{
				src: PzPrivatCheckoutImg,
				filename: "pz_privat_checkout.png",
				size: "half",
				captionKey: "privatCheckout",
			},
			{
				src: PzPrivatSubscriptionImg,
				filename: "pz_privat_subscription.png",
				size: "half",
				captionKey: "privatSubscription",
			},
			{
				src: PzErhvervProductsImg,
				filename: "pz_erhverv_products.png",
				size: "wide",
				captionKey: "erhvervProducts",
			},
			{
				src: PzPrivatContactImg,
				filename: "pz_privat_contact.png",
				size: "narrow",
				captionKey: "privatContact",
			},
			{
				src: PzErhvervHomepageImg,
				filename: "pz_erhverv_homepage.png",
				size: "half",
				captionKey: "erhvervHomepage",
			},
			{
				src: PzPrivatLocationImg,
				filename: "pz_privat_location.png",
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

export const projectThumbFilenames = Object.fromEntries(
	projects.map(({ id, thumbFilename }) => [id, thumbFilename])
);
