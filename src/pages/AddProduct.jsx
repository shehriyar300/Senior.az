"use client";

import { useState } from "react";
import { useAppContext } from "../context/useAppContext.jsx";
import "./AddProduct.css";

const AddProduct = () => {
  const { dispatch } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Garden",
    "Sports",
    "Toys",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.price || formData.price <= 0)
      newErrors.price = "Valid price is required";
    if (!formData.category)
      newErrors.category = "Category is required";
    if (!formData.stock || formData.stock < 0)
      newErrors.stock = "Valid stock quantity is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const newProduct = {
      id: crypto.randomUUID().slice(0, 4), // qısa id
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      discountPrice: Math.floor(Math.random() * 20) + 1,
      rating: Math.floor(Math.random() * 5) + 1,
      stock: parseInt(formData.stock),
      category: formData.category,
      image: formData.image || "https://via.placeholder.com/150",
      create_at: Date.now(),
      color: "#000",
    };

    try {
      const res = await fetch("http://localhost:3001/initialProducts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) throw new Error("Failed to save product to database");

      dispatch({ type: "ADD_PRODUCT", payload: newProduct });

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        image: "",
      });

      alert("Product added successfully!");
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-product">
      <div className="page-header">
        <h1>Add New Product</h1>
        <p>Create a new product for your store</p>
      </div>

      <div className="add-product-container">
        <div className="product-form-section">
          <form onSubmit={handleSubmit} className="product-form">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Product Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input ${errors.name ? "error" : ""}`}
                placeholder="Enter product name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={`form-textarea ${errors.description ? "error" : ""}`}
                placeholder="Enter product description"
                rows="4"
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            {/* price & stock */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Price ($) *</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className={`form-input ${errors.price ? "error" : ""}`}
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                />
                {errors.price && <span className="error-message">{errors.price}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="stock">Stock Quantity *</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className={`form-input ${errors.stock ? "error" : ""}`}
                  min="0"
                  placeholder="0"
                />
                {errors.stock && <span className="error-message">{errors.stock}</span>}
              </div>
            </div>

            {/* category */}
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`form-select ${errors.category ? "error" : ""}`}
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && <span className="error-message">{errors.category}</span>}
            </div>

            {/* image */}
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Enter image URL"
                className="form-input"
              />
            </div>

            <button type="submit" disabled={isSubmitting} className={`submit-btn ${isSubmitting ? "loading" : ""}`}>
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Adding Product...
                </>
              ) : (
                "Add Product"
              )}
            </button>
          </form>
        </div>

        {/* Preview */}
        <div className="product-preview-section">
          <div className="preview-card">
            <h3>Product Preview</h3>
            <div className="preview-content">
              <div className="preview-image">
                <img src={formData.image || "/placeholder.svg"} alt="Product preview" />
              </div>
              <div className="preview-info">
                <h4>{formData.name || "Product Name"}</h4>
                <p>{formData.description || "Product description will appear here..."}</p>
                <div className="preview-details">
                  <span className="preview-price">${formData.price || "0.00"}</span>
                  <span className="preview-category">{formData.category || "Category"}</span>
                </div>
                <div className="preview-stock">
                  <span className="stock-info">{formData.stock || "0"} in stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* add-product-container */}
    </div>
  );
};

export default AddProduct;
