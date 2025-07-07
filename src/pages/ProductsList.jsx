import "./products-list.css"

const ProductsList = () => {
  const products = [
 
    {
      "id": "1b5a",
      "title": "neww",
      "description": "ssasadad",
      "price": "100",
      "discountPrice": "20",
      "rating": "20",
      "stock": "10",
      "category": "Phone",
      "image": "https://images.unsplash.com/photo-1682685796965-9814afcbff55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "create_at": 1714316506132,
      "color": "#000"
    },
    {
      "id": "c2b5",
      "title": "ndssfds",
      "description": "fsfdfsd",
      "price": "20",
      "discountPrice": "5",
      "rating": "10",
      "stock": "5",
      "category": "Phone",
      "image": "https://images.unsplash.com/photo-1682685796965-9814afcbff55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "create_at": 1714382758344,
      "color": "#000"
    },
    {
      "id": "a2f4",
      "title": "new",
      "description": "neww",
      "price": "10",
      "discountPrice": "5",
      "rating": "6",
      "stock": "9",
      "category": "Phone",
      "image": "https://images.unsplash.com/photo-1682685796965-9814afcbff55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "create_at": 1716025970977,
      "color": "#ef1616"
    },
    {
      "id": "6e44",
      "title": "mobile",
      "description": "test",
      "price": "98",
      "discountPrice": "100",
      "rating": "8",
      "stock": "5",
      "category": "Phone",
      "image": "https://thumbs.dreamstime.com/b/brand-new-realistic-mobile-phone-black-smartphone-apple-iphone-vector-eps-100341904.jpg",
      "create_at": 1749749724611,
      "color": "#000"
    },
    {
      "id": "597a",
      "title": "mobile",
      "description": "test 2",
      "price": "100",
      "discountPrice": "40",
      "rating": "9",
      "stock": "2",
      "category": "Phone",
      "image": "https://thumbs.dreamstime.com/b/brand-new-realistic-mobile-phone-black-smartphone-apple-iphone-vector-eps-100341904.jpg",
      "create_at": 1749749724611,
      "color": "#000"
    },
    {
      "id": "4fbf",
      "title": "notebook",
      "description": "test notebook",
      "price": "100",
      "discountPrice": "10",
      "rating": "5",
      "stock": "6",
      "category": "Techn",
      "image": "https://texnomart.az/wp-content/uploads/2021/12/texnomart-Notebook-HP-250-G8-Core-i5-1035G1-tvs70eqz8km3f14olbij.jpg",
      "create_at": 1749752637495,
      "color": "#000000"
    },
    {
      "id": "24bc",
      "title": "computer",
      "description": "comp test",
      "price": 1000,
      "discountPrice": 98,
      "finalPrice": 902,
      "rating": 5.5,
      "stock": -1,
      "category": "Techn",
      "image": "https://thumbs.dreamstime.com/b/brand-new-realistic-mobile-phone-black-smartphone-apple-iphone-vector-eps-100341904.jpg",
      "create_at": 1749823008526,
      "color": "#000"
    },
    {
      "id": "8f7e",
      "title": "test",
      "description": "test",
      "price": 10,
      "discountPrice": 3,
      "finalPrice": 7,
      "rating": 2,
      "stock": 1,
      "category": "Phone",
      "image": "https://thumbs.dreamstime.com/b/brand-new-realistic-mobile-phone-black-smartphone-apple-iphone-vector-eps-100341904.jpg",
      "create_at": 1749823008526,
      "color": "#000"
    },
    {
      "id": "6861",
      "title": "test",
      "description": "test",
      "price": 10,
      "discountPrice": 2,
      "finalPrice": 8,
      "rating": 5,
      "stock": 1,
      "category": "Phone",
      "image": "https://texnomart.az/wp-content/uploads/2021/12/texnomart-Notebook-HP-250-G8-Core-i5-1035G1-tvs70eqz8km3f14olbij.jpg",
      "create_at": 1749823008526,
      "color": "#000"
    },
    {
      "id": "67ee",
      "title": "gfd",
      "description": "test notebook",
      "price": 15,
      "discountPrice": 5,
      "finalPrice": 10,
      "rating": 2,
      "stock": 4,
      "category": "Phone",
      "image": "https://texnomart.az/wp-content/uploads/2021/12/texnomart-Notebook-HP-250-G8-Core-i5-1035G1-tvs70eqz8km3f14olbij.jpg",
      "create_at": 1749823008526,
      "color": "#000"
    },
    {
      "id": "5a1d",
      "title": "IPhone 16",
      "description": "Apple Ios 26",
      "price": 2600,
      "discountPrice": 500,
      "finalPrice": 2100,
      "rating": 9,
      "stock": 15,
      "category": "Mobile",
      "image": "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg",
      "create_at": 1749904798208,
      "color": "#d0021b"
    },

  ]

  return (
    <div className="products-list">
      <div className="products-header">
        <h1 className="page-title">Products-List</h1>
        <div className="header-controls">
          <button className="add-btn">+</button>
          <button className="control-btn">
            <span>📋</span> Columns
            <span>▼</span>
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>PRICE</th>
              <th>DISCOUNTPRICE</th>
              <th>RATING</th>
              <th>STOCK</th>
              <th>CATEGORY</th>
              <th>IMAGE</th>
              <th>CREATE AT</th>
              <th>COLOR</th>
              <th>INFO</th>
              <th>DELETE</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="title-cell">{product.title}</td>
                <td className="description-cell">{product.description}</td>
                <td>{product.price}</td>
                <td>{product.discountPrice}</td>
                <td>{product.rating}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                <td>
                  <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" />
                </td>
                <td className="date-cell">{product.createAt}</td>
                <td>
                  <div className="color-indicator" style={{ backgroundColor: product.color }}></div>
                  {product.color}
                </td>
                <td>
                  <button className="info-btn">ℹ️</button>
                </td>
                <td>
                  <button className="delete-btn">🗑️</button>
                </td>
                <td>
                  <button className="edit-btn">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="pagination-info">
          <select className="page-size">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span>1 to 5 from 5</span>
        </div>
        <div className="pagination-controls">
          <button className="page-btn active">1</button>
        </div>
      </div>
    </div>
  )
}

export default ProductsList
