import React from 'react';
import { connect } from 'react-redux'
import { Button, Col, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import { onLogin } from '../../redux/actions'
import API from '../../api'
import { ServerError } from '../../components/Form';

const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
});

const Login = (props) => {

    return <Modal
        show={true}
        onHide={() => props.history.push('/')}
        animation={false}
        size="lg"
        aria-labelledby="login-form"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="login-form">
                Reading List Login
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5 className="card-title">Login to your reading list</h5>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={schema}
                onSubmit={async (values, formikBag) => {
                    try {
                        const data = await API.login(values);
                        if (data.success) {
                            props.onLogin(data.tokens);
                        } else {
                            formikBag.setErrors(data.errors);
                        }
                    } catch (err) {
                        formikBag.setStatus(err);
                    }
                    return;
                }}
            >
                {({
                    status,
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <ServerError axiosError={status} />
                            <Form.Row>
                                <Form.Group as={Col} controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        required
                                        name='username'
                                        autoComplete='username'
                                        placeholder="Username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        isInvalid={!!errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username && touched.username && errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="Password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        autoComplete='current-password'
                                        required
                                        name='password'
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password && touched.password && errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</Button>
                        </Form>
                    )}
            </Formik>
            <Link className="link" to="/signup">Don't have an account? <span className="link-signup">Signup</span></Link>
        </Modal.Body>
    </Modal>;

};

export default connect(
    // mapStateToProps
    null,
    // mapDispatchToProps
    { onLogin }
)(Login);

