import Swiper from "swiper";

import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

(() => {
	if (document.querySelectorAll("#news-slider").length) {
		const swiper = new Swiper("#news-slider", {
			spaceBetween: 20,
			pagination: {
				type: "bullets",
				el: "#news-pagination",
				dynamicBullets: true,
				dynamicMainBullets: 5,
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 2,
				},
				900: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
				1600: {
					slidesPerView: 5,
				},
			},
		});
	}
})();
