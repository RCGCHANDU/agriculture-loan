import React from "react";
// react-bootstrap imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
// formik imports
import { Formik } from "formik";
//user component imports
import FormElement from "./FormElement";
// yup import
import * as Yup from "yup";
// react router imports
import { Link } from  "react-router-dom";
import users from './user';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address format")
          .required("Email is required"),

        username: Yup.string().required("Username is required"),

        mobileno: Yup.string().required("Mobile is required"),

        password: Yup.string()
          .min(8, "Password must be 8 characters minimum")
          .required("Password is required"),

        confirmPassword: Yup.string()
          .required("Please confirm your password")
          .oneOf([Yup.ref("password"), null], "Passwords must be match"),
      }),
    };
  } 
  login() {
    return users[0];
  }
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          username: "",
          mobileno: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={this.state.schema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
        }) => {
          return (
            <div className="form">
              <Form noValidate onSubmit={handleSubmit} method="POST" action="/user/signup">
                <Stack gap={3}>
                  <FormElement
                    labelName="Enter email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!values.email && touched.email && errors.email}
                    fdString={errors.email}
                  />
                  <FormElement
                    labelName="Enter username"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!values.username && touched.username && errors.username}
                    fdString={errors.username}
                  />
                  <FormElement
                    labelName="Enter mobile number"
                    id="mobileno"
                    name="mobileno"
                    type="text"
                    placeholder="Enter mobile number"
                    value={values.mobileno}
                    onChange={handleChange}
                    isInvalid={!values.mobileno && touched.mobileno && errors.mobileno}
                    fdString={errors.mobileno}
                  />
                  <FormElement
                    labelName="Enter password"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                  isInvalid={!values.password && touched.password && errors.password}
                    fdString={errors.password}
                  />
                  <FormElement
                    labelName="Confirm password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-Enter password"
                    value={values.confirmPassword}
                    isInvalid={
                      !values.confirmPassword && touched.confirmPassword && errors.confirmPassword
                    }
                    onChange={handleChange}
                    fdString={errors.confirmPassword}
                  />
                  <Button
                    as="input"
                    id="submitButton"
                    type="submit"
                    value="Register"
                  />
                  <p id="signinLink" className="btmlnk">
                    Already a user ? <Link to="/login">Login</Link>
                  </p>
                </Stack>
              </Form>
            </div>
          );
        }}
      </Formik>
    );
  }
}
