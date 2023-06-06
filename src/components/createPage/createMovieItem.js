import { parseDate } from "../../utils/date";

const defaultPoster =
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsw4j6TBoBT9tGANsMBQNeb70zfEVpJ9DkQ&usqp=CAU";

export const createMovieItem = (movie) => {
	const item = document.createElement("div");
	const itemImage = document.createElement("div");
	const img = document.createElement("img");
	const itemDescription = document.createElement("div");
	const itemtextBlock = document.createElement("div");
	const itemTitle = document.createElement("div");
	const itemCotegory = document.createElement("div");
	const itemDate = document.createElement("div");
	const menu = document.createElement("div");
	const contextMenu = document.createElement("div");
	const contextMenuItem = document.createElement("span");
	const contextMenuOptions = document.createElement("div");
	const contextMenuClose = document.createElement("span");
	const contextMenuList = document.createElement("ul");
	const contextMenuListItem1 = document.createElement("li");
	const contextMenuListItem2 = document.createElement("li");

	item.dataset.id = movie.id;
	item.classList.add("content-main-block__item");
	item.classList.add("item");
	itemImage.classList.add("item__image");
	itemImage.classList.add("_ibg");
	itemDescription.classList.add("item__description");
	itemtextBlock.classList.add("item__text-block");
	itemTitle.classList.add("item__title");
	itemTitle.textContent = movie.title;
	itemCotegory.classList.add("item__category");
	itemCotegory.textContent = movie.genres.toString();
	itemDate.classList.add("item__date");
	itemDate.textContent = parseDate(movie.release_date).year;
	menu.classList.add("menu-context");
	menu.id = "menuContext";
	contextMenu.classList.add("item__context-menu");
	contextMenu.classList.add("context-menu");
	contextMenuItem.classList.add("context-menu__item");
	contextMenuOptions.classList.add("menu-context-menu");
	contextMenuClose.classList.add("menu-context-menu__close");
	contextMenuList.classList.add("menu-context-menu__list");
	contextMenuListItem1.classList.add("menu-context-menu__item");
	contextMenuListItem1.id = "edit";
	contextMenuListItem2.classList.add("menu-context-menu__item");
	contextMenuListItem2.id = "delete";

	contextMenuClose.innerText = "X";
	img.alt = "Poster";
	img.src = movie.poster_path;
	img.onerror = (e) => {
		e.target.src = defaultPoster;
	};
	contextMenuListItem1.innerText = "Edit";
	contextMenuListItem2.innerText = "Delete";

	item.append(itemImage);
	item.append(menu);
	item.append(contextMenuOptions);
	contextMenuOptions.append(contextMenuList);
	contextMenuOptions.append(contextMenuClose);
	contextMenuList.append(contextMenuListItem1);
	contextMenuList.append(contextMenuListItem2);
	menu.append(contextMenu);
	contextMenu.append(contextMenuItem);
	itemImage.append(img);
	item.append(itemDescription);
	itemDescription.append(itemtextBlock);
	itemtextBlock.append(itemTitle);
	itemtextBlock.append(itemCotegory);
	itemDescription.append(itemDate);

	const openContextMenu = () => {
		const items = document.querySelector(".content-main-block__items");

		items.addEventListener("click", (event) => {
			if (event.target != menu) return;

			contextMenuOptions.classList.add("_open-menu");
		});

		contextMenuClose.addEventListener("click", () => {
			contextMenuOptions.classList.remove("_open-menu");
		});

		item.addEventListener("click", (e) => {
			if (e.target != contextMenuOptions) {
				contextMenuOptions.classList.remove("_open-menu");
			}
		});
	};

	openContextMenu();

	return item;
};
