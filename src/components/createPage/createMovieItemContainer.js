export const createMovieItemContainer = (container) => {

	const contentMainBlockItems = document.createElement("div");

	contentMainBlockItems.classList.add("content-main-block__items");
	contentMainBlockItems.id = "moviesConteiner";

	container.append(contentMainBlockItems);

	return contentMainBlockItems
}