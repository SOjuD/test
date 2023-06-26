import "@testing-library/jest-dom";

global.fetch = jest.fn().mockImplementationOnce(() =>
	Promise.resolve({
		json: () => Promise.resolve([]),
	})
);
