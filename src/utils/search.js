export const searcToObject = (searchSrtring) => {
	const searchObject = {};
	const separetedString = searchSrtring.substring(1);
	const params = separetedString.split("&");
	params.forEach((element) => {
		const [key, value] = element.split("=");
		const parseentValue = parseInt(value, 10);
		searchObject[key] = parseentValue || value;
	});

	return searchObject;
};

export const objectToSearch = (params) => {
	let searchString = "";
	if (!params) return searchString;

	Object.entries(params).forEach(([key, value], index) => {
		if (value) {
			const symbol = !index ? "?" : "&";
			searchString += `${symbol}${key}=${value}`;
		}
	});
	return searchString;
};

export const getSearchParams = () => searcToObject(window.location.search);

export const updateSearchParams = (params) => {
	const url = new URL(window.location);
	if (params.filter) url.searchParams.set("filter", params.filter);
	if (params.limit) url.searchParams.set("limit", params.limit);
	if (params.search) {
		url.searchParams.set("search", params.search);
		url.searchParams.set("searchBy", "title");
	}
	if (params.sortBy) url.searchParams.set("sortBy", params.sortBy);
	if (params.sortOrder) url.searchParams.set("sortOrder", params.sortOrder);

	window.history.pushState(null, "", url.toString());
};

export const goToMovieDetails = (id) => {
	const url = new URL(window.location);
	url.pathname = `/movies/${id}`;

	window.history.pushState(null, "movie details", url.toString());
};
