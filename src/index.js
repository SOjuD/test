import { createAddMovie } from "./components/createPage/createAddMovie";
import { createConteiner } from "./components/createPage/createConteiner";
import { createContent } from "./components/createPage/createContent";
import { createDeleteMovie } from "./components/createPage/createDeleteMovie";
import { createMovieEdit } from "./components/createPage/createEditMovie";
import { createFooter } from "./components/createPage/createFooter";
import { createHeader } from "./components/createPage/createHeader";
import { createMovieItem } from "./components/createPage/createMovieItem";
import { createMovieItemContainer } from "./components/createPage/createMovieItemContainer";
import { createMoreButton } from "./components/moreMoviesButton/createButton";
import { createMovieDatails } from "./components/movieDetails";
import { addMovie, openList } from "./components/movies/addMovie";
import { deleteMovieCard } from "./components/movies/deleteMovie";
import { editMovie } from "./components/movies/editMovie";
import { createMovies } from "./components/movies/movies";

import "./style.scss";

const renderHomepage = (conteinerPage) => {
	createHeader(conteinerPage);
	const containerForItems = createContent(conteinerPage);
	const containerForMovies = createMovieItemContainer(containerForItems);

	createMovies(containerForMovies);
	createMovieItem(containerForMovies);
	createMoreButton(containerForItems);

	addMovie();
	openList();
	deleteMovieCard();
	createMovieEdit();
	editMovie();
};

const initApp = () => {
	createDeleteMovie();
	createAddMovie();

	const { pathName } = window;
	const movieDetailsRegex = /\/movies\//i;

	const conteinerPage = createConteiner();

	if (movieDetailsRegex.test(pathName)) {
		createMovieDatails(conteinerPage);
	} else renderHomepage(conteinerPage);

	createFooter(conteinerPage);
};

initApp();
