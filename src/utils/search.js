export const searchToObject = (searchString) => {
	const searchObj = {};
	const separetedString = searchString.substring(1);
	const params = separetedString.split("&");
	params.forEach((element) => {
		const [key, value] = element.split("=");
		searchObj[key] = value;
	});

	return searchObj;
};

export const objToSearch = (obj) => "?limit=200";

export const updateSearchParams = (params) => {
	const url = new URL(window.location);

	if (params.filter) url.searchParams.set("filter", params.filter);
	if (params.search) url.searchParams.set("search", params.search);
	if (params.sortBy) url.searchParams.set("sortBy", params.sortBy);
	if (params.sortOrder) url.searchParams.set("sortOrder", params.sortOrder);

	window.history.pushState(null, "", url.toString());
};
