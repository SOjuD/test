import { screen } from "@testing-library/dom";
import { createFooter } from "../createFooter";

describe("createFooter", () => {
	test("should to be in the document", () => {
		const container = document.createElement("div");

		createFooter(container);

		expect(screen.queryByTestId("footer")).toBeInTheDocument();
	});
});
