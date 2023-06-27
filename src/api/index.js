import { createMovieItem } from "../components/createPage/createMovieItem";
import {
	getSearchParams,
	objectToSearch,
	updateSearchParams,
} from "../utils/search";

const baseUrl = "http://localhost:4000/movies";

export const defaultLimit = 10;

const defaultParams = {
	limit: defaultLimit,
	filter: undefined,
	search: undefined,
	sortBy: undefined,
	sortOrder: "desc",
};

export const getMovies = (params) =>
	fetch(`${baseUrl}${objectToSearch(params || defaultParams)}`).then((data) =>
		data.json()
	);

export const createMovie = (body) =>
	fetch(baseUrl, {
		method: "POST",
		body,
	}).then((data) => data.json());

export const updateMovie = (body) =>
	fetch(baseUrl, {
		method: "PUT",
		body,
	}).then((data) => data.json());

export const getMovie = (id) => {
	fetch(`${baseUrl}/${id}`).then((data) => data.json());
};

export const deleteMovie = (id) => {
	fetch(`${baseUrl}/${id}`, {
		method: "DELETE",
	});
};

export const updateMoviesState = (params) => {
	if (params) updateSearchParams(params);
	const currentParams = getSearchParams() || defaultParams;
	return getMovies(currentParams).then((data) => {
		const movies = data.data;
		const moviesElemenets = movies.map(createMovieItem);

		const moviesContainer = document.querySelector("#moviesConteiner");
		moviesContainer.innerHTML = "";
		moviesContainer.append(...moviesElemenets);

		const moviesCountContainer = document.querySelector("#moviesCounter");
		if (moviesCountContainer) {
			moviesCountContainer.textContent = data.totalAmount;
		}

		const showMoreButton = document.querySelector("#showMore");

		if (data.totalAmount <= (currentParams.limit || defaultLimit)) {
			showMoreButton.classList.add("hidden");
		} else {
			showMoreButton.classList.remove("hidden");
		}
	});
};
