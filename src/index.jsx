import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import AuthContext from "./context/AuthContext";

import { HeaderComponent } from "./components/partials/HeaderComponent";
import { FooterComponent } from "./components/partials/FooterComponent";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResturentPage from "./pages/ResturentPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Auth/LoginPage";

import useOnline from "./hooks/useOnline";

const AppLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const isOnline = useOnline();
  const [viewOnline, setViewOnline] = useState(false);

  useEffect(() => {
    if (isOnline) {
      setViewOnline(true);
      setTimeout(() => {
        setViewOnline(false);
      }, 2000);
    }
  }, [isOnline]);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
      }}
    >
      <div className="bg-gray-50/50">
        {!isOnline ? (
          <div className="bg-red-500 text-white text-center py-4">
            Please Check Your Internet Connection!!
          </div>
        ) : viewOnline ? (
          <div className="bg-green-500 text-white text-center">
            You are now online
          </div>
        ) : (
          ""
        )}
        <HeaderComponent></HeaderComponent>
        <div className="container mx-auto py-4 mb-4">
          <Outlet></Outlet>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    </AuthContext.Provider>
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
          path: "",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "resturent/:resId",
          element: <ResturentPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ],
  basePath
);

const root = ReactDOM.createRoot(document.querySelector("#app"));

root.render(<RouterProvider router={appRouter} />);
