import ParkzoneImg from "@assets/parkzone.png";
import WaitImg from "@assets/wait_cover_customer_dashboard.png";
import ShopifyImg from "@assets/widget_chat_summer.png";
import SnakeImg from "@assets/snake_nn.png";

export const projects = [
	{ id: "shopify", coverimg: ShopifyImg },
	{ id: "wait", coverimg: WaitImg },
	{ id: "snake", coverimg: SnakeImg },
	{ id: "parkzone", coverimg: ParkzoneImg },
];

export const projectImages = Object.fromEntries(
	projects.map(({ id, coverimg }) => [id, coverimg])
);
