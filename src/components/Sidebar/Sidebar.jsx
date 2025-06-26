"use client"

import { useAppContext } from "../../context/AppContext.jsx"
import "./Sidebar.css"

const Sidebar = () => {
  const { currentPage, dispatch, basket } = useAppContext()

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "⊞" },
    { id: "customers", label: "Customers", icon: "👥" },
    { id: "products", label: "Products-List", icon: "📋" },
    { id: "statistics", label: "Statistics", icon: "📊" },
    { id: "add-product", label: "Product", icon: "📦" },
    { id: "basket", label: "Basket", icon: "🛒", badge: basket.length },
    { id: "wishlist", label: "Wishlist", icon: "♡" },
  ]

  const handleMenuClick = (pageId) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: pageId })
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">
            <img src="./src/assets/seniorlogo_light.svg" alt="Logo" style={{ width: "200px", height: "100px" }} />
          </span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? "active" : ""}`}
            onClick={() => handleMenuClick(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {item.badge > 0 && <span className="nav-badge">{item.badge}</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
                     <img src="https://lh3.googleusercontent.com/a/ACg8ocKW6_6m6Z-liTaEUeKpuWykrBc-YSalQ6_nIlDPs2Kt1Fh7kHjn=s288-c-no" alt="User" className="user-avatar" />

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
