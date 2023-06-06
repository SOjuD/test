export const parseDate = (data) => {
	const parsed = data.split("-");
	return {
		year: parsed[0],
		month: [1],
		day: [2],
	};
};
