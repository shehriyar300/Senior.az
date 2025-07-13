"use client";

import { useState, useMemo } from "react";
import { useAppContext } from "../context/AppContext.jsx";
import "./Customers.css";

const stringToNumberHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash |= 0;
  }
  return Math.abs(hash);
};

const getAvatarIndex = (id) => {
  if (!id) return 0;
  if (typeof id === "number") return Math.abs(id) % 100;
  return stringToNumberHash(id) % 100;
};

const Customers = () => {
  const { customers = [], dispatch } = useAppContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [editCustomer, setEditCustomer] = useState(null);
  const [showMessageBox, setShowMessageBox] = useState(null);
  const [messageText, setMessageText] = useState("");

  const filteredCustomers = useMemo(() => {
    if (!customers.length) return [];

    const filtered = customers.filter((customer) => {
      const name = customer.name?.toLowerCase() || "";
      const email = customer.email?.toLowerCase() || "";
      const location = customer.location?.toLowerCase() || "";
      const term = searchTerm.toLowerCase();

      return (
        name.includes(term) ||
        email.includes(term) ||
        location.includes(term)
      );
    });

    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === "totalOrders") {
        aValue = Number(a.total_orders || 0);
        bValue = Number(b.total_orders || 0);
      } else if (sortBy === "totalSpent") {
        const parseSpent = (c) => {
          if (c.totalSpent !== undefined) return Number(c.totalSpent) || 0;
          if (typeof c.total_spend === "string")
            return Number(c.total_spend.replace(/[^0-9.-]+/g, "")) || 0;
          return 0;
        };
        aValue = parseSpent(a);
        bValue = parseSpent(b);
      } else {
        aValue = aValue ? aValue.toString().toLowerCase() : "";
        bValue = bValue ? bValue.toString().toLowerCase() : "";
      }

      if (typeof aValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }
    });

    return filtered;
  }, [customers, searchTerm, sortBy, sortOrder]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return "↕️";
    return sortOrder === "asc" ? "↑" : "↓";
  };

  const getTotalRevenue = useMemo(() => {
    return customers.reduce((sum, c) => {
      if (c.totalSpent !== undefined) return sum + Number(c.totalSpent) || 0;

      if (typeof c.total_spend === "string")
        return (
          sum + Number(c.total_spend.replace(/[^0-9.-]+/g, "")) || 0
        );

      return sum;
    }, 0);
  }, [customers]);

  const getAverageOrderValue = useMemo(() => {
    const totalOrders = customers.reduce(
      (sum, c) => sum + Number(c.total_orders || 0),
      0
    );

    if (totalOrders === 0) return 0;

    return getTotalRevenue / totalOrders;
  }, [customers, getTotalRevenue]);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      dispatch({
        type: "ADD_NOTIFICATION",
        payload: {
          id: Date.now(),
          type: "message",
          message: `Message sent to ${showMessageBox.name}: ${messageText}`,
          timestamp: new Date().toISOString(),
        },
      });
    }
    setShowMessageBox(null);
    setMessageText("");
  };

  return (
    <div className="customers">
      <div className="page-header">
        <div className="header-content">
          <h1>Customers</h1>
          <p>Manage your customer relationships</p>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-value">{customers.length}</span>
            <span className="stat-label">Total Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">${getTotalRevenue.toFixed(2)}</span>
            <span className="stat-label">Total Revenue</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">${getAverageOrderValue.toFixed(2)}</span>
            <span className="stat-label">Avg Order Value</span>
          </div>
        </div>
      </div>

      <div className="customers-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("name")} className="sortable">
                Name {getSortIcon("name")}
              </th>
              <th onClick={() => handleSort("email")} className="sortable">
                Email {getSortIcon("email")}
              </th>
              <th onClick={() => handleSort("location")} className="sortable">
                Location {getSortIcon("location")}
              </th>
              <th>Phone</th>
              <th onClick={() => handleSort("totalOrders")} className="sortable">
                Orders {getSortIcon("totalOrders")}
              </th>
              <th onClick={() => handleSort("totalSpent")} className="sortable">
                Total Spent {getSortIcon("totalSpent")}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: "center", padding: "1rem" }}>
                  No customers found.
                </td>
              </tr>
            )}
            {filteredCustomers.map((customer) => {
              const avatarIndex = getAvatarIndex(customer.id);
              return (
                <tr key={customer.id} className="customer-row">
                  <td>
                    <div className="customer-name">
                      <img
                        src={`https://randomuser.me/api/portraits/men/${avatarIndex}.jpg`}
                        alt={customer.name}
                        className="customer-avatar"
                      />
                      <span>{customer.name || "No Name"}</span>
                    </div>
                  </td>
                  <td className="customer-email">{customer.email || "-"}</td>
                  <td>{customer.location || "-"}</td>
                  <td className="customer-phone">{customer.phone || "-"}</td>
                  <td>
                    <span className="orders-badge">{customer.total_orders ?? 0}</span>
                  </td>
                  <td className="customer-spent">{customer.total_spend || "$0.00"}</td>
                  <td>
                    <div className="customer-actions">
                      <button
                        className="action-btn view"
                        title="View Details"
                        onClick={() => setSelectedCustomer(customer)}
                      >
                        👁️
                      </button>

                      <button
                        className="action-btn edit"
                        title="Edit Customer"
                        onClick={() => setEditCustomer(customer)}
                      >
                        ✏️
                      </button>

                      <button
                        className="action-btn message"
                        title="Send Message"
                        onClick={() => setShowMessageBox(customer)}
                      >
                        💬
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {editCustomer && (
        <div className="modal-overlay" onClick={() => setEditCustomer(null)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} role="document">
            <h3>Edit Customer</h3>
            <input
              type="text"
              value={editCustomer.name || ""}
              onChange={(e) => setEditCustomer({ ...editCustomer, name: e.target.value })}
              placeholder="Name"
            />
            <input
              type="email"
              value={editCustomer.email || ""}
              onChange={(e) => setEditCustomer({ ...editCustomer, email: e.target.value })}
              placeholder="Email"
            />
            <button
              onClick={() => {
                dispatch({ type: "UPDATE_CUSTOMER", payload: editCustomer });
                setEditCustomer(null);
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {showMessageBox && (
        <div className="modal-overlay" onClick={() => setShowMessageBox(null)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} role="document">
            <h3>Message to {showMessageBox.name || "Customer"}</h3>
            <textarea
              placeholder="Write your message here..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}

      {selectedCustomer && (
        <div className="modal-overlay" onClick={() => setSelectedCustomer(null)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} role="document">
            <div className="modal-header">
              <h3>Customer Details</h3>
              <button className="close-btn" aria-label="Close" onClick={() => setSelectedCustomer(null)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="customer-profile">
                <img
                  src={`https://randomuser.me/api/portraits/men/${getAvatarIndex(selectedCustomer.id)}.jpg`}
                  alt={selectedCustomer.name}
                  className="profile-avatar"
                />
                <div className="profile-info">
                  <h4>{selectedCustomer.name || "-"}</h4>
                  <p>{selectedCustomer.email || "-"}</p>
                  <span className="customer-location">
                    📍 {selectedCustomer.location || "-"}
                  </span>
                </div>
              </div>

              <div className="customer-stats">
                <div className="stat-card">
                  <span className="stat-number">{selectedCustomer.total_orders ?? 0}</span>
                  <span className="stat-text">Total Orders</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">{selectedCustomer.total_spend || "$0.00"}</span>
                  <span className="stat-text">Total Spent</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">
                    ${(
                      Number(selectedCustomer.total_spend?.replace(/[^0-9.-]+/g, "") || 0) /
                        (Number(selectedCustomer.total_orders) || 1)
                    ).toFixed(2)}
                  </span>
                  <span className="stat-text">Avg Order</span>
                </div>
              </div>

              <div className="customer-details">
                <div className="detail-item">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{selectedCustomer.phone || "-"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;
