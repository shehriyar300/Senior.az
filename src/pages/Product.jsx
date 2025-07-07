"use client"

import { useState } from "react"
import "./product.css"

const Product = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPrice: "",
    rating: "",
  })

  const [selectedColor, setSelectedColor] = useState("#ff0000")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const colorPresets = [
    "#ff0000",
    "#ff8000",
    "#ffff00",
    "#80ff00",
    "#00ff00",
    "#00ff80",
    "#00ffff",
    "#0080ff",
    "#0000ff",
    "#8000ff",
    "#ff00ff",
    "#ff0080",
    "#000000",
    "#ffffff",
  ]

  return (
    <div className="product">
      <h1 className="page-title">Add</h1>

      <div className="product-form-container">
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              value={formData.title}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">description</label>
            <textarea
              id="description"
              name="description"
              placeholder="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-textarea"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">price</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="0"
              value={formData.price}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="discountPrice">discountPrice</label>
            <input
              type="number"
              id="discountPrice"
              name="discountPrice"
              placeholder="0"
              value={formData.discountPrice}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              placeholder="0"
              value={formData.rating}
              onChange={handleInputChange}
              className="form-input"
              min="0"
              max="5"
              step="0.1"
            />
          </div>
        </div>

        <div className="color-picker-section">
          <div className="color-picker-container">
            <div
              className="color-display"
              style={{ background: `linear-gradient(135deg, ${selectedColor} 0%, #000000 100%)` }}
            ></div>

            <div className="color-presets">
              {colorPresets.map((color, index) => (
                <button
                  key={index}
                  className={`color-preset ${selectedColor === color ? "active" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>

            <div className="color-inputs">
              <div className="color-input-group">
                <label>00000</label>
                <input type="text" value="0" readOnly />
              </div>
              <div className="color-input-group">
                <label>0</label>
                <input type="text" value="0" readOnly />
              </div>
              <div className="color-input-group">
                <label>0</label>
                <input type="text" value="0" readOnly />
              </div>
              <div className="color-input-group">
                <label>0</label>
                <input type="text" value="0" readOnly />
              </div>
              <div className="color-input-group">
                <label>100</label>
                <input type="text" value="100" readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
