// import Slider from "react-slick";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./MainPages/HomePage";
import Product from "./components/Product/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

function App() {
  let routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'Product', element: <Product /> },
        { path: 'Product-details/:id', element: <ProductDetails /> },
        { path: 'login', element:<Login/>},
        { path: 'register', element:<Register/>},
      ],
    },
  ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);   
  return (
    <>
  </>
  );
}

export default App;
