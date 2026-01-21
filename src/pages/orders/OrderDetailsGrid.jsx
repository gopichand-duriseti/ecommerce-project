import dayjs from "dayjs"
import axios from "axios";
import { Fragment } from "react"

export function OrderDetailsGrid( {order,loadCart} ) {
    const addToCartFromOrders=async (productId)=>{
        await axios.post('api/cart-items',{ //Post to create data in the backend and we'll send data to backend using an object
            productId,// Request Body 
            quantity:1
        })
        await loadCart();
    };
    return (
        <div className="order-details-grid">
            {order.products.map((orderProduct) => {
                return (
                    <Fragment key={orderProduct.product.id}>
                        <div className="product-image-container">
                            <img src={orderProduct.product.image} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                                {orderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                                Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                            </div>
                            <div className="product-quantity">
                                Quantity: {orderProduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary">
                                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                <span className="buy-again-message" onClick={()=>addToCartFromOrders(orderProduct.productId)}>Add to Cart</span>
                            </button>
                        </div>

                        <div className="product-actions">
                            <a href="/tracking">
                                <button className="track-package-button button-secondary">
                                    Track package
                                </button>
                            </a>
                        </div>
                    </Fragment >
                )
            })}

            
        </div>
    )
}