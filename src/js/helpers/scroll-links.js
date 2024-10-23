import Swiper from 'swiper';

export function scrollLinks() {
	const swiper = new Swiper('.links-container', {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: false,
		grabCursor: true,
	});

}
