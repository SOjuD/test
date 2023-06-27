import { fireEvent, getByRole } from "@testing-library/dom";
import { updateMoviesState } from "../../../api";
import { createMoreButton } from "../createButton";

jest.mock("../../../api", () => ({
	...jest.requireActual("../../../api"),
	updateMoviesState: jest.fn(),
}));

describe("createButton", () => {
	test("should render in provided container", () => {
		const container = document.createElement("div");
		document.body.appendChild(container);

		createMoreButton(container);

		expect(getByRole(container, "button")).toBeInTheDocument();
	});

	test("should fetch movies when click", () => {
		const container = document.createElement("div");
		document.body.appendChild(container);

		createMoreButton(container);
		const button = getByRole(container, "button");

		fireEvent.click(button);

		expect(updateMoviesState).toHaveBeenCalled();
	});
});
