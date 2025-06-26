"use client"

import { useState } from "react"
import { useAppContext } from "../../context/AppContext.jsx"
import ThemeSettings from "../ThemeSettings/ThemeSettings.jsx"
import "./Header.css"

const Header = () => {
  const { notifications, recentActions, dispatch } = useAppContext()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showRecentActions, setShowRecentActions] = useState(false)
  const [showThemeSettings, setShowThemeSettings] = useState(false)

  const unreadNotifications = notifications.filter((n) => !n.read)

  const handleNotificationClick = (notificationId) => {
    dispatch({ type: "MARK_NOTIFICATION_READ", payload: notificationId })
  }

  const markAllAsRead = () => {
    dispatch({ type: "MARK_ALL_NOTIFICATIONS_READ" })
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "order":
        return "📦"
      case "warning":
        return "⚠️"
      case "message":
        return "💬"
      case "info":
        return "ℹ️"
      default:
        return "🔔"
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          
        </div>

        <div className="header-actions">
          <div className="action-item">
            <button
              className="action-btn"
              onClick={() => setShowRecentActions(!showRecentActions)}
              title="Recent Actions"
            >
              <span className="action-icon">📋</span>
              {recentActions.length > 0 && <span className="action-badge">{recentActions.length}</span>}
            </button>

            {showRecentActions && (
              <div className="dropdown recent-actions-dropdown">
                <div className="dropdown-header">
                  <h3>Recent Actions</h3>
                </div>
                <div className="dropdown-content">
                  {recentActions.length > 0 ? (
                    recentActions.map((action) => (
                      <div key={action.id} className="recent-action-item">
                        <div className="action-content">
                          <p>{action.action}</p>
                          <span className="action-time">{action.time}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="empty-state">
                      <p>No recent actions</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Notifications Dropdown */}
          <div className="action-item">
            <button
              className="action-btn"
              onClick={() => setShowNotifications(!showNotifications)}
              title="Notifications"
            >
              <span className="action-icon">🔔</span>
              {unreadNotifications.length > 0 && <span className="action-badge">{unreadNotifications.length}</span>}
            </button>

            {showNotifications && (
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
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`notification-item ${notification.read ? "read" : "unread"}`}
                      onClick={() => handleNotificationClick(notification.id)}
                    >
                      <div className="notification-icon">{getNotificationIcon(notification.type)}</div>
                      <div className="notification-content">
                        <p>{notification.message}</p>
                        <span className="notification-time">{notification.time}</span>
                      </div>
                      {!notification.read && <div className="unread-dot"></div>}
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
              onClick={() => setShowThemeSettings(!showThemeSettings)}
              title="Theme Settings"
            >
              <span className="action-icon">⚙️</span>
            </button>

            {showThemeSettings && <ThemeSettings onClose={() => setShowThemeSettings(false)} />}
          </div>

          {/* User Profile */}
          <div className="user-profile">
            <img src="https://lh3.googleusercontent.com/a/ACg8ocKW6_6m6Z-liTaEUeKpuWykrBc-YSalQ6_nIlDPs2Kt1Fh7kHjn=s288-c-no" alt="User" className="user-avatar" />
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
