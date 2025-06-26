import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { AppProvider } from "./context/AppContext.jsx"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found. Make sure there is a div with id='root' in your HTML.")
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
