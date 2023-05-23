// import defaultImage from "assets/img/78983.jpg";
import { getMovies } from "../../api";
import { parseDate } from "../../utils/date";
import { searchToObject } from "../../utils/search";

const defaultImage =
	"https://media.harrypotterfanzone.com/philosophers-stone-20-years-of-movie-magic-ron-poster.jpg";

const template = document.getElementById("movieItem");

const createMovie = (movie) => {
	const movieElement = template.content.cloneNode(true);

	movieElement.querySelector("img").src = movie.poster_path;
	movieElement.querySelector("img").onerror = (e) => {
		e.target.src = defaultImage;
	};
	movieElement.querySelector(".item__title").textContent = movie.title;
	movieElement.querySelector(".item__category").textContent =
		movie.genres.toString();
	movieElement.querySelector(".item__date").textContent = parseDate(
		movie.release_date
	).year;

	return movieElement;
};

export const createMovies = (container) => {
	const params = window.location.search;
	console.log(searchToObject(params));
	getMovies().then((data) => {
		const movies = data.data;
		const moviesElements = movies.map(createMovie);

		container.append(...moviesElements);
	});
};
