export function tabs() {
	const tabsLinks = document.querySelectorAll(".tabs__link");
	const tabsContent = document.querySelectorAll("[data-tab-content]");
	const bg = document.querySelector(".tabs__bg");
	const tabsAbout = document.querySelectorAll(".tabs__about-head");

	if (!tabsLinks || !tabsContent || !bg || !tabsAbout) return;

	tabsLinks.forEach((link, index) => {
		link.addEventListener("click", () => {
			tabsLinks.forEach((btn) => btn.classList.remove("active"));
			tabsContent.forEach((tab) => tab.classList.remove("active"));

			link.classList.add("active");

			const targetTab = document.querySelector(`[data-tab-content="${link.dataset.tab}"]`);

			if (targetTab) {
				targetTab.classList.add("active");
			}

			bg.style.transform = `translateX(${index * 100}%)`;
		});
	});

	tabsAbout.forEach((tab) => {
		tab.addEventListener("click", (evt) => {
			evt.preventDefault();

			if (tab.classList.contains("active")) {
				tab.classList.remove("active");
			} else {
				tabsAbout.forEach((t) => t.classList.remove("active"));
				tab.classList.add("active");
			}
		});
	});
}
