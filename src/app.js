import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HeaderComponent } from "./components/partials/HeaderComponent";
import { FooterComponent } from "./components/partials/FooterComponent";
import { MainComponent } from "./components/MainComponent";

import AboutPage from "./pages/AboutPage";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <MainComponent></MainComponent>
      <FooterComponent></FooterComponent>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#app"));

root.render(<RouterProvider router={appRouter} />);
