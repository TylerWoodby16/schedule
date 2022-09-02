import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Formik, Field, Form as FormikForm, FormikHelpers } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const ForgotPassword = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Forgot Password</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
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
        }) => (
          <FormikForm onSubmit={handleSubmit}>
            <Container>
              <Col className="mx-auto" lg={4} md={6} sm={8} xs={10}>
                <Row className="mb-1">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Send Message to Email</Form.Label>
                    <Form.Control
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values["email"]}
                      type="email"
                      placeholder="Enter your email"
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Button type="submit">Submit</Button>
                </Row>
              </Col>
            </Container>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
