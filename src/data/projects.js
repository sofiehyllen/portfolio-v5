import ParkzoneImg from "@assets/parkzone.png";
import ParkzoneHomepageImg from "@assets/parkzone_homepage.png";
import ParkzoneCheckoutImg from "@assets/parkzone_checkout.png";
import ParkzoneBookingImg from "@assets/parkzone_booking.png";

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
		coverimg: WaitCoverImg,
		gallery: [
			{ src: WaitDashboardImg, size: "full", caption: "Customer dashboard" },
			{ src: WaitSearchImg, size: "half", caption: "Search results in customer dashboard" },
			{ src: WaitAdminDashboardImg, size: "half", caption: "Admin dashboard" },
			{ src: WaitAdminUsersImg, size: "wide", caption: "User overview in admin dashboard" },
			{ src: WaitPartnerImg, size: "narrow", caption: "Partner dashboard" },
			{ src: WaitRestaurantMenuImg, size: "half", caption: "Menu overview in restaurant dashboard" },
			{ src: WaitRestaurantAddImg, size: "half", caption: "Restaurant dashboard" },
		],
	},
	{
		id: "snake",
		coverimg: SnakeImg,
		gallery: [
			{ src: SnakeGameImg, size: "half" },
			{ src: SnakeGame2Img, size: "half" },
			{ src: SnakeApplesImg, size: "full" },
		],
	},
	{
		id: "parkzone",
		coverimg: ParkzoneImg,
		gallery: [
			{ src: ParkzoneHomepageImg, size: "full" },
			{ src: ParkzoneCheckoutImg, size: "half" },
			{ src: ParkzoneBookingImg, size: "half" },
		],
	},
];

export const projectImages = Object.fromEntries(
	projects.map(({ id, coverimg }) => [id, coverimg])
);

export const projectGalleries = Object.fromEntries(
	projects.map(({ id, gallery }) => [id, gallery])
);
