import { defaultLimit, updateMoviesState } from "../../api";
import { getSearchParams } from "../../utils/search";

export const createMoreButton = (container) => {
	const button = document.createElement("button");
	button.type = "button";
	button.id = "showMore";
	button.innerText = "Show more";

	const onClick = () => {
		const currentLimit = getSearchParams()?.limit || defaultLimit;
		updateMoviesState({ limit: currentLimit + defaultLimit })
	};

	button.addEventListener("click", onClick);
	container.append(button);
};
