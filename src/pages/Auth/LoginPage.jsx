import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

import { USERS } from "../../constant";
import AuthContext from "../../context/AuthContext";

function LoginPage() {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(AuthContext);

  const [initialValue, setInitialValue] = useState({ email: "", password: "" });

  const [serverError, serServerError] = useState("");

  let navigate = useNavigate();

  const attemptLogin = (value) => {
    return USERS.find(
      (user) => user.email === value.email && user.password === value.password
    );
  };

  const formSubmit = (values, setSubmitting) => {
    const attemptedUser = attemptLogin(values);
    if (!attemptedUser) {
      serServerError("E-mail or Password are incorect.");
      setSubmitting(false);
    } else {
      setUser(attemptedUser);
      setSubmitting(false);
      setIsAuthenticated(true);
      navigate("/");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  return (
    <div className="w-2/5 mx-auto">
      <ul className="text-center flex gap-4 mb-3">
        {USERS.map((user, index) => {
          return (
            <li key={index}>
              {" "}
              <button
                className="bg-green-600 text-white px-6 py-3 rounded"
                onClick={() => {
                  setInitialValue({
                    email: user.email,
                    password: user.password,
                  });
                }}
              >
                Login As {user.name}
              </button>
            </li>
          );
        })}
      </ul>
      <Formik
        initialValues={initialValue}
        enableReinitialize
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "E-mail Must Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password Must Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) =>
          formSubmit(values, setSubmitting)
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {serverError}
            <div className="flex flex-col">
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                name="email"
                className={`${
                  errors.email || touched.email ? "border-red-700" : ""
                } rounded`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email ? (
                <span className="text-red-600">
                  {errors.email && touched.email && errors.email}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                className={`${
                  errors.password || touched.password ? "border-red-700" : ""
                } rounded`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password ? (
                <span className="text-red-600">
                  {errors.password && touched.password && errors.password}
                </span>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className="bg-orange-500 px-6 py-2 rounded text-white w-full"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
