"use client"

import { useState } from "react"
import "./Statistics.css"



const Statistics = () => {
  const [visibleSeries, setVisibleSeries] = useState({
    created: true,
    completed: true,
    overdue: true,
  })

 



  const statisticsData = [
    { date: "29 May", created: 120, completed: 80, overdue: 15 },
    { date: "30 May", created: 180, completed: 140, overdue: 8 },
    { date: "31 May", created: 150, completed: 110, overdue: 25 },
    { date: "01 Jun", created: 130, completed: 90, overdue: 12 },
    { date: "02 Jun", created: 90, completed: 70, overdue: 18 },
    { date: "03 Jun", created: 110, completed: 45, overdue: 5 },
    { date: "04 Jun", created: 85, completed: 75, overdue: 10 },
  ]

  const maxValueCreated = Math.max(...statisticsData.map((d) => d.created))
  const maxValueCompleted = Math.max(...statisticsData.map((d) => d.completed))
  const maxValueOverdue = Math.max(...statisticsData.map((d) => d.overdue))

  const toggleSeries = (series) => {
    setVisibleSeries((prev) => ({
      ...prev,
      [series]: !prev[series],
    }))
  }

  return (
    <div className="statistics ">
      {/* Main Statistics Section */}
      <div className="statistics-container">
        <div className="statistics-header">
          <h1>Statistics</h1>
          <div className="legend">
            <div className="legend-item">
              <input
                type="checkbox"
                id="created"
                checked={visibleSeries.created}
                onChange={() => toggleSeries("created")}
              />
              <label htmlFor="created">
                <span className="legend-dot created"></span>
                <span>Created</span>
              </label>
            </div>
            <div className="legend-item">
              <input
                type="checkbox"
                id="completed"
                checked={visibleSeries.completed}
                onChange={() => toggleSeries("completed")}
              />
              <label htmlFor="completed">
                <span className="legend-dot completed"></span>
                <span>Completed</span>
              </label>
            </div>
            <div className="legend-item">
              <input
                type="checkbox"
                id="overdue"
                checked={visibleSeries.overdue}
                onChange={() => toggleSeries("overdue")}
              />
              <label htmlFor="overdue">
                <span className="legend-dot overdue"></span>
                <span>Overdue</span>
              </label>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <div className="y-axis">
            <div className="y-axis-label">228</div>
            <div className="y-axis-label">171</div>
            <div className="y-axis-label">114</div>
            <div className="y-axis-label">57</div>
            <div className="y-axis-label">0</div>
          </div>

          <div className="chart-area">
            <div className="grid-lines">
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
            </div>

            <div className="bar-chart-grouped">
              {statisticsData.map((data, index) => (
                    console.log(( data) ),
                <div key={index} className="bar-group">
                  <div className="bars">
                    {visibleSeries.created && (
                      <div
                        className="bar created"
                        style={{
                          height: `${(data.created / maxValueCreated) * 90}%`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      ></div>
                    )}
                    {visibleSeries.completed && (
                      <div
                        className="bar completed"
                        style={{
                          height: `${(data.completed / maxValueCompleted) * 50}%`,
                          animationDelay: `${index * 0.1 + 0.05}s`,
                        }}
                      ></div>
                    )}
                    {visibleSeries.overdue && (
                      <div
                        className="bar overdue"
                        style={{
                          height: `${(data.overdue / maxValueOverdue) * 10}%`,
                          animationDelay: `${index * 0.1 + 0.1}s`,
                        }}
                      ></div>
                    )}
                  </div>
                  <span className="x-axis-label">{data.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
