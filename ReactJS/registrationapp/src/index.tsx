import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Contact from './contact';
import ErrorPage from './Error';

const router = createBrowserRouter ([

  {
    path: "/userform",
    element: <App/>,
    errorElement : <ErrorPage/>
  },
  {
    path: "contact/:contactId",
    element: <Contact/>
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={ router}/>
  </React.StrictMode>
  /* <React.StrictMode>
    <App />
  </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// create a about us page and 
// create a route /aboutus

reportWebVitals();
