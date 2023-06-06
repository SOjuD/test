export function addMovie() {
	const button = document.querySelector(".header-main-block__add-button");
	const block = document.querySelector(".add-movie");
	const buttonClose = document.querySelector(".content-add-movie__close");
	const blockContent = document.querySelector(".add-movie__body");

	button.addEventListener("click", () => {
		block.classList.add("open");
		document.body.classList.add("lock");
	});

	buttonClose.addEventListener("click", (e) => {
		block.classList.remove("open");
		document.body.classList.remove("lock");
		e.preventDefault();
	});

	block.addEventListener("click", (e) => {
		if (e.target === blockContent) {
			block.classList.remove("open");
			document.body.classList.remove("lock");
		}
	});
}

export function openList() {
	const list = document.querySelector(".menu-description__list");
	const arrow = document.querySelector(".menu-description__arrow");

	arrow.addEventListener("click", () => {
		list.classList.toggle("active");
		arrow.classList.toggle("active");
	});
}
