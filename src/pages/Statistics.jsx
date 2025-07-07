"use client"

import { useState } from "react"
import "./Statistics.css"

const Statistics = () => {
  const [activeChart, setActiveChart] = useState("sales")
  const [timeRange, setTimeRange] = useState("7days")

  const salesData = [
    { month: "Jan", value: 4000, growth: 12 },
    { month: "Feb", value: 3000, growth: -5 },
    { month: "Mar", value: 5000, growth: 18 },
    { month: "Apr", value: 4500, growth: 8 },
    { month: "May", value: 6000, growth: 25 },
    { month: "Jun", value: 5500, growth: 15 },
  ]

  // const customerData = [
  //   { month: "Jan", new: 120, returning: 80 },
  //   { month: "Feb", new: 100, returning: 90 },
  //   { month: "Mar", new: 150, returning: 110 },
  //   { month: "Apr", new: 130, returning: 95 },
  //   { month: "May", new: 180, returning: 120 },
  //   { month: "Jun", new: 160, returning: 105 },
  // ]

  const topProducts = [
    { name: "iPhone 14 Pro", sales: 245, revenue: 244755, trend: "up" },
    { name: "MacBook Air M2", sales: 156, revenue: 186844, trend: "up" },
    { name: "AirPods Pro", sales: 189, revenue: 47061, trend: "down" },
    { name: "iPad Air", sales: 98, revenue: 58702, trend: "up" },
    { name: "Apple Watch", sales: 134, revenue: 53600, trend: "stable" },
  ]

  const maxSalesValue = Math.max(...salesData.map((d) => d.value))

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return "📈"
      case "down":
        return "📉"
      case "stable":
        return "➡️"
      default:
        return "➡️"
    }
  }

  const statisticsData = [
    { date: "29 May", created: 120, completed: 80, overdue: 15 },
    { date: "30 May", created: 180, completed: 140, overdue: 8 },
    { date: "31 May", created: 150, completed: 110, overdue: 25 },
    { date: "01 Jun", created: 130, completed: 90, overdue: 12 },
    { date: "02 Jun", created: 90, completed: 70, overdue: 18 },
    { date: "03 Jun", created: 110, completed: 45, overdue: 5 },
    { date: "04 Jun", created: 85, completed: 75, overdue: 10 },
  ]

  const maxValue = Math.max(...statisticsData.flatMap((d) => [d.created, d.completed, d.overdue]))

  return (
    <div className="statistics">
      <div className="page-header">
        <div className="header-content">
          <h1>Statistics & Analytics</h1>
          <p>Track your business performance and insights</p>
        </div>
        <div className="header-controls">
          <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} className="time-range-select">
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="1year">Last year</option>
          </select>
        </div>
      </div>

      <div className="stats-overview">
        <div className="stat-card revenue">
          <div className="stat-header">
            <h3>Total Revenue</h3>
            <span className="stat-icon">💰</span>
          </div>
          <div className="stat-value">$124,563</div>
          <div className="stat-change positive">+18.2% from last month</div>
          <div className="stat-chart">
            <div className="mini-line-chart">
              <svg viewBox="0 0 100 30" className="chart-svg">
                <path
                  d="M 0 25 L 20 20 L 40 15 L 60 10 L 80 8 L 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="chart-line"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="stat-card orders">
          <div className="stat-header">
            <h3>Orders</h3>
            <span className="stat-icon">📦</span>
          </div>
          <div className="stat-value">1,429</div>
          <div className="stat-change positive">+12.5% from last month</div>
          <div className="stat-chart">
            <div className="mini-line-chart">
              <svg viewBox="0 0 100 30" className="chart-svg">
                <path
                  d="M 0 20 L 20 18 L 40 22 L 60 15 L 80 12 L 100 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="chart-line"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="stat-card customers">
          <div className="stat-header">
            <h3>New Customers</h3>
            <span className="stat-icon">👥</span>
          </div>
          <div className="stat-value">342</div>
          <div className="stat-change positive">+8.1% from last month</div>
          <div className="stat-chart">
            <div className="mini-line-chart">
              <svg viewBox="0 0 100 30" className="chart-svg">
                <path
                  d="M 0 28 L 20 25 L 40 20 L 60 18 L 80 15 L 100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="chart-line"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="stat-card conversion">
          <div className="stat-header">
            <h3>Conversion Rate</h3>
            <span className="stat-icon">📈</span>
          </div>
          <div className="stat-value">3.24%</div>
          <div className="stat-change negative">-2.1% from last month</div>
          <div className="stat-chart">
            <div className="mini-line-chart">
              <svg viewBox="0 0 100 30" className="chart-svg">
                <path
                  d="M 0 15 L 20 12 L 40 18 L 60 20 L 80 22 L 100 25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="chart-line"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <div className="chart-header">
            <h3>Performance Overview</h3>
            <div className="chart-tabs">
              <button
                className={`chart-tab ${activeChart === "sales" ? "active" : ""}`}
                onClick={() => setActiveChart("sales")}
              >
                Sales
              </button>
              <button
                className={`chart-tab ${activeChart === "customers" ? "active" : ""}`}
                onClick={() => setActiveChart("customers")}
              >
                Customers
              </button>
            </div>
          </div>

          <div className="chart-content">
            {activeChart === "sales" ? (
              <div className="bar-chart">
                {salesData.map((data, index) => (
                  <div key={index} className="bar-item">
                    <div
                      className="bar"
                      style={{
                        height: `${(data.value / maxSalesValue) * 100}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="bar-tooltip">
                        <span>${data.value.toLocaleString()}</span>
                        <span className={`growth ${data.growth > 0 ? "positive" : "negative"}`}>
                          {data.growth > 0 ? "+" : ""}
                          {data.growth}%
                        </span>
                      </div>
                    </div>
                    <span className="bar-label">{data.month}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="line-chart">
                <svg viewBox="0 0 400 200" className="chart-svg">
                  <defs>
                    <linearGradient id="newCustomersGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 40}
                      x2="400"
                      y2={i * 40}
                      stroke="var(--border-color)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* New customers line */}
                  <path
                    d="M 0 120 L 80 140 L 160 80 L 240 100 L 320 40 L 400 60"
                    fill="none"
                    stroke="var(--accent-color)"
                    strokeWidth="3"
                    className="chart-line"
                  />

                  {/* Returning customers line */}
                  <path
                    d="M 0 140 L 80 130 L 160 110 L 240 125 L 320 90 L 400 115"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    className="chart-line"
                  />
                </svg>

                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-dot new"></span>
                    <span>New Customers</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot returning"></span>
                    <span>Returning Customers</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="top-products">
          <div className="products-header">
            <h3>Top Products</h3>
            <span className="products-badge">{topProducts.length}</span>
          </div>
          <div className="products-list">
            {topProducts.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-rank">#{index + 1}</div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p>{product.sales} sales</p>
                </div>
                <div className="product-metrics">
                  <div className="product-revenue">${product.revenue.toLocaleString()}</div>
                  <div className="product-trend">{getTrendIcon(product.trend)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="statistics-header">
        <h1>Statistics</h1>
        <div className="legend">
          <button className="legend-item active">
            <span className="legend-dot created"></span>
            <span>Created</span>
          </button>
          <button className="legend-item active">
            <span className="legend-dot completed"></span>
            <span>Completed</span>
          </button>
          <button className="legend-item active">
            <span className="legend-dot overdue"></span>
            <span>Overdue</span>
          </button>
        </div>
      </div>

      <div className="chart-content">
        <div className="bar-chart-grouped">
          {statisticsData.map((data, index) => (
            <div key={index} className="bar-group">
              <div className="bars">
                <div className="bar created" style={{ height: `${(data.created / maxValue) * 100}%` }}></div>
                <div className="bar completed" style={{ height: `${(data.completed / maxValue) * 100}%` }}></div>
                <div className="bar overdue" style={{ height: `${(data.overdue / maxValue) * 100}%` }}></div>
              </div>
              <span className="x-axis-label">{data.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Statistics
