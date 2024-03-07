// import * as ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './main.scss'
import './i18n'
import { Provider } from 'react-redux'
import { store } from './stores/index.ts'

//--------
import ShopContextProvider from './Context/ShopContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    
    <ShopContextProvider>
    
    <Provider store={store}>

        <App />
    </Provider>
    
    </ShopContextProvider>

)
