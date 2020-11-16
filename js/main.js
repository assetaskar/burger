var swiper = new Swiper(".swiper-container", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 5000,
	},
});

const btn = document.querySelector(".header__button");
const nav = document.querySelector(".header__nav");

btn.addEventListener("click", () => {
	nav.classList.toggle("active");
	btn.classList.toggle("active");
});
