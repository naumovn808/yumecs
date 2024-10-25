export function select() {
	const selectElement = document.querySelector(".select select");
	const svgIcon = document.querySelector(".select svg");

	if (!selectElement || !svgIcon) return;

	selectElement.addEventListener("focus", () => {
	  svgIcon.classList.add("active");
	});

	selectElement.addEventListener("blur", () => {
	  svgIcon.classList.remove("active");
	});
  }
