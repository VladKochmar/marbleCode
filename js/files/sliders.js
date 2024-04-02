/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Lazy, Pagination, Thumbs, EffectFade, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main-swiper-page__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		let mainSwiperPage = new Swiper('.main-swiper-page__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			// preloadImages: false,
			lazy: true,


			// Эффекты
			// effect: 'fade',
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},


			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {
			}
		});

		let sliderBlock = document.querySelector('.main-swiper-page__slider');

		sliderBlock.addEventListener("mouseenter", e => {
			mainSwiperPage.autoplay.stop();
		});

		sliderBlock.addEventListener("mouseleave", e => {
			mainSwiperPage.autoplay.start();
		});
	}
	if (document.querySelector('.bottom-products__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.bottom-products__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			observer: true,
			observeParents: true,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			// preloadImages: false,
			lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: "auto",
					spaceBetween: 20,
					direction: 'vertical',
				},
				768: {
					direction: 'horizontal',
					slidesPerView: 4,
					spaceBetween: 20,
				},
				992: {
					direction: 'horizontal',
					slidesPerView: 4,
					spaceBetween: 40,
				},
			},
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.swiper-article__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-article__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			observer: true,
			observeParents: true,
			autoHeight: false,
			speed: 800,
			spaceBetween: 20,
			slidesPerView: 1,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// preloadImages: false,
			lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-article-prev',
				nextEl: '.swiper-article-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: "auto",
					spaceBetween: 20,
					direction: 'vertical',
				},
				768: {
					direction: 'horizontal',
					slidesPerView: 4,
					spaceBetween: 20,
				},
				992: {
					direction: 'horizontal',
					slidesPerView: 4,
					spaceBetween: 40,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.photo-swiper__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.photo-swiper__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy, Thumbs, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			autoHeight: false,
			speed: 800,
			lazy: true,

			// Эффекты
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},

			thumbs: {
				swiper: {
					el: '.photo-mini-swiper__slider',
					breakpoints: {
						320: {
							slidesPerView: 3,
							spaceBetween: 15,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}
				},
			},

			navigation: {
				prevEl: '.photo-mini-swiper__prev',
				nextEl: '.photo-mini-swiper__next',
			},


			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});