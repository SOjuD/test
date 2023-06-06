export const createConteiner = () => {
	const wrapper = document.createElement("div");
	const page = document.createElement("div");
	const pageMainBlock = document.createElement("div");
	const mainBlockConteiner = document.createElement("div");

	wrapper.classList.add("wrapper");
	page.classList.add("page");
	pageMainBlock.classList.add("page__main-block");
	pageMainBlock.classList.add("main-block");
	mainBlockConteiner.classList.add("main-block");
	mainBlockConteiner.classList.add("_conteiner");

	document.body.prepend(wrapper);
	wrapper.append(page);
	page.append(pageMainBlock);
	pageMainBlock.append(mainBlockConteiner);

	return mainBlockConteiner
}

