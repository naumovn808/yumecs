export function initAccordion() {
	const accordions = document.querySelectorAll('[data-accordion]');

	accordions.forEach(accordion => {
		const headers = accordion.querySelectorAll('[data-accordion-header]');

		headers.forEach(header => {
			header.addEventListener('click', () => {
				const content = header.nextElementSibling;

				header.classList.toggle('active');

				const isOpen = content.classList.contains('active');

				accordion.querySelectorAll('[data-accordion-content]').forEach(section => {
					section.classList.remove('active');
					section.style.height = '0';
				});

				if (!isOpen) {
					content.classList.add('active');
					content.style.height = `${content.scrollHeight}px`;
				}
			});
		});
	});
}
