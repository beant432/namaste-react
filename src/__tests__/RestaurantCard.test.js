import { screen,render } from "@testing-library/react";
import ResturantCard, { withPromtedLabelRestaurant } from "../components/Body/RestaurantCard"
import "@testing-library/jest-dom";
import  MOCK_DATA  from "./mockData/mockData";

it("Should load Restaurent Crad with prop data", () => {
    render(<ResturantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Subway");

    expect(name).toBeInTheDocument();
});

it("Should load Promoted Label Restaurent Crad with prop data", () => {
        const ResturantWithPromoted = withPromtedLabelRestaurant(ResturantCard);

    render(<ResturantWithPromoted resData={MOCK_DATA}/>);

    const name = screen.getByText("Subway");

    expect(name).toBeInTheDocument();
})