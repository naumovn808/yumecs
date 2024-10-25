export function goBack() {
	const btn = document.getElementById("go-back");

	if (!btn) return;

	btn.addEventListener("click", function () {

		window.history.back();
	});
}
