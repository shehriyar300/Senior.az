"use client"

import { useState, useEffect, useRef } from "react"
import { useAppContext } from "../../context/AppContext.jsx"
import ThemeSettings from "../ThemeSettings/ThemeSettings.jsx"
import "./Header.css"

const Header = () => {
  const { notifications, recentActions, dispatch } = useAppContext()
  const [activeDropdown, setActiveDropdown] = useState(null) // 'notifications' | 'recentActions' | 'theme' | null

  const dropdownRef = useRef(null)

  // Qırağa klik olduqda bağla
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const unreadNotifications = notifications.filter((n) => !n.read)

  const handleNotificationClick = (id) => {
    dispatch({ type: "MARK_NOTIFICATION_READ", payload: id })
  }

  const markAllAsRead = () => {
    dispatch({ type: "MARK_ALL_NOTIFICATIONS_READ" })
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "order": return "📦"
      case "warning": return "⚠️"
      case "message": return "💬"
      case "info": return "ℹ️"
      default: return "🔔"
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title"></div>

        <div className="header-actions" ref={dropdownRef}>
          {/* Recent Actions */}
          <div className="action-item">
            <button
              className="action-btn"
              title="Recent Actions"
              onClick={(e) => {
                e.stopPropagation()
                setActiveDropdown(activeDropdown === "recentActions" ? null : "recentActions")
              }}
            >
              <span className="action-icon">📋</span>
              {recentActions.length > 0 && (
                <span className="action-badge">{recentActions.length}</span>
              )}
            </button>

            {activeDropdown === "recentActions" && (
              <div className="dropdown recent-actions-dropdown">
                <div className="dropdown-header">
                  <h3>Recent Actions</h3>
                </div>
                <div className="dropdown-content">
                  {recentActions.length > 0 ? recentActions.map((action) => (
                    <div key={action.id} className="recent-action-item">
                      <div className="action-content">
                        <p>{action.action}</p>
                        <span className="action-time">{action.time}</span>
                      </div>
                    </div>
                  )) : (
                    <div className="empty-state">
                      <p>No recent actions</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="action-item">
            <button
              className="action-btn"
              title="Notifications"
              onClick={(e) => {
                e.stopPropagation()
                setActiveDropdown(activeDropdown === "notifications" ? null : "notifications")
              }}
            >
              <span className="action-icon">🔔</span>
              {unreadNotifications.length > 0 && (
                <span className="action-badge">{unreadNotifications.length}</span>
              )}
            </button>

            {activeDropdown === "notifications" && (
              <div className="dropdown notifications-dropdown">
                <div className="dropdown-header">
                  <h3>Notifications</h3>
                  {unreadNotifications.length > 0 && (
                    <button className="mark-all-read" onClick={markAllAsRead}>
                      Mark all as read
                    </button>
                  )}
                </div>
                <div className="dropdown-content">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`notification-item ${n.read ? "read" : "unread"}`}
                      onClick={() => handleNotificationClick(n.id)}
                    >
                      <div className="notification-icon">{getNotificationIcon(n.type)}</div>
                      <div className="notification-content">
                        <p>{n.message}</p>
                        <span className="notification-time">{n.time}</span>
                      </div>
                      {!n.read && <div className="unread-dot"></div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Theme Settings */}
          <div className="action-item">
            <button
              className="action-btn"
              title="Theme Settings"
              onClick={(e) => {
                e.stopPropagation()
                setActiveDropdown(activeDropdown === "theme" ? null : "theme")
              }}
            >
              <span className="action-icon">⚙️</span>
            </button>

            {activeDropdown === "theme" && (
              <ThemeSettings onClose={() => setActiveDropdown(null)} />
            )}
          </div>

          {/* User Profile */}
          <div className="user-profile">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocKW6_6m6Z-liTaEUeKpuWykrBc-YSalQ6_nIlDPs2Kt1Fh7kHjn=s288-c-no"
              alt="User"
              className="user-avatar"
            />
            <div className="user-info">
              <span className="user-name">Shahriyar Alasgarli</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
