import "./products-list.css"

const ProductsList = () => {
  const products = [
    {
      id: "1b5a",
      title: "neww",
      description: "ssasadad",
      price: 100,
      discountPrice: 20,
      rating: 20,
      stock: 10,
      category: "Phone",
      image: "/placeholder.svg?height=40&width=40",
      createAt: "a year ago",
      color: "#000",
    },
    {
      id: "c2b5",
      title: "ndssfs",
      description: "fsfdsfd",
      price: 20,
      discountPrice: 5,
      rating: 10,
      stock: 5,
      category: "Phone",
      image: "/placeholder.svg?height=40&width=40",
      createAt: "a year ago",
      color: "#000",
    },
    {
      id: "a2f4",
      title: "new",
      description: "neww",
      price: 10,
      discountPrice: 5,
      rating: 6,
      stock: 9,
      category: "Phone",
      image: "/placeholder.svg?height=40&width=40",
      createAt: "a year ago",
      color: "#ef1616",
    },
    {
      id: "6e44",
      title: "mobile",
      description: "test",
      price: 98,
      discountPrice: 100,
      rating: 8,
      stock: 5,
      category: "Phone",
      image: "/placeholder.svg?height=40&width=40",
      createAt: "an hour ago",
      color: "#000",
    },
    {
      id: "597a",
      title: "mobile",
      description: "test 2",
      price: 100,
      discountPrice: 40,
      rating: 9,
      stock: 2,
      category: "Phone",
      image: "/placeholder.svg?height=40&width=40",
      createAt: "an hour ago",
      color: "#000",
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
