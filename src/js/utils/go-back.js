export function goBack() {
	const btn = document.getElementById("go-back");

	if (!btn) return;

	btn.addEventListener("click", function () {
		window.history.back();
	});

	if (typeof Telegram !== "undefined" && Telegram.WebApp) {
		btn.addEventListener("click", () => {

			Telegram.WebApp.BackButton.onClick(() => {
				handleBack();
			});

			Telegram.WebApp.BackButton.show();
			Telegram.WebApp.BackButton.click();
		});

		function handleBack() {
			if (window.location.search && window.location.pathname !== '/') {
				history.back();
			} else {
				location.href = "/";
			}
		}
	} else {
		console.warn("Telegram WebApp API недоступен.");
	}
}
