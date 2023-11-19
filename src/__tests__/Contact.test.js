import { screen ,render} from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

//basic unit testing cases 
//test or it is same
describe("Contact us page test cases", () => {
    test("Should load contact component on render", () => {
        render(<ContactUs />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();

    });

    it("Should load button inside Contact component", () => {
        render(<ContactUs />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();

    });

    test("Should load input name inside Contact component", () => {
        render(<ContactUs />);

        const input = screen.getByPlaceholderText("Name");

        expect(input).toBeInTheDocument();

    });

    test("Should load all input boxes inside Contact component", () => {
        render(<ContactUs />);

        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes);
        expect(inputBoxes.length).toBe(2);

    });
})
