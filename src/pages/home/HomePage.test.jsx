import { it, expect, describe, vi, beforeEach } from 'vitest'; //vi for creating a fake function
import { render, screen,within } from '@testing-library/react'; //It renders a component in a dake web page 
//screen check the fake web page everything was rendered correctly or not
//within used to test specific product
import { MemoryRouter } from 'react-router'; //It is specifically for testing
import axios from 'axios';
import { HomePage } from './HomePage' 

vi.mock('axios')
describe('HomePage component', () => {

    let loadCart;

    beforeEach(() => {
        loadCart = vi.fn();

        axios.get.mockImplementation(async(urlPath) => {
            if (urlPath === '/api/products') {
                return {
                    data: [{
                        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
                        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                        rating: {
                            stars: 4.5,
                            count: 87
                        },
                        priceCents: 1090,
                        keywords: ["socks", "sports", "apparel"]
                    },
                    {
                        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                        image: "images/products/intermediate-composite-basketball.jpg",
                        name: "Intermediate Size Basketball",
                        rating: {
                            stars: 4,
                            count: 127
                        },
                        priceCents: 2095,
                        keywords: ["sports", "basketballs"]
                    },]
                }
            }
        })//Mock the implementation = make the mock do whatever we want
    })
    it('displays the product correct', async() => {
        render(
        <MemoryRouter>
            <HomePage cart={[]} loadCart={loadCart} />
        </MemoryRouter>
        )
        const productContainers=await screen.findAllByTestId('product-container')
        //find is same like get but it wait until it finds an element,this is useful when we have to wait for a component to load

        expect(productContainers.length).toBe(2)

        expect(
        within(productContainers[0]).getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
        ).toBeInTheDocument();
        //Testing the text in the first product([0]) of data 

        expect(
        within(productContainers[1]).getByText("Intermediate Size Basketball")
        ).toBeInTheDocument();
        
    });
});