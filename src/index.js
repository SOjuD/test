import { createMorebutton } from "./components/moreMoviesButton/createButton";
import { createMovies } from "./components/movies";
import "./style.scss";

const initApp = () => {
	const moviesContainer = document.getElementById("moviesContainer");
	createMovies(moviesContainer);
	createMorebutton(document.querySelector(".main-block__content"));
};

initApp();
