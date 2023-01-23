import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { HeaderComponent } from "./components/partials/HeaderComponent";
import { FooterComponent } from "./components/partials/FooterComponent";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResturentPage from "./pages/ResturentPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Auth/LoginPage";

const AppLayout = () => {
  return (
    <div className="bg-gray-50/50">
      <HeaderComponent></HeaderComponent>
      <div className="container mx-auto py-4 mb-4">
        <Outlet></Outlet>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

const basePath = {
  basename: process.env.NODE_ENV == "production" ? "/react-learning/dist/" : "",
};
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/resturent/:resId",
          element: <ResturentPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ],
  basePath
);

const root = ReactDOM.createRoot(document.querySelector("#app"));

root.render(<RouterProvider router={appRouter} />);
