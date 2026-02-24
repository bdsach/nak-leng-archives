import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const MainLayout = lazy(() => import("./layout"));
const HomePage = lazy(() => import("./pages/home"));
const NotFoundPage = lazy(() => import("./pages/notfound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
