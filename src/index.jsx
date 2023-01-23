import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { HeaderComponent } from "./components/partials/HeaderComponent";
import { FooterComponent } from "./components/partials/FooterComponent";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#app"));

root.render(<RouterProvider router={appRouter} />);
