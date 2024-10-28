export function inputNumbers() {
	document.querySelectorAll('input[type="number"]').forEach((input) => {
		input.addEventListener("input", () => {
			input.value = input.value.replace(/[^0-9.,]/g, "");
		});

		input.addEventListener("paste", (e) => {
			const pasteData = (e.clipboardData || window.Clipboard).getData("text");
			if (!/^\d+([.,]\d+)?$/.test(pasteData)) {
				e.preventDefault();
			}
		});
	});
}
