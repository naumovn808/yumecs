import Swiper, { Autoplay, Pagination } from "swiper";

export function slider() {
	const swiper = new Swiper(".slider", {
		modules: [Autoplay, Pagination],
		spaceBetween: 16,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		speed: 800,
		pagination: {
			el: ".pagination",
			bulletClass: "swiper-pagination-bullet",
			bulletActiveClass: "swiper-pagination-bullet-active",
			clickable: true,
		},
	});
}
