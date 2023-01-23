import React from "react";
import { Formik } from "formik";

function LoginPage() {
  return (
    <div className="w-2/5 mx-auto">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
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
