import { sum } from "../index";

// jest.mock("../index", () => ({
// 	...jest.requireActual("../index"),
// 	renderHomepage: jest.fn(),
// }));

describe("index", () => {
	test("sum", () => {
		const result = sum(2, 5);

		expect(result).toBe(7);
	});
});
