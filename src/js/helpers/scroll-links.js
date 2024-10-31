import Swiper from 'swiper';

export function scrollLinks() {
	const swiper = new Swiper('.links-container', {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: false,
		grabCursor: true,
		watchSlidesProgress: true,
		on: {
			init: function () {
			  // Находим слайд с классом active
			  const activeSlide = Array.from(this.slides).findIndex(slide =>
				slide.classList.contains('active')
			  );

			  // Если найден active-слайд, перемещаем его в левую часть экрана
			  if (activeSlide !== -1) {
				this.slideTo(activeSlide, 0); // Сдвигаем слайдер к активному слайду
			  }
			},
		  },
	});

}
