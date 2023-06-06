import { updateMovie } from "../../api";

export const editMovie = () => {
	const items = document.querySelector(".content-main-block__items");
	const editBlock = document.querySelector(".edit-movie");
	const buttonClose = document.querySelector(".content-edit-movie__close");
	const blockContent = document.querySelector(".edit-movie__body");

	items.addEventListener("click", (event) => {
		if (event.target.id != "edit") return
		editBlock.classList.add("open");
		document.body.classList.add("lock");
		updateMovie().then((data) => {
			console.log(data)
		})
	})

	buttonClose.addEventListener("click", () => {
		editBlock.classList.remove("open");
		document.body.classList.remove("lock");
	});

	editBlock.addEventListener("click", (event) => {
		if (event.target === blockContent) {
			editBlock.classList.remove("open");
			document.body.classList.remove("lock");
		}
	})
}