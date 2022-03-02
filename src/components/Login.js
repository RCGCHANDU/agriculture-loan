import React from "react";
// formik imports
import { Formik } from "formik";
// react-bootstrap imports
import { Form, Stack, Button } from "react-bootstrap";
// in directory imports
import FormElement from "./FormElement";
// react-router imports
import { Link } from "react-router-dom";    
// yup import
import * as Yup from "yup";
import users from './user';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address format")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      }),
    };
  }
  login() {
    return users[0];
  }
  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={this.state.schema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => {
          return (
          <div className="form">
            <Form noValidate onSubmit={handleSubmit} method="POST" action="/user/login">
              <Stack gap={3}>
                <FormElement
                  labelName="Enter email"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!values.email && touched.email && errors.email}
                  fdString={errors.email}
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
                <Button
                  as="input"
                  id="loginButton"
                  type="submit"
                  value="Login"
                ></Button>
                <p id="signupLink" className="btmlnk">New admin/user ? <Link to="/register">Signup</Link></p>
              </Stack>
            </Form>
          </div>
        )}}
      </Formik>
    );
  }
}
