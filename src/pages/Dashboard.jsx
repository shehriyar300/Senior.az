import { useAppContext } from "../context/useAppContext.jsx"
import "./Dashboard.css"

const Dashboard = () => {
  const { stats, products, customers, basket } = useAppContext()

  const recentProducts = products.slice(-3)
  const topCustomers = customers.slice(0, 3)
  const basketTotal = basket.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card sales">
              <div className="stat-icon">🛒</div>
              <div className="stat-content">
                <h3>{stats.totalSales}</h3>
                
                <p>Total sales</p>
              </div>
            </div>

            <div className="stat-card visits">
              <div className="stat-icon">📈</div>
              <div className="stat-content">
                <h3>{stats.dailyVisits}</h3>
                <p>Daily visits</p>
              </div>
            </div>

            <div className="stat-card income">
              <div className="stat-icon">💰</div>
              <div className="stat-content">
                <h3>${stats.totalIncome}</h3>
                <p>Total income</p>
              </div>
            </div>

            <div className="stat-card orders">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <h3>{stats.totalOrders}</h3>
                <p>Total orders</p>
              </div>
            </div>
              <div className="stat-card orders">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3>{customers.length}</h3>
                <p>Total customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-grid">
          <div className="section-card recent-products">
            <div className="card-header">
              <h2>Recent Products</h2>
              <span className="card-badge">{recentProducts.length}</span>
            </div>
            <div className="card-content">
              {recentProducts.map((product) => (
                <div key={product.id} className="recent-item">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} />
                  <div className="item-details">
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <span className="item-category">{product.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card top-customers">
            <div className="card-header">
              <h2>Top Customers</h2>
              <span className="card-badge">{topCustomers.length}</span>
            </div>
            <div className="card-content">
              {topCustomers.map((customer) => (
                <div key={customer.id} className="customer-item">
                  <div className="customer-avatar">{customer.name.charAt(0)}</div>
                  <div className="customer-details">
                    <h4>{customer.name}</h4>
                    <p>{customer.totalSpent ? `$${customer.totalSpent}` : customer.total_spend}</p>
                    <span className="customer-orders">{customer.totalOrders} orders</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card basket-summary">
            <div className="card-header">
              <h2>Current Basket</h2>
              <span className="card-badge">{basket.length}</span>
            </div>
            <div className="card-content">
              {basket.length > 0 ? (
                <>
                  {basket.slice(0, 3).map((item) => (
                    <div key={item.id} className="basket-item">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p>Qty: {item.quantity}</p>
                        <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                  <div className="basket-total">
                    <strong>Total: ${basketTotal.toFixed(2)}</strong>
                  </div>
                </>
              ) : (
                <div className="empty-state">
                  <p>No items in basket</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
