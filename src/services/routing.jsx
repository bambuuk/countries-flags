import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Details from "../pages/Details";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/country/:name",
        element: <Details />,
      },
    ],
  },
]);
