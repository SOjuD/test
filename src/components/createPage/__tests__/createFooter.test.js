import { getByTestId } from "@testing-library/dom";
import { createFooter } from "../createFooter";

describe("createFooter", () => {
	test("should to be in the document", () => {
		const container = document.createElement("div");
		document.body.appendChild(container);

		createFooter(container);
		expect(getByTestId(document.body, "footer")).toBeInTheDocument();
	});
});
