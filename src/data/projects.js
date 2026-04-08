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
		gallery: [
			{
				filename: "widget_homepage.png",
				size: "full",
				captionKey: "homepage",
			},
			{
				filename: "widget_chat_summer.png",
				size: "full",
				captionKey: "chatSummer",
			},
			{
				filename: "widget_summer1.png",
				size: "half",
				captionKey: "pageSummer1",
			},
			{
				filename: "widget_summer2.png",
				size: "half",
				captionKey: "pageSummer2",
			},
			{
				filename: "widget_chat_hike.png",
				size: "full",
				captionKey: "chatHike",
			},
			{
				filename: "widget_hike1.png",
				size: "half",
				captionKey: "pageHike1",
			},
			{
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
		gallery: [
			{
				filename: "wait_customer_dashboard.png",
				size: "full",
				captionKey: "customerDashboard",
			},
			{
				filename: "wait_customer_search.png",
				size: "half",
				captionKey: "searchResults",
			},
			{
				filename: "wait_partner_dashboard.png",
				size: "half",
				captionKey: "partnerDashboard",
			},
			{
				filename: "wait_admin_users.png",
				size: "full",
				captionKey: "adminUsers",
			},
			{
				filename: "wait_admin_dashboard.png",
				size: "half",
				captionKey: "adminDashboard",
			},
			{
				filename: "wait_restaurant_add_item.png",
				size: "half",
				captionKey: "restaurantAdd",
			},
			{
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
		gallery: [
			{
				filename: "snake_game.png",
				size: "narrow",
				captionKey: "snakeGame",
			},
			{
				filename: "snake_apples.png",
				size: "wide",
				captionKey: "applesGraph",
			},
			{
				filename: "snake_comparison.png",
				size: "half",
				captionKey: "comparison",
			},
			{
				filename: "snake_nn.png",
				size: "half",
				captionKey: "neuralNetwork",
			},
			{ filename: "snake_flow.png", size: "full", captionKey: "flow" },
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
		gallery: [
			{
				filename: "pz_privat_homepage.png",
				size: "full",
				captionKey: "privatHomepage",
			},
			{
				filename: "pz_erhverv_contact.png",
				size: "narrow",
				captionKey: "erhvervContact",
			},
			{
				filename: "pz_privat_book.png",
				size: "wide",
				captionKey: "privatBooking",
			},
			{
				filename: "pz_privat_checkout.png",
				size: "half",
				captionKey: "privatCheckout",
			},
			{
				filename: "pz_privat_subscription.png",
				size: "half",
				captionKey: "privatSubscription",
			},
			{
				filename: "pz_erhverv_products.png",
				size: "wide",
				captionKey: "erhvervProducts",
			},
			{
				filename: "pz_privat_contact.png",
				size: "narrow",
				captionKey: "privatContact",
			},
			{
				filename: "pz_erhverv_homepage.png",
				size: "half",
				captionKey: "erhvervHomepage",
			},
			{
				filename: "pz_privat_location.png",
				size: "half",
				captionKey: "privatLocation",
			},
		],
	},
];

export const projectGalleries = Object.fromEntries(
	projects.map(({ id, gallery }) => [id, gallery])
);

export const projectTags = Object.fromEntries(
	projects.map(({ id, tags }) => [id, tags])
);

export const projectThumbFilenames = Object.fromEntries(
	projects.map(({ id, thumbFilename }) => [id, thumbFilename])
);
