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
}

const Login = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
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
        <FormikForm>
          <Container>
            <Col className="mx-auto" lg={4} md={6} sm={8} xs={10}>
              <Row className="mb-1">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control name="firstName" type="text" placeholder="Enter first name" />
                  {/* <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="John" /> */}
                </Form.Group>
              </Row>

              <Row className="mb-1">
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Doe" />
              </Row>

              <Row className="mb-3">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="john@acme.com"
                  type="email"
                />
              </Row>

              <Row>
                <Button type="submit">Submit</Button>
              </Row>
            </Col>
          </Container>
        </FormikForm>
      </Formik>
    </div>
  );
};

export default Login;
