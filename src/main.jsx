import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
// import Home from './pages/Home'
import RepoDetails from './repodata'
// import ErrorPage from './pages/ErrorPage'
import AppOutlet from './appoutlet'
import './index.css'
import NotFound from './404'


<BrowserRouter>
   <Routes>
    <Route path='*' element={<NotFound />}></Route>
   </Routes>
</BrowserRouter>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
