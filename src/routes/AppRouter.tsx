import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layouts
import { MainLayout } from "@components/Layouts";
//pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import AboutUs from "@pages/AboutUs";
import Produccts from "@pages/Produccts";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/products/:prefix",
        element: <Produccts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter