// eslint-disable-next-line no-unused-vars
import React from "react";
import { useFormik } from "formik";

export default function Login() {
  const formikRegister = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    onSubmit(values) {
      console.log(values);
    },
  });
  return (
    <>
      <div className="w-50 mx-auto my-5">
        <h3>Register Now :</h3>
        <form onSubmit={formikRegister.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            value={formikRegister.values.name}
            onChange={formikRegister.handleChange}
            name="name"
            type="text"
            className="form-control my-3"
            id="name"
          />

          <label htmlFor="email">Email</label>
          <input
            value={formikRegister.values.email}
            onChange={formikRegister.handleChange}
            name="email"
            type="email"
            className="form-control my-3 "
            id="email"
          />

          <label htmlFor="password">Password</label>
          <input
            value={formikRegister.values.password}
            onChange={formikRegister.handleChange}
            name="password"
            type="password"
            className="form-control my-3"
            id="password"
          />

          <label htmlFor="repassword">rePassword</label>
          <input
            value={formikRegister.values.repassword}
            onChange={formikRegister.handleChange}
            name="repassword"
            type="password"
            className="form-control my-3"
            id="repassword"
          />
          <button type="submit" className="btn bg-main text-white">Register</button>
        </form>
      </div>
    </>
  );
}
