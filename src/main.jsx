import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    BrowserRouter,
    createBrowserRouter, Route, Router,
    RouterProvider, Routes} from "react-router-dom";
import {Component} from "./component.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/second" element={<Component />}/>
            </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
