import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from '../store/appStore';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Should render Header component", () => {
    // beforeAll(()=>{console.log('before all test case')});
    // beforeEach(() => { console.log('before each test case') });
    // afterAll(() => { console.log('after all') });
    // afterEach(() => { console.log('after each') });
    it("Should load Login component", () => { 
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
});
it("Should load login button", () => { 
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', {name:'Login'});
    expect(loginButton).toBeInTheDocument();
});

it("Should load cart with 0 items", () => { 
    render(
        <BrowserRouter >
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText('Cart - items');
    expect(cart).toBeInTheDocument();
});

    it("Should load cart", () => {
        render(
            <BrowserRouter >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cart = screen.getByText(/Cart/);
        expect(cart).toBeInTheDocument();
    });
    
     it("Should change login button to logout on click of button", () => {
        render(
            <BrowserRouter >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

         const loginButton = screen.getByRole('button', { name: 'Login' });
         
         fireEvent.click(loginButton);

         const logoutButton = screen.getByRole('button', { name: 'Logout' });

        expect(logoutButton).toBeInTheDocument();
    });
    
})
