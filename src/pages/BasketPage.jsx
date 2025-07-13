import { Link } from "react-router-dom"
import "./basket-page.css"

const BasketPage = () => {
  return (
    <div className="basket-page">
      <h1 className="page-title">Basket</h1>
      <div className="empty-state">
        <div className="empty-icon">🛒</div>
        <h3>Your basket is empty</h3>
        <p>Add some products to get started</p>
      </div>
    </div>
  )
}

export default BasketPage
