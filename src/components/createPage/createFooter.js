export const createFooter = (container) => {

	const footer = document.createElement("footer");
	const footerMainBlockConteiner = document.createElement("div");
	const footerMainBlockLogo = document.createElement("div");
	const img = document.createElement("img");

	footer.classList.add("main-block__footer");
	footer.classList.add("footer-main-block");
	footerMainBlockConteiner.classList.add("footer-main-block");
	footerMainBlockConteiner.classList.add("_conteiner");
	footerMainBlockLogo.classList.add("footer-main-block__logo");

	img.src = "./img/icons/logo.svg";
	img.alt = "icon";

	container.append(footer);
	footer.append(footerMainBlockConteiner);
	footerMainBlockConteiner.append(footerMainBlockLogo);
	footerMainBlockLogo.append(img);
}