"use client";

import { useState } from "react";
import { useAppContext } from "../context/useAppContext.jsx";

import "./ProductList.css";

const ProductList = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const { products, wishlist, dispatch } = useAppContext();

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product?.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setEditForm(product);
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`http://localhost:3001/initialProducts/${editForm.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      if (!res.ok) throw new Error("Failed to update product");

      dispatch({ type: "UPDATE_PRODUCT", payload: editForm });
      setEditingProduct(null);
      setEditForm({});
    } catch (err) {
      alert("Error updating product: " + err.message);
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setEditForm({});
  };

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`http://localhost:3001/initialProducts/${productId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");

      dispatch({ type: "DELETE_PRODUCT", payload: productId });
    } catch (err) {
      alert("Error deleting product: " + err.message);
    }
  };

  const handleAddToBasket = (product) => {
    dispatch({ type: "ADD_TO_BASKET", payload: product });
  };

  const handleInputChange = (field, value) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleWishlistToggle = (product) => {
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  };

  return (
    <div className="product-list">
      <div className="page-header">
        <div className="header-content">
          <h1>Products</h1>
          <p>Manage your product inventory</p>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-value">{products.length}</span>
            <span className="stat-label">Total Products</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">
              {products.reduce((sum, p) => ~~sum + ~~p.stock, 0)}
            </span>
            <span className="stat-label">Total Stock</span>
          </div>
        </div>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="category-filter"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "all" ? "All Categories" : category}
            </option>
          ))}
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
              />
              <div className="product-actions">
                <button
                  className="action-btn edit"
                  onClick={() => handleEdit(product)}
                  title="Edit Product"
                >
                  ✏️
                </button>
                <button
                  className="action-btn delete"
                  onClick={() => handleDelete(product.id)}
                  title="Delete Product"
                >
                  🗑️
                </button>
                <button
                  className="action-btn add-to-cart"
                  onClick={() => handleAddToBasket(product)}
                  title="Add to Basket"
                >
                  🛒
                </button>
                <button
                  className="action-btn wishlist"
                  onClick={() => handleWishlistToggle(product)}
                  title={
                    wishlist.some((item) => item.id === product.id)
                      ? "Remove from Wishlist"
                      : "Add to Wishlist"
                  }
                >
                  {wishlist.some((item) => item.id === product.id)
                    ? "💔"
                    : "❤️"}
                </button>
              </div>
            </div>

            <div className="product-info">
              {editingProduct === product.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="edit-input"
                    placeholder="Product name"
                  />
                  <textarea
                    value={editForm.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    className="edit-textarea"
                    rows="2"
                    placeholder="Description"
                  />
                  <div className="edit-row">
                    <input
                      type="number"
                      value={editForm.price}
                      onChange={(e) => handleInputChange("price", parseFloat(e.target.value))}
                      className="edit-input"
                      placeholder="Price"
                    />
                    <input
                      type="number"
                      value={editForm.stock}
                      onChange={(e) => handleInputChange("stock", parseInt(e.target.value))}
                      className="edit-input"
                      placeholder="Stock"
                    />
                  </div>
                  <input
                    type="text"
                    value={editForm.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="edit-input"
                    placeholder="Category"
                  />
                  <div className="edit-actions">
                    <button className="save-btn" onClick={handleSave}>
                      Save
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-details">
                    <span className="product-price">${product.price}</span>
                    <span className="product-category">{product.category}</span>
                  </div>
                  <div className="product-stock">
                    <span
                      className={`stock-badge ${
                        product.stock < 10 ? "low" : "normal"
                      }`}
                    >
                      {product.stock} in stock
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">📦</div>
          <h3>No products found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
