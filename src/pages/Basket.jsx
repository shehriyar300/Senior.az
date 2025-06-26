"use client"

import { useAppContext } from "../context/AppContext.jsx"
import "./Basket.css"

const Basket = () => {
  const { basket, dispatch } = useAppContext()

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch({ type: "REMOVE_FROM_BASKET", payload: productId })
    } else {
      dispatch({
        type: "UPDATE_BASKET_QUANTITY",
        payload: { id: productId, quantity: newQuantity },
      })
    }
  }

  const removeItem = (productId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: productId })
  }

  const clearBasket = () => {
    if (window.confirm("Are you sure you want to clear the basket?")) {
      dispatch({ type: "CLEAR_BASKET" })
    }
  }

  const getTotalPrice = () => {
    return basket.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return basket.reduce((total, item) => total + item.quantity, 0)
  }

  const getShipping = () => {
    const total = getTotalPrice()
    return total > 100 ? 0 : 10
  }

  const getTax = () => {
    return getTotalPrice() * 0.08
  }

  const getFinalTotal = () => {
    return getTotalPrice() + getShipping() + getTax()
  }

  if (basket.length === 0) {
    return (
      <div className="basket">
        <div className="page-header">
          <h1>Shopping Basket</h1>
          <p>Your basket is currently empty</p>
        </div>
        <div className="empty-basket">
          <div className="empty-icon">🛒</div>
          <h3>Your basket is empty</h3>
          <p>Add some products to get started</p>
          <button
            className="continue-shopping-btn"
            onClick={() => dispatch({ type: "SET_CURRENT_PAGE", payload: "products" })}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="basket">
      <div className="page-header">
        <div className="header-content">
          <h1>Shopping Basket</h1>
          <p>{getTotalItems()} items in your basket</p>
        </div>
        <button className="clear-basket-btn" onClick={clearBasket}>
          Clear Basket
        </button>
      </div>

      <div className="basket-container">
        <div className="basket-items">
          <div className="items-header">
            <h2>Items ({basket.length})</h2>
          </div>

          {basket.map((item) => (
            <div key={item.id} className="basket-item">
              <div className="item-image">
                <img src={item.image || "/placeholder.svg"} alt={item.name} />
              </div>

              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="item-category">{item.category}</span>
              </div>

              <div className="item-price">
                <span className="price">${item.price}</span>
                <span className="price-label">each</span>
              </div>

              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>

              <div className="item-total">
                <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>

              <button className="remove-btn" onClick={() => removeItem(item.id)} title="Remove item">
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="basket-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>

            <div className="summary-section">
              <div className="summary-row">
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>{getShipping() === 0 ? "Free" : `$${getShipping().toFixed(2)}`}</span>
              </div>

              <div className="summary-row">
                <span>Tax (8%)</span>
                <span>${getTax().toFixed(2)}</span>
              </div>

              {getShipping() === 0 && <div className="free-shipping-notice">🎉 You qualify for free shipping!</div>}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total">
              <span>Total</span>
              <span>${getFinalTotal().toFixed(2)}</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>

            <button
              className="continue-shopping-btn secondary"
              onClick={() => dispatch({ type: "SET_CURRENT_PAGE", payload: "products" })}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket
