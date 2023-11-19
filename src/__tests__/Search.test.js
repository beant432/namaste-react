import { fireEvent, render , screen} from "@testing-library/react"
import Body from '../components/Body/index';
import MOCK_DATA from './mockData/resMockData.json';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("Should search res list for burger text input", async () => {
    await act(
        async () =>
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            ));
    
     const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(10);


    const searchBtn = screen.getByRole('button', { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value :"Burger"} });

    fireEvent.click(searchBtn);

    const searchCards = screen.getAllByTestId("resCard");
    expect(searchCards.length).toBe(1);
    
})

it("Should filter top rated", async () => {
    await act(
        async () =>
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            ));
    

    const filterBtn = screen.getByRole('button', { name: "Filter by top Rating" });

    fireEvent.click(filterBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(8);
    
});

it("should have username input", async () => {
    await act(
        async () =>
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            ));
    const userInput = screen.getByTestId("userInput");

    fireEvent.change(userInput, { target: { value: "Dummy User" } });
    expect(userInput).toBeInTheDocument();
});