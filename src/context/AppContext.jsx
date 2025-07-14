import { useEffect, useReducer, createContext, useContext } from "react";

const AppContext = createContext();

const initialState = {
  currentPage: "dashboard",
  theme: "light",
  accentColor: "blue",
  sidebartoggle: true,
  products: [],
  customers: [],
  basket: [],
  wishlist: [],
  notifications: [
    {
      id: 1,
      message: "New order received from John Doe",
      time: "2 min ago",
      read: false,
      type: "order",
    },
    {
      id: 2,
      message: "Product stock running low: iPhone 14 Pro",
      time: "1 hour ago",
      read: false,
      type: "warning",
    },
    {
      id: 3,
      message: "Customer inquiry from Jane Smith",
      time: "3 hours ago",
      read: true,
      type: "message",
    },
    {
      id: 4,
      message: "Monthly sales report is ready",
      time: "1 day ago",
      read: true,
      type: "info",
    },
  ],
  recentActions: [],
  stats: {
    totalSales: 1995,
    dailyVisits: 2001,
    totalIncome: 2632,
    totalOrders: 1711,
    totalProducts: 0,
  },
};

function appReducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        stats: { ...state.stats, totalProducts: action.payload.length },
      };
    case "SET_CUSTOMERS":
      return {
        ...state,
        customers: action.payload,
      };

    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };

    case "SET_THEME":
      return { ...state, theme: action.payload };

    case "SET_ACCENT_COLOR":
      return { ...state, accentColor: action.payload };

    case "ADD_TO_WISHLIST": {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        // əgər artıq wishlistdə varsa əlavə etmə
        const alreadyInWishlist = state.wishlist.some(
          (item) => item.id === product.id
        );
        if (alreadyInWishlist) return state;

        return {
          ...state,
          wishlist: [...state.wishlist, product],
          recentActions: [
            {
              id: Date.now(),
              action: `Added new product to wishlist: ${product.name}`,
              time: "Just now",
            },
            ...state.recentActions,
          ],
        };
      }
      return state;
    }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
        recentActions: [
          {
            id: Date.now(),
            action: `Removed product from wishlist: ${
              state.products.find((p) => p.id === action.payload)?.name
            }`,
            time: "Just now",
          },
          ...state.recentActions,
        ],
      };

    case "TOGGLE_SIDEBAR":
      return { ...state, sidebartoggle: !state.sidebartoggle };

    case "ADD_PRODUCT": {
      const newProduct = {
        ...action.payload,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      return {
        ...state,
        products: [...state.products, newProduct],
        stats: { ...state.stats, totalProducts: state.stats.totalProducts + 1 },
        recentActions: [
          {
            id: Date.now(),
            action: `Added new product: ${newProduct.name}`,
            time: "Just now",
          },
          ...state.recentActions,
        ],
      };
    }

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, ...action.payload }
            : product
        ),
        recentActions: [
          {
            id: Date.now(),
            action: `Updated product: ${action.payload.name}`,
            time: "Just now",
          },
          ...state.recentActions,
        ],
      };
case "DELETE_CUSTOMER":
  return {
    ...state,
    customers: state.customers.filter((customer) => customer.id !== action.payload),
  };

    case "DELETE_PRODUCT": {
      const productToDelete = state.products.find(
        (p) => p.id === action.payload
      );
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
        basket: state.basket.filter((item) => item.id !== action.payload),
        stats: { ...state.stats, totalProducts: state.stats.totalProducts - 1 },
        recentActions: [
          {
            id: Date.now(),
            action: `Deleted product: ${productToDelete?.name}`,
            time: "Just now",
          },
          ...state.recentActions,
        ],
      };
    }

    case "ADD_TO_BASKET": {
      const existingItem = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          basket: state.basket.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, quantity: 1 }],
        recentActions: [
          {
            id: Date.now(),
            action: `Added product to basket: ${action.payload.name}`,
            time: "Just now",
          },
          ...state.recentActions,
        ],
      };
    }

    case "UPDATE_BASKET_QUANTITY":
      return {
        ...state,
        basket: state.basket
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
        recentActions: [
          {
            id: Date.now(),
            action: `Removed product from basket: ${
              state.products.find((p) => p.id === action.payload)?.name
            }`,
            time: "Just now",
          },
          ...state.recentActions,
        ],
      };

    case "CLEAR_BASKET":
      return {
        ...state,
        basket: [],
        recentActions: [
          {
            id: Date.now(),
            action: "Cleared the basket",
            time: "Just now",
          },
          ...state.recentActions,
        ],
      };

    case "MARK_NOTIFICATION_READ":
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.payload
            ? { ...notification, read: true }
            : notification
        ),
      };

    case "MARK_ALL_NOTIFICATIONS_READ":
      return {
        ...state,
        notifications: state.notifications.map((notification) => ({
          ...notification,
          read: true,
        })),
      };

    case "UPDATE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.map((customer) =>
          customer.id === action.payload.id
            ? { ...customer, ...action.payload }
            : customer
        ),
        recentActions: [
          {
            id: Date.now(),
            action: `Updated customer: ${action.payload.name}`,
            time: "Just now",
          },
          ...state.recentActions,
        ],
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    fetch("http://localhost:3001/initialCustomers")
      .then((response) => response.json())
      .then((data) => {
        // əgər data içində "customers" varsa
        dispatch({ type: "SET_CUSTOMERS", payload: data.customers || data });
      })
      .catch((err) => {
        console.error("Fetch customers error:", err);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/initialProducts")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_PRODUCTS", payload: data.products || data });
      })
      .catch((err) => {
        console.error("Fetch products error:", err);
      });
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
