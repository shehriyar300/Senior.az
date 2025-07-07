import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProductList from "./pages/ProductList.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import Basket from "./pages/Basket.jsx";
import Customers from "./pages/Customers.jsx";
import Statistics from "./pages/Statistics.jsx";
import "./App.css";
import { useAppContext } from "./context/AppContext.jsx"; 

function App() {
  const { theme, accentColor } = useAppContext();

  return (
    <Router>
      <div className={`app ${theme}`} data-accent={accentColor}>
        <Sidebar />
        <div className="main-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/statistics" element={<Statistics />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
