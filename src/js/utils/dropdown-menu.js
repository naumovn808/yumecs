export function dropdown() {
	const dropdownTrigger = document.querySelector(".nav-link-dropdown");
	const dropdownMenu = document.querySelector(".dropdown-menu");

	if (!dropdownTrigger || !dropdownMenu) return;

	function toggleDropdown() {
		dropdownMenu.classList.toggle("active");
	}

	function closeDropdown(event) {
		if (!dropdownMenu.contains(event.target) && event.target !== dropdownTrigger) {
			dropdownMenu.classList.remove("active");
		}
	}

	dropdownTrigger.addEventListener("click", (event) => {
		event.stopPropagation();
		toggleDropdown();
	});

	document.addEventListener("click", closeDropdown);
}
