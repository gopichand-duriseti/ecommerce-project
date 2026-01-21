import { useState } from "react";
import axios from "axios";

export function UpdateQuantity({ cartItem, loadCart }) {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [editing, setEditing] = useState(false);

  const updateCartItem = async () => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity
    });
    await loadCart();
    setEditing(false); // close input after update
  };

  return (
    <>
      {/* READ MODE */}
      {!editing && (
        <span className="quantity-label">
          {quantity}
        </span>
      )}

      {/* EDIT MODE */}
      {editing && (
        <input
          type="number"
          min={1}
          value={quantity}
          autoFocus
          onChange={(e) => setQuantity(Number(e.target.value))}
          onBlur={updateCartItem}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateCartItem();
            }
          }}
          className="quantity-input"
        />
      )}

      {/* UPDATE LINK */}
      <span
        className="update-quantity-link link-primary"
        onClick={() => setEditing(true)}
      >
        Update
      </span>
    </>
  );
}
