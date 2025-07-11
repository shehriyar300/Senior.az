"use client";

import { useState } from "react";
import { useAppContext } from "../context/AppContext.jsx";
import "./Customers.css";

const Customers = () => {
  const { customers } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [ind, setInd] = useState(0);
  const [editCustomer, setEditCustomer] = useState(null);
  const [showMessageBox, setShowMessageBox] = useState(null);

  const dispatch = useAppContext().dispatch;


  const handleEditCustomer = (customer) => {
    setEditCustomer(customer);
  };
  const handleMessageCustomer = (customer) => {
    setShowMessageBox(customer);
  };

  const filteredCustomers = customers
    .filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (typeof aValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });

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

  const getTotalRevenue = () => {
    return customers.reduce(
      (sum, customer) =>
        sum + customer.totalSpent || ~~customer.total_spend.replace("$", ""),
      0
    );
  };
 
  const getAverageOrderValue = () => {
    const totalOrders = customers.reduce(
      (sum, customer) => ~~sum + customer.total_orders,
      0
    );
    const totalRevenue = getTotalRevenue();

    return ~~totalOrders > 0 ? ~~totalRevenue / ~~customers.length : 0;
  };
 
  const getAverageOrderValue2 = () => {
    const totalSpent = () => {
      return customers.reduce((sum, customer) => {
        const totalSpent =
          customer.totalSpent !== undefined
            ? ~~customer.totalSpent
            : ~~customer.total_spend?.replace("$", "") || 0;
        const totalOrders = ~~customer.total_orders || 1;
        return sum + totalSpent / totalOrders;
      }, 0);
    };
    return ~~totalSpent();
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
            <span className="stat-value">${getAverageOrderValue2()}</span>
            <span className="stat-label">Total Revenue</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">${getAverageOrderValue()}</span>
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
              <th
                onClick={() => handleSort("totalOrders")}
                className="sortable"
              >
                Orders {getSortIcon("totalOrders")}
              </th>
              <th onClick={() => handleSort("totalSpent")} className="sortable">
                Total Spent {getSortIcon("totalSpent")}
              </th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={customer.id} className="customer-row">
                <td>
                  <div className="customer-name">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                      alt={customer.name}
                      className="customer-avatar"
                    />
                    <span>{customer.name}</span>
                  </div>
                </td>
                <td className="customer-email">{customer.email}</td>
                <td>{customer.location}</td>
                <td className="customer-phone">{customer.phone}</td>
                <td>
                  <span className="orders-badge">{customer.total_orders}</span>
                </td>
                <td className="customer-spent">{customer.total_spend}</td>
                <td>
                  <div className="customer-actions">
                    <button
                      className="action-btn view"
                      title="View Details"
                      onClick={() => {
                        setSelectedCustomer(customer);
                        setInd(index);
                      }}
                    >
                      👁️
                    </button>

                    <button
                      className="action-btn edit"
                      title="Edit Customer"
                      onClick={() => handleEditCustomer(customer)}
                    >
                      ✏️
                    </button>

                    <button
                      className="action-btn message"
                      title="Send Message"
                      onClick={() => handleMessageCustomer(customer)}
                    >
                      💬
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editCustomer && (
        <div className="modal-overlay" onClick={() => setEditCustomer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Edit Customer</h3>
            <input
              type="text"
              value={editCustomer.name}
              onChange={(e) =>
                setEditCustomer({ ...editCustomer, name: e.target.value })
              }
              placeholder="Name"
            />
            <input
              type="email"
              value={editCustomer.email}
              onChange={(e) =>
                setEditCustomer({ ...editCustomer, email: e.target.value })
              }
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
        <div className="modal-overlay" onClick={() => setShowMessageBox(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Message to {showMessageBox.name}</h3>
            <textarea placeholder="Write your message here..."></textarea>
            <button
              onClick={() => {
                // sendMessage(showMessageBox.email, messageText)
                setShowMessageBox(null);
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {filteredCustomers.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <h3>No customers found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      )}

      {selectedCustomer && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCustomer(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Customer Details</h3>
              <button
                className="close-btn"
                onClick={() => setSelectedCustomer(null)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="customer-profile">
                <img
                  src={`https://randomuser.me/api/portraits/men/${ind}.jpg`}
                  alt={selectedCustomer.name}
                  className="profile-avatar"
                />
                <div className="profile-info">
                  <h4>{selectedCustomer.name}</h4>
                  <p>{selectedCustomer.email}</p>
                  <span className="customer-location">
                    📍 {selectedCustomer.location}
                  </span>
                </div>
              </div>

              <div className="customer-stats">
                <div className="stat-card">
                  <span className="stat-number">
                    {selectedCustomer.total_orders}
                  </span>
                  <span className="stat-text">Total Orders</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">
                    {selectedCustomer.total_spend}
                  </span>
                  <span className="stat-text">Total Spent</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">
                    $
                    {(
                      ~~selectedCustomer.total_spend.replace("$", "") /
                      ~~selectedCustomer.total_orders
                    ).toFixed(2)}
                  </span>
                  <span className="stat-text">Avg Order</span>
                </div>
              </div>

              <div className="customer-details">
                <div className="detail-item">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{selectedCustomer.phone}</span>
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
