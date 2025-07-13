import "./wishlist.css"
import { useAppContext } from "../context/AppContext.jsx"
import { useState } from "react"

const Wishlist = () => {
  const { wishlist: initialWishlist } = useAppContext()
  const [wishlist, setWishlist] = useState(initialWishlist)
  const handleRemoveFromWishlist = (itemId) => {
    setWishlist(wishlist.filter(item => item.id !== itemId))
  }

  return (
    wishlist.length > 0 ? (
      <div className="wishlist-page">
        <h1 className="page-title">Wishlist</h1>
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div className="wishlist-item" key={item.id}>
              <img src={item.image} alt={item.title} className="wishlist-item-image" />
              <div className="wishlist-item-details">
                <h3 className="wishlist-item-title">{item.title}</h3>
                <p className="wishlist-item-price">${item.price}</p>
                <button className="wishlist-item-remove" onClick={() => handleRemoveFromWishlist(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="wishlist-page">
        <h1 className="page-title">Wishlist</h1>
        <div className="empty-state">
          <div className="empty-icon">♡</div>
          <h3>Your wishlist is empty</h3>
          <p>Save items you love for later</p>
        </div>
      </div>
    )
  )
}

export default Wishlist
