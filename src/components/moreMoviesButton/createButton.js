export const createMorebutton = (container) => {
	const button = document.createElement("button");
	button.typ = "button";
	button.id = "showMore";
	button.innerText = "show more";

	button.addEventListener("click", () => {
		const url = new URL(window.location);
		url.searchParams.set("page", 2);
		window.history.pushState(null, "", url.toString());
	});
	container.append(button);
};
