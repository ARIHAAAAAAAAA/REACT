import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import UserList from './components/UserList.tsx';
import UserDetails from './components/UserDetails.tsx';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index={true} element={<UserList />} />
//       <Route path="user/:id" element={<UserDetails />} />
//     </Route>
//   )
// );
const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  // errorElement: <ErrorPage />,
  },
  {
  path: "/users",
  element: <UserList />,
  },
  {
  path: "/users/:id",
  element: <UserDetails />,
  },
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
