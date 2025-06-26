"use client"

import { createContext, useContext, useReducer } from "react"

const GlobalContext = createContext()

const initialState = {
  currentPage: "dashboard",
  theme: "light",
  accentColor: "blue",
  themeSettingsOpen: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload }
    case "SET_THEME":
      return { ...state, theme: action.payload }
    case "SET_ACCENT_COLOR":
      return { ...state, accentColor: action.payload }
    case "TOGGLE_THEME_SETTINGS":
      return { ...state, themeSettingsOpen: !state.themeSettingsOpen }
    default:
      return state
  }
}

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>
}

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error("useGlobalContext must be used within a ContextProvider")
  }
  return context
}
