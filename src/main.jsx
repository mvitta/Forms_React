import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import ThemeContext from './context/ThemeContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContext.Provider
    value={{ dark: '_dark', red: '_red', green: '_green' }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContext.Provider>
)
