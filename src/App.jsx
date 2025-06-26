import { useAppContext } from "./context/AppContext.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Header from "./components/Header/Header.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import ProductList from "./pages/ProductList.jsx"
import AddProduct from "./pages/AddProduct.jsx"
import Basket from "./pages/Basket.jsx"
import Customers from "./pages/Customers.jsx"
import Statistics from "./pages/Statistics.jsx"
import "./App.css"

function App() {
  const { currentPage, theme, accentColor } = useAppContext()

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "products":
        return <ProductList />
      case "add-product":
        return <AddProduct />
      case "basket":
        return <Basket />
      case "customers":
        return <Customers />
      case "statistics":
        return <Statistics />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className={`app ${theme}`} data-accent={accentColor}>
      <Sidebar />
      <div className="main-container">
        <Header />
        <main className="main-content">{renderPage()}</main>
      </div>
    </div>
  )
}

export default App
