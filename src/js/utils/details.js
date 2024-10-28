export function details() {
	document.addEventListener("click", function (event) {
		const details = document.querySelectorAll(".nav-link-dropdown");
		details.forEach((detail) => {
			if (!detail.contains(event.target)) {
				detail.removeAttribute("open");
			}
		});
	});
}
