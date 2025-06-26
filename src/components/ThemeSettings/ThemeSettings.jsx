"use client"

import { useAppContext } from "../../context/AppContext.jsx"
import "./ThemeSettings.css"

const ThemeSettings = ({ onClose }) => {
  const { theme, accentColor, dispatch } = useAppContext()

  const handleThemeChange = (newTheme) => {
    dispatch({ type: "SET_THEME", payload: newTheme })
  }

  const handleAccentColorChange = (newColor) => {
    dispatch({ type: "SET_ACCENT_COLOR", payload: newColor })
  }

  const accentColors = [
    { id: "blue", name: "Blue", color: "#3b82f6" },
    { id: "red", name: "Red", color: "#ef4444" },
    { id: "cyan", name: "Cyan", color: "#06b6d4" },
    { id: "green", name: "Green", color: "#10b981" },
    { id: "orange", name: "Orange", color: "#f59e0b" },
  ]

  return (
    <div className="theme-settings-overlay" onClick={onClose}>
      <div className="theme-settings" onClick={(e) => e.stopPropagation()}>
        <div className="theme-settings-header">
          <h3>Theme Settings</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="theme-settings-content">
          <div className="setting-group">
            <label className="setting-label">Choose Mode</label>
            <div className="theme-options">
              <button
                className={`theme-option ${theme === "light" ? "active" : ""}`}
                onClick={() => handleThemeChange("light")}
              >
                <span className="theme-icon">☀️</span>
                <span>Light</span>
              </button>
              <button
                className={`theme-option ${theme === "dark" ? "active" : ""}`}
                onClick={() => handleThemeChange("dark")}
              >
                <span className="theme-icon">🌙</span>
                <span>Dark</span>
              </button>
            </div>
          </div>

          <div className="setting-group">
            <label className="setting-label">Choose Color Theme</label>
            <div className="color-options">
              {accentColors.map((color) => (
                <button
                  key={color.id}
                  className={`color-option ${accentColor === color.id ? "active" : ""}`}
                  onClick={() => handleAccentColorChange(color.id)}
                >
                  <span className="color-dot" style={{ backgroundColor: color.color }}></span>
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings
