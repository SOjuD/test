import { updateMoviesState } from "../../api";

import { goToMovieDetails } from "../../utils/search";

export const createMovies = (container) => {
	const clickHandler = (e) => {
		const movieCard = e.target.closest("[data-id]");

		if (movieCard) {
			const { id } = movieCard.dataset;
			goToMovieDetails(id);
		}
	};

	container.addEventListener("click", clickHandler);
	updateMoviesState();
};
