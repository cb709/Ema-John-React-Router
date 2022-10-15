import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shop from "../src/components/Shop/Shop"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: 'shop',
          element: <Shop></Shop>
        }
      ]
    }, 
    {
      path: "*",
      element: <h2>Not Found</h2>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
