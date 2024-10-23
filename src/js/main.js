

(async () => {
	if (document.querySelector('.page-links')) {
		try {
			const { scrollLinks } = await import(/* webpackChunkName: "scrollLinks" */ './helpers/scroll-links.js');
			scrollLinks();
		} catch (error) {
			console.error('Error loading test module:', error);
		}
	}
})();
