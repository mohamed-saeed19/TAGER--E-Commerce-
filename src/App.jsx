// import Slider from "react-slick";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./MainPages/HomePage";
import Product from "./components/Product/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  let routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'Product', element: <Product /> },
        { path: 'Product-details', element: <ProductDetails /> },
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
