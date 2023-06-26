import { sum } from "../index";

describe("index", () => {
	test("sum", () => {
		const result = sum(2, 5);

		expect(result).toBe(5);
	});
});
