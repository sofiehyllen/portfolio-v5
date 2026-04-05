export const imageConfigs = {
	// --- Thumbnails (carousel: max 576px + project cover: max 1184px) ---
	"widget_thumbnail.png": {
		outputFolder: "shopify",
		variants: {
			thumb: [350, 576, 1152],
			hero: [600, 900, 1200],
		},
	},
	"wait_thumbnail.png": {
		outputFolder: "wait",
		variants: {
			thumb: [350, 576, 1152],
			hero: [600, 900, 1200],
		},
	},
	"snake_thumbnail.png": {
		outputFolder: "snake",
		variants: {
			thumb: [350, 576, 1152],
			hero: [600, 900, 1200],
		},
	},
	"pz_thumbnail.png": {
		outputFolder: "parkzone",
		variants: {
			thumb: [350, 576, 1152],
			hero: [600, 900, 1200],
		},
	},

	// --- Shopify gallery ---
	"widget_homepage.png": {
		outputFolder: "shopify",
		variants: { gallery: [400, 800, 1100] }, // full
	},
	"widget_chat_summer.png": {
		outputFolder: "shopify",
		variants: { gallery: [400, 800, 1100] }, // full
	},
	"widget_chat_hike.png": {
		outputFolder: "shopify",
		variants: { gallery: [400, 800, 1100] }, // full
	},
	"widget_summer1.png": {
		outputFolder: "shopify",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"widget_summer2.png": {
		outputFolder: "shopify",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"widget_hike1.png": {
		outputFolder: "shopify",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"widget_hike2.png": {
		outputFolder: "shopify",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},

	// --- Wait gallery ---
	"wait_customer_dashboard.png": {
		outputFolder: "wait",
		variants: { gallery: [400, 800, 1100] }, // full
	},
	"wait_admin_users.png": {
		outputFolder: "wait",
		variants: { gallery: [400, 800, 1100] }, // full
	},
	"wait_restaurant_menu.png": {
		outputFolder: "wait",
		variants: { gallery: [400, 800, 1100] }, // full
	},
	"wait_customer_search.png": {
		outputFolder: "wait",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"wait_partner_dashboard.png": {
		outputFolder: "wait",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"wait_admin_dashboard.png": {
		outputFolder: "wait",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"wait_restaurant_add_item.png": {
		outputFolder: "wait",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},

	// --- Snake gallery ---
	"snake_flow.png": {
		outputFolder: "snake",
		variants: { gallery: [400, 800, 1100] }, // full
	},
	"snake_apples.png": {
		outputFolder: "snake",
		variants: { gallery: [350, 550, 800] }, // wide
	},
	"snake_comparison.png": {
		outputFolder: "snake",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"snake_nn.png": {
		outputFolder: "snake",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"snake_game.png": {
		outputFolder: "snake",
		variants: { gallery: [200, 300, 400, 800] }, // narrow
	},

	// --- Parkzone gallery ---
	"pz_privat_homepage.png": {
		outputFolder: "parkzone",
		variants: { gallery: [400, 800, 1100] }, // full
	},
	"pz_privat_book.png": {
		outputFolder: "parkzone",
		variants: { gallery: [350, 550, 800, 1600] }, // wide
	},
	"pz_erhverv_products.png": {
		outputFolder: "parkzone",
		variants: { gallery: [350, 550, 800, 1600] }, // wide
	},
	"pz_privat_checkout.png": {
		outputFolder: "parkzone",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"pz_privat_subscription.png": {
		outputFolder: "parkzone",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"pz_erhverv_homepage.png": {
		outputFolder: "parkzone",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"pz_privat_location.png": {
		outputFolder: "parkzone",
		variants: { gallery: [350, 450, 600, 1200] }, // half
	},
	"pz_erhverv_contact.png": {
		outputFolder: "parkzone",
		variants: { gallery: [200, 300, 400, 800] }, // narrow
	},
	"pz_privat_contact.png": {
		outputFolder: "parkzone",
		variants: { gallery: [200, 300, 400, 800] }, // narrow
	},

	// --- Profile picture (fast width: max-w-48 = 192px, 2x retina = 384px) ---
	"profile_picture.png": {
		outputFolder: "profile",
		variants: {
			default: [200, 400],
		},
	},
};
