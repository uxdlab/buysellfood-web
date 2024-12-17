import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AuthObserver from './AuthObserver.js'
import { Loader } from './components/common/Loader.jsx'
import { Toast } from './components/Toast/Toast.jsx'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

ReactDOM.createRoot(document.getElementById('root')).render(
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
)
