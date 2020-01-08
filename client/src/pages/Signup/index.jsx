import React from 'react';
import { connect } from 'react-redux'
import { Button, Col, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import { onLogin } from '../../redux/actions'
import API from '../../api'
import {ServerError} from '../../components/Form';


const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    username: yup.string().required().min(3),
    password: yup.string().required().min(8)
});

/**
 * 
 * @param {*} props 
 * 
 * autocomplete names
 * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete-given-name
 */
const Signup = (props) => {

    return <Modal
        show={true}
        onHide={() => props.history.push('/')}
        animation={false}
        size="lg"
        aria-labelledby="signup-form"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="signup-form">
                Reading List Signup
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5 className="card-title">Signup to create your reading list</h5>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', username:'', password: '' }}
                validationSchema={schema}
                onSubmit={async (values, formikBag) => {
                    try {
                        const data = await API.signup(values);
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
                                <Form.Group as={Col} controlId="signupFirstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete='given-name'
                                        name='firstName'
                                        type="text"
                                        placeholder="First name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        isInvalid={!!errors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName && touched.firstName && errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="signupLastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete='family-name'
                                        name='lastName'
                                        type="text"
                                        placeholder="Last name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        isInvalid={!!errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName && touched.lastName && errors.lastName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="signupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete='email'
                                        name='email'
                                        type="email"
                                        placeholder="Email address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email && touched.email && errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
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
                                        required
                                        autoComplete='new-password'
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
            <Link className="link" to="/login">Already have an account? <span className="link-signup">Login</span></Link>
        </Modal.Body>
    </Modal>;

};

export default connect(
    // mapStateToProps
    null,
    // mapDispatchToProps
    { onLogin }
)(Signup);