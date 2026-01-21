import dayjs from "dayjs";
import axios from "axios";
import { DeliveryOptions } from "./DeliveryOptions";
import { UpdateQuantity } from "./UpdateQuantity";
import { formatMoney } from "../../utils/money";


export function OrderSummary({ cart, deliveryOptions,loadCart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                })
                const deleteCartItem=async()=>{
                    await axios.delete(`/api/cart-items/${cartItem.productId}`);
                    await loadCart()
                }
                
                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {cartItem.product.name}
                                </div>
                                <div className="product-price">
                                    {formatMoney(cartItem.product.priceCents)}
                                </div>
                                <div className="product-quantity">
                                    <div className="product-quantity">
                                        <span>Quantity:</span>

                                        <UpdateQuantity
                                            cartItem={cartItem}
                                            loadCart={loadCart}
                                        />

                                        <span
                                            className="delete-quantity-link link-primary"
                                            onClick={deleteCartItem}
                                        >
                                            Delete
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};