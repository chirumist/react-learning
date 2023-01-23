import React from "react";
import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="w-full text-center h-screen flex items-center justify-center bg-orange-50/5">
      <span className="text-2xl text-orange-500">{error.status}</span>
      <span className="mx-4">|</span>
      <span className="text-2xl text-green-500">{error.statusText}</span>
    </div>
  );
}

export default ErrorPage;
