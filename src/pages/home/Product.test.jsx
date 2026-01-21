import { it, expect, describe, vi, beforeEach } from 'vitest'; //vi for creating a fake function
import { render, screen } from '@testing-library/react'; //It renders a component in a dake web page 
import userEvent from '@testing-library/user-event'; //Simulate evnts like click
import axios from 'axios';
import { Product } from './Product' //screen check the fake web page everything was rendered correctly or not

vi.mock('axios');//Will use fake version of axios
describe('Product component', () => {
    let product;
    let loadCart;
    // render display component on the page
    /* Here we have to give loadCart prop but it is in contact with backend,we should not use real backend data 
    Hence we mock(create a fake version of this function) the data*/
    beforeEach(()=>{ 
        product={
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
            stars: 4.5,
            count: 87
        },
        priceCents: 1090,
        keywords: ["socks", "sports", "apparel"]
    };// It runs some code before each test ,It is test hook for setup/clean-up
    loadCart= vi.fn();
    })
    it('displays the product details correctly', () => {
        render(<Product product={product} loadCart={loadCart} />);
        expect(screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")).toBeInTheDocument();

        expect(
            screen.getByText('$10.90')
        ).toBeInTheDocument();

        expect(
            screen.getByTestId('product-image')
        ).toHaveAttribute('src', "images/products/athletic-cotton-socks-6-pairs.jpg");

        expect(
            screen.getByTestId('product-rating-image')
        ).toHaveAttribute('src', 'images/ratings/rating-45.png');

        expect(
            screen.getByText('87')
        ).toBeInTheDocument()
    });
    it('adds a product to the cart', async () => {
        render(<Product product={product} loadCart={loadCart} />);

        const user = userEvent.setup();
        const addToCartButton = screen.getByTestId('add-to-cart-button');
        await user.click(addToCartButton);

        expect(axios.post).toHaveBeenCalledWith(
            '/api/cart-items',
            {
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 1
            }
        );
        expect(loadCart).toHaveBeenCalled();
    })
})