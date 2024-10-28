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

	if (document.getElementById("go-back")) {
		try {
			const { goBack } = await import(/* webpackChunkName: "goBack" */ "./utils/go-back.js");
			goBack();
		} catch (error) {
			console.error("Error loading test module:", error);
		}
	}

	if (document.querySelector(".select")) {
		try {
			const { select } = await import(/* webpackChunkName: "select" */ "./utils/select.js");
			select();
		} catch (error) {
			console.error("Error loading test module:", error);
		}
	}

	if (document.querySelector("[data-accordion-header]") && document.querySelector("[data-accordion-content]")) {
		try {
			const { initAccordion } = await import(/* webpackChunkName: "initAccordion" */ "./utils/accordeon.js");
			initAccordion();
		} catch (error) {
			console.error("Error loading test module:", error);
		}
	}

	if (document.querySelector(".nav-link-dropdown")) {
		try {
			const { details } = await import(/* webpackChunkName: "details" */ "./utils/details.js");
			details();
		} catch (error) {
			console.error("Error loading test module:", error);
		}
	}

	if (document.querySelector(".dropdown")) {
		try {
			const { dropdown } = await import(/* webpackChunkName: "dropdown" */ "./utils/dropdown-menu.js");
			dropdown();
		} catch (error) {
			console.error("Error loading test module:", error);
		}
	}
}
