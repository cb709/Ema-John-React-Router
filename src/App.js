import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Shop from "../src/components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import { productAndCartLoader } from "./loaders/productAndCartLoader";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Checkout from "./components/Checkout/Checkout";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("products.json");
          },
          element: <Shop></Shop>,
        },
        {
          path: "shop",
          loader: async () => {
            return fetch("products.json");
          },
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: productAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: "checkout",
          element: (
            <PrivateRoute>
              <Checkout></Checkout>
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <h2>Not Found</h2>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
