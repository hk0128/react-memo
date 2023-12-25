import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import Sub from './Sub.tsx'
import './index.css'

//redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import user from './redux/reducer.ts'

//store
const store = createStore(combineReducers({
  user: user,
}), applyMiddleware())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/sub" element={<Sub />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
