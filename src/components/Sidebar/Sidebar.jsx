"use client"

import { Link, useLocation } from "react-router-dom"
import { useAppContext } from "../../context/AppContext.jsx"
import "./Sidebar.css"

const Sidebar = () => {
  const location = useLocation()
  const { basket } = useAppContext()

  const menuItems = [
    { path: "/", label: "Dashboard", icon: "⊞" },
    { path: "/customers", label: "Customers", icon: "👥" },
    { path: "/products", label: "Products-List", icon: "📋" },
    { path: "/statistics", label: "Statistics", icon: "📊" },
    { path: "/add-product", label: "Product", icon: "📦" },
    { path: "/basket", label: "Basket", icon: "🛒", badge: basket.length },
    { path: "/wishlist", label: "Wishlist", icon: "♡" },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">
            <img
              src="./src/assets/seniorlogo_light.svg"
              alt="Logo"
              style={{ width: "200px", height: "100px" }}
            />
          </span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive(item.path) ? "active" : ""}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.badge > 0 && (
              <span className="nav-badge">{item.badge}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocKW6_6m6Z-liTaEUeKpuWykrBc-YSalQ6_nIlDPs2Kt1Fh7kHjn=s288-c-no"
            alt="User"
            className="user-avatar"
          />
          <div className="user-details">
            <span className="user-name">Shahriyar Alasgarli</span>
            <span className="user-role">Administrator</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
