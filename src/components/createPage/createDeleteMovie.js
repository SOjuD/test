export const createDeleteMovie = () => {
	const deleteMovie = document.createElement("div");
	deleteMovie.classList.add("delete-movie");
	deleteMovie.id = "deleteMovie";
	document.body.append(deleteMovie);

	const deleteMovieBody = document.createElement("div");
	deleteMovieBody.classList.add("delete-movie__body");
	deleteMovie.append(deleteMovieBody);

	const deleteMovieContent = document.createElement("div");
	deleteMovieContent.classList.add("delete-movie__content");
	deleteMovieContent.classList.add("content");
	deleteMovieBody.append(deleteMovieContent);

	const contentClose = document.createElement("div");
	contentClose.classList.add("content__close");
	contentClose.innerText = "X"
	deleteMovieContent.append(contentClose);

	const contentContainer = document.createElement("div");
	contentContainer.classList.add("content__container");
	deleteMovieContent.append(contentContainer);

	const contentHeader = document.createElement("div");
	contentHeader.classList.add("content__header");
	contentHeader.innerText = "DELETE MOVIE";
	contentContainer.append(contentHeader);

	const contentSubtitle = document.createElement("div");
	contentSubtitle.classList.add("content__subtitle");
	contentSubtitle.innerText = "Are you sure you want to delete this movie?"
	contentContainer.append(contentSubtitle);

	const contentButton = document.createElement("div");
	contentButton.classList.add("content__button");
	contentButton.id = "confirm"
	contentContainer.append(contentButton);

	const button = document.createElement("button");
	button.type = "submit";
	button.innerText = "CONFIRM"
	contentButton.append(button);
}