document.addEventListener("DOMContentLoaded", () => {
	init();
});

async function init() {
	if (document.querySelector(".page-links")) {
		try {
			const { scrollLinks } = await import(/* webpackChunkName: "scrollLinks" */ "./helpers/scroll-links.js");
			scrollLinks();
		} catch (error) {
			console.error("Error loading test module:", error);
		}
	}

	if (document.querySelector(".slider")) {
		try {
			const { slider } = await import(/* webpackChunkName: "slider" */ "./utils/slider.js");
			slider();
		} catch (error) {
			console.error("Error loading test module:", error);
		}
	}

	if (document.querySelector(".tabs")) {
		try {
			const { tabs } = await import(/* webpackChunkName: "tabs" */ "./utils/tabs.js");
			tabs();
		} catch (error) {
			console.error("Error loading test module:", error);
		}
	}
}
