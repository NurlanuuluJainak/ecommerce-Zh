import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layouts
import { MainLayout } from "@components/Layouts";
//pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import AboutUs from "@pages/AboutUs";
import Produccts from "@pages/Produccts";
//styles

import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "products:prefix",
        element: <Produccts />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(<MainLayout />);
