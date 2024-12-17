import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store/store'
import StoreContextProvider from './context/StoreContext'
import { Loader } from './components/common/Loader'
import AuthObserver from './AuthObserver'
import { Toast } from './components/Toast/Toast'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StoreContextProvider>
          <AuthObserver />
          <Toast />
          <Loader />
          <App />
        </StoreContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
