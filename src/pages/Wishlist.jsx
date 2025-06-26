import "./wishlist.css"

const Wishlist = () => {
  return (
    <div className="wishlist-page">
      <h1 className="page-title">Wishlist</h1>
      <div className="empty-state">
        <div className="empty-icon">♡</div>
        <h3>Your wishlist is empty</h3>
        <p>Save items you love for later</p>
      </div>
    </div>
  )
}

export default Wishlist
