import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import '@testing-library/jest-dom';

import ResturantMenu from "../components/ResturantMenu";
import MOCK_DATA from './mockData/resMenuList.json';
import { Provider } from "react-redux";
import appStore from '../store/appStore';
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from '../components/Cart';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => { return Promise.resolve(MOCK_DATA) }
    })
})
it("Should load restaurants menu list component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <ResturantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>);
    }
    );

    const accordianMenu = screen.getByText("Add--ons");
    fireEvent.click(accordianMenu);
    
    const foodItems = screen.getAllByTestId("fooditems");
    console.log(foodItems.length);
    expect(foodItems.length).toBe(2);

    const addBtn = screen.getAllByRole('button', { name: "Add +" });
    fireEvent.click(addBtn[0]);

    expect(screen.getByText('Cart 1 - items')).toBeInTheDocument();

    fireEvent.click(addBtn[1]);

    expect(screen.getByText('Cart 2 - items')).toBeInTheDocument();

    expect(screen.getAllByTestId("fooditems").length).toBe(4);

    fireEvent.click(screen.getByRole("button" , {name:"Clear cart"}));

    expect(screen.getAllByTestId("fooditems").length).toBe(2);

    expect(screen.getByText('Cart - items')).toBeInTheDocument();

})